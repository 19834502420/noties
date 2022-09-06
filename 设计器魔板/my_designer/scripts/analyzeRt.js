/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { exec } = require("child_process");

let complete = false;

let options = {
  maxBuffer: 100 * 1024 * 1024
};

exec(`node changeEntry --save-default`, options, (err, stdout, stderr) => {
  err && console.log(err);
  console.log("-------缓存默认入口-------");
  exec(`node changeEntry --designer-rt`, options, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("-------替换运行态入口-------");
    console.log("-------开始打包运行态-------");
    var workerProcess = exec(
      `use_analyzer=true vue-cli-service build --mode=integrate  --designer-rt`,
      options,
      err => {
        if (err) {
          console.log(err);
          throw err;
        }
      }
    );
    workerProcess.stdout.on("data", function(data) {
      if (data.includes("js/") && !complete) {
        complete = true;
        // 打包完以后把文件复原
        console.log("-------打包完成，复原文件-------");
        exec(
          `sed -i "" "s/isDesignTime: false/isDesignTime: true/" ./vue.config.js`
        );
        exec(`node changeEntry --clear`);
      }
    });
  });
});
