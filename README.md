以vue为框架开发的个人博客
=====

> 在个人博客开发过程中主要采用的技术栈为Vue+Node+express+mysql+Nginx。项目上目前仅前端源码开放。

安装与使用
-----

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

版本特性
-----
#### ver 1.0.0
- 实现博客页面交互基础，完成后台文章发布功能
- 使用express作后台框架
- 文本写作引入MD语法

#### ver 1.0.1（当前版本）
- 封装前端http请求模块
- 将express框架替换为koa2框架
- 根据koa2特性调整接口写法

接口名 | 完成度
---|:---:
articleList | ✔
article | ✔
catalogs | ✔
backup_articleList | ✔
backup_articleTimeSearch | ✔
backup_catalogs | ✔
backup_columns | ✔
backup_release | ✔
backup_tags | ✔
backup_updateTag | ✔

- 新增```／interface```文件夹分离前后端接口目录(/api为前端接口目录,/interface为后台接口目录)
- 修改了登录逻辑中用户名或密码错误依旧成功的bug
- 更新cookie设置与获取的方式做接口权限管理
