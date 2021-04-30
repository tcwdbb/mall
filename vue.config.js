// module.exports = {
//   configurewebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'commponents': '@/commponents',
//         'common': '@/common',
//         'views': '@/views',
//         'network': '@/network'
//       }
//     }
//   }
// }

const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports={
  chainWebpack:(config)=>{
      config.resolve.alias
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
      .set('assets',resolve('./src/assets'))
      .set('common',resolve('./src/common'))
      .set('views',resolve('./src/views'))
      .set('network',resolve('./src/network'))
      //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
  },
//   devServer: {
//     disableHostCheck: false,
//     host: "192.168.43.3",
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     proxy: null
// }
}