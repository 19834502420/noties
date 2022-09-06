const fs = require("fs");
const path = require("path");
const moment = require("moment");
const { log } = console;

let entryPath = path.join(__dirname, "src/main.js");

let mode = process.env.NODE_ENV;
let tag = process.env.tag;

let targetEntryFile = path.join(__dirname, "src/entries/default/main.js");

// 先是 --save-default 把src/main.js存到default下面

// 然后 --designer-rt or --dashboard-rt

// 最后 --clear 把default下的main.js挪到src下，然后把default下的删掉

if (process.argv.includes("--designer-rt")) {
  targetEntryFile = path.join(__dirname, "src/entries/designer-rt/main.js");
} else if (process.argv.includes("--dashboard-rt")) {
  targetEntryFile = path.join(__dirname, "src/entries/dashboard-rt/main.js");
} else if (process.argv.includes("--save-default")) {
  entryPath = path.join(__dirname, "src/entries/default/main.js");
  targetEntryFile = path.join(__dirname, "src/main.js");
}

if (fs.existsSync(targetEntryFile)) {
  let readStream = fs.createReadStream(targetEntryFile);
  let writeStream = fs.createWriteStream(entryPath);
  readStream.on("end", () => {
    if (process.argv.includes("--clear")) {
      fs.unlinkSync(targetEntryFile);

      // 给html写入版本信息
      let time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
      let extraInfo = `<!-- ${"mode:" + mode} ${
        process.env.LOG_STRING
      } time:${time} ${tag ? "tag:" + tag : ""} -->`;

      fs.appendFile(
        path.join(__dirname, "dist/index.html"),
        extraInfo,
        "utf-8",
        function(err) {
          if (err) {
            log("版本信息写入失败！");
            log("dist/index.html版本信息写入失败！");
            log(err);
            return;
          }
          log("版本信息写入成功");
          log("dist/index.html版本信息写入成功");
        }
      );
      fs.appendFile(
        path.join(__dirname, "dist/designer_rt.html"),
        extraInfo,
        "utf-8",
        function(err) {
          if (err) {
            log("dist/designer_rt.html版本信息写入失败！");
            log(err);
            return;
          }
          log("dist/designer_rt.html版本信息写入成功");
        }
      );
    }
  });
  readStream.pipe(writeStream);
}
