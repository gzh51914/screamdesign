module.exports = {
  devServer: {
    open: true, // 默认开启浏览器
    port: 8000, // 更改默认端口号为8000
    proxy: {
      '/info': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true,
        pathRewrite: {
          '^/info': ''
        },
        secure: false
      }
    }
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        con: '@/components',
        views: '@/views',
        utils: '@/utils',
        stylesheets: '@/stylesheets'
      }
    }
  }
}
