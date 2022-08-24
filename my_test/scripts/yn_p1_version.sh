# npm ls yn-p1
# yn-p1-designer@0.1.0 /Users/gz/work/yuanian/yn_p1_designer
# └── yn-p1@1.0.117  -> /Users/gz/work/yuanian/yn_p1_designer/node_modules/_yn-p1@1.0.117@yn-p1

# 这里有一个问题，如果项目中有.lock文件。但是node_modules里面实际安装的跟.lock文件里指定的不一样，就会报错

echo `npm ls yn-p1` | awk '{print $4}'