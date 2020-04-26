module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1024 }))
  },
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  productionSourceMap: false
}
