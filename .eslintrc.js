module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    // "@vue/prettier" // 引入prettier代码格式化工具
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    //  0 不处理 1 警告  2 错误并退出
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // console 不会报错
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // debugger 不会报错
    'quotes': [2, 'single', { 'avoidEscape': true }], // 字符串使用单引号
    'no-unused-vars': [2, { 
      'vars': 'local', // 允许声明未使用变量
      'args': 'none' // 参数不检查
    }],
    'semi': [1], // 语句强制分号结尾 0 关闭
    'multiline-ternary': 'off', // 三元表达式是否强制换行
    'object-curly-newline': [ // 大括号首位必须换行
      'error',
      {
          multiline: true,
          consistent: true
      }
    ],
    'one-var': [ // 禁止变量申明时用逗号一次申明多个
      'error',
      'never'
    ],
    'one-var-declaration-per-line': [ // @fixable 变量申明必须每行一个
      'error',
      'always'
    ],
  }
};