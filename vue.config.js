const path = require ('path');
module.exports = {
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: '0.0.0.0', // 匹配本机IP地址(默认是0.0.0.0)
    port: 8081, // 开发服务器运行端口号,被占用的话会自动改变
    proxy: {
      '/api': {
        target: 'http://www.exaple.com', // 代理接口地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // 使用全局less变量， 先运行 vue add style-resources-loader 之后添加下面代码
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname,'./src/assets/css/variables.less')]
    }
  },
  configureWebpack: config => {
    // 引入markdown-loader全局使用
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader',
        },
        {
          loader: require.resolve('./markdown-loader'),
        },
      ],
    },);
  },
};
