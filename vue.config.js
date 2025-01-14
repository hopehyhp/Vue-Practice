const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/data': {
        target: 'http://apis.juhe.cn/atmos/',
        changeOrigin: true,
        pathRewrite: { '^/data': '' },
      },
    },
  },
})
