var argv = require("minimist")(process.argv.slice(2));
let { env } = argv;
const { exec } = require("child_process");
const { log } = console;
let options = {
  maxBuffer: 100 * 1024 * 1024
};
let complete = false;

exec(`uname`, options, (err, stdout) => {
  const curUname = stdout.replace("\n", ""); //获取当前的环境名称
  const replaceCordSamePart = curUname === "Darwin" ? `sed -i ""` : `sed -i`;
  err && log(err);
  log(stdout);
  exec(
    `${replaceCordSamePart} "s/isDesignTime: true/isDesignTime: false/" ./vue.config.js`,
    {},
    () => {
      if (env === "production") {
        exec(`node changeEntry --designer-rt`, options, (err, stdout) => {
          err && log(err);
          log(stdout);
          let workerProcess = exec(
            `vue-cli-service build --mode=production --designer-rt --watch`,
            options,
            (err, stdout) => {
              err && log(err);
              log(stdout);
            }
          );
          workerProcess.stdout.on("data", function(data) {
            log(data);
            if (data.includes("Build complete") && !complete) {
              complete = true;
              // 开子进程启服务
              log(
                `\n > main.js 和 vue.config 已修改为运行态的配置，请注意在提交代码时剔除`
              );
              let childWorkerProcess = exec(
                "cd dist && http-server -o /designer_rt.html"
              );

              childWorkerProcess.stdout.on("data", data => {
                // 请求资源的日志不打
                if (data.includes("GMT+0800")) return;
                log(data);
              });
            }
          });
        });
      } else {
        exec(
          `node changeEntry --save-default && node changeEntry --designer-rt`,
          options,
          (err, stdout) => {
            err && log(err);
            log(stdout);
            let workerProcess = exec(
              "vue-cli-service serve --open --designer-rt-dev",
              options,
              (err, stdout) => {
                err && log(err);
                log(stdout);
              }
            );
            workerProcess.stdout.on("data", function(data) {
              log(data);
              if (data.includes("To create a production build") && !complete) {
                complete = true;
                log(
                  `\n > main.js 和 vue.config 已修改为运行态的配置，请注意在提交代码时剔除`
                );
              }
            });
          }
        );
      }
    }
  );
});
