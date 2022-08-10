# YN P1 Sample Project

## 必要步骤
### [使用元年私有仓储](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001006951)

## 参考网址
### [元年脚手架使用流程](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001009609)
### [Cookbook](http://192.168.12.28:7000/#/cookbook)
### [开发环境及本地开发标准](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001002526)
### [开发语言标准](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001001334)
### [前端通用规范](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001005664)
### [元年组件标准](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001001242)
### [元年VSCode插件](https://marketplace.visualstudio.com/items?itemName=yuanian.yn-p1)
### [Vue官网](https://cn.vuejs.org/v2/guide/index.html)
### [路由Vue Router已封装进RouterUtils](https://cn.vuejs.org/v2/guide/index.html)
### [HTTP 请求已封装进DsUtils](https://github.com/axios/axios)
### [前端问题反馈](https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001012242)

## 安装依赖

** 2020年3月30号之前安装的yn-p1需要重新安装（yn-p1改为读package.json，使用最新版yn-p1）**

** 推荐用cnpm **

** 无论cnpm还是npm必须使用元年私有仓储 **


```
cnpm install

or

npm install
```

### 本地开发启动

```
npm run serve
```

### 部署打包

```
npm run build
```


### 运行 UT

```
npm run test:unit
```

### 文件结构说明

- .vscode
	--- vSCode IDE设置
- node_modules
	--- npm module使用的目录
- public
	--- index.html 和 网站favorite icon.
- src
	--- 源文件目录
	- config
	--- 配置文件夹。SETUP.js - 配置后端地址，navi/menuStructure.js - 配置菜单项
    - custom
    --- 二开代码目录
	- store
	--- Vuex store应用文件夹
	- themes
	--- 元年css主题文件夹
	- views
	--- 视图文件夹。建议所有应用代码都放在views/applications下新建一个文件夹。
	- App.vue
	--- 最外层vue文件
	- main.js
	--- main.js文件
- tests
	--- 测试目录 
- .gitignore
	--- git ignore 文件
- babel.config.js
	--- babel 配置文件
- LICENSE
	--- 版本说明文档
- package-lock.json
	--- npm module 具体依赖关系和版本文件
- package.json
	--- npm moudle列表文件
- README.md
	--- 工程使用说明文档
- vue.config.js
	--- vue配置文件

# 待实现
1. 参考ECS 框架层实现多语言。
2. UT 标准
3. Theme

# Supports

## Vue 项目模板
1.  温立志

## MDV Grid 等表格
1. 宫超

## 公共组件
1. 潘柯华

## 手机端
1. 潘柯华

## 元年私有仓储
1. 温立志

# Changelog
