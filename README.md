# freeCodeCamp Xi`An Official Website

![](./assets/fcc-logo.png)

![](https://camo.githubusercontent.com/f96261621753dacf526590825b84f87ccb1db0e6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c6174) ![](https://camo.githubusercontent.com/8acbec6018c63987f36c8243243506c24c4f803c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697273742d2d74696d6572732d2d6f6e6c792d667269656e646c792d626c75652e737667)

## Project dependencies

* [Vue.js](https://vuejs.org/)
* [Element UI](http://element-cn.eleme.io/)
* [Webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/)
* More dependencies see the [package.json](./package.json)

## Build Setup

This Project is built with Vue-CLI.

> For a detailed guide with recipes for common tasks, detailed usage for each plugin, please see the [full documentation](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md).

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
cnpm run dev

# build for production with minification
cnpm run build

# build for production and view the bundle analyzer report
cnpm run build --report
```

## Pit Encountered

|Pit Encountered|Result|Solution|
|----|----|----|
|try to use Parcel instead of Webpack|failed|use Webpack instead|
|try to add dependencies one by one instead of using Vue CLI|failed|use Vue CLI instead|
|try to publish docs/ floder to freeCodeCodeCamp-XiAn.github.io|failed|change project name into home|
|try to write pure CSS without any CSS Layout|give up|import element-ui as a dependency|

## LICENSE

[MIT LICENSE](./LICENSE)
