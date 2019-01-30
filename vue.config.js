module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080
  }, 
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1,
                name: 'assets/docs/[name].[hash:8].[ext]'
              }
            }
          ]
        }, {
          test: /\.(tpl)(\?.*)?$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                name: 'assets/docs/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
}
