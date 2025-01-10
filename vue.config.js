const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: false,
  productionSourceMap: false,
})
