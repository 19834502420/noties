var argv = require("minimist")(process.argv.slice(2));

const { exec } = require("child_process");

let { tag } = argv;

let extraParams = "";

const { log } = console;

if (tag) {
  extraParams += `--tag=${tag}`;
}

let options = {
  maxBuffer: 100 * 1024 * 1024
};

exec(
  `node changeEntry --save-default ${extraParams}`,
  options,
  (err, stdout) => {
    err && log(err);
    log(stdout);
    log("--save-default over");
    exec(
      `sed -i "" "s/isDesignTime: false/isDesignTime: true/" ./vue.config.js`,
      {},
      () => {
        exec(
          `vue-cli-service build --mode=integrate`,
          options,
          (err, stdout) => {
            err && log(err);
            log(stdout);
            log("build dist over");
            exec(
              `sed -i "" "s/isDesignTime: true/isDesignTime: false/" ./vue.config.js`,
              {},
              () => {
                exec(
                  `node changeEntry --designer-rt ${extraParams}`,
                  options,
                  (err, stdout) => {
                    err && log(err);
                    log(stdout);
                    log("--designer-rt over");
                    exec(
                      `vue-cli-service build --mode=integrate  --designer-rt`,
                      options,
                      (err, stdout) => {
                        err && log(err);
                        log(stdout);
                        log("build rt over");
                        exec(
                          `node changeEntry --clear ${extraParams}`,
                          options,
                          (err, stdout) => {
                            err && log(err);
                            log(stdout);
                            log("--clear over");
                            exec(
                              `sed -i "" "s/isDesignTime: false/isDesignTime: true/" ./vue.config.js`
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
