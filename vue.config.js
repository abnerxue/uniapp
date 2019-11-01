/*
 * @Description: 
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2019-10-28 14:17:39
 * @LastEditors: 薛松田
 * @LastEditTime: 2019-11-01 16:04:51
 */
const webpack = require('webpack')
// const ThemePlugin = require('./lib/theme-plugin')

const {
  UNI_PLATFORM,
  ZK_DIY
} = process.env


module.exports = {
  // css: {
  //   extract: !!ZK_DIY
  // },
  configureWebpack: {
    devServer: {
      host: 'localhost',
      port: '2000',
      disableHostCheck: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          UNI_PLATFORM: JSON.stringify(UNI_PLATFORM),
          ZK_DIY: JSON.stringify(ZK_DIY)
        }
      })
    ]
  },
  chainWebpack(config) {
    if (ZK_DIY) {
      // config
      //   .plugin('theme')
      //   .use(ThemePlugin)

      // config
      //   .resolveLoader
      //   .alias
      //   .set('sass-loader', './lib/diy-loader')
    }
  }
}
