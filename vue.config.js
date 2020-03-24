const htmlWebpackPlugin=require('html-webpack-plugin')
const path =require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports={
    publicPath:'./',
    outputDir:'dist',
    indexPath:'index.html',
    productionSourceMap:false,
    devServer:{
        proxy:{
            '/api':{
                target:'http://tm.lilanz.com/qywx/api/mobilestockproxy.ashx',
                ws:true,
                changeOrigin: true,
            }
        }
    },
    pages:{
        index:{
            entry:'src/main.js',
            template:'public/index.html',
            filename:'index.html',
            title:'面料查询'
        }
    },
    chainWebpack:config=>{
        config.resolve.alias
            .set('@static',resolve('public/static'))

    }
}