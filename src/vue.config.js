const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   host:'localhost',
  //   port:8080,
  //   proxy:{
  //     '/yun':{
  //       target:'https://music.163.com',
  //       changeOrigin:'true',
  //       pathRewrite: { "^/yun": "" },
  //       ws: true,
  //     }
  //   }
  // }
})
