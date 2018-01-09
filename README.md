# east_news

> 基于 vue 改版的部分东方头条静态页面

- 该项目主要技术栈为**vue + vue-router + webpack**，初期上手`vue`练手之用
- 该项目主要集成列表页和详情页，列表页由 **flashimg - 图片轮播**、**hotNews - 新闻热点**、**hoursNew - 24小时新闻排行**、**imgList - 图片列表**、**newsList - 新闻列表** 5个组件构成

- 列表页所有数据集中在主页面`componentList`组件里面，详情页的所有数据在`contentShow`组件里面，在`componentList`和`contentShow`组件里面通过自定义事件分发数据，子组件通过`props`接收到父组件的数据，并进行渲染

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
