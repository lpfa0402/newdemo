import Mock from 'mockjs';

export default Mock.mock('/api/post', 'post', {
  code: 1,
  message: '',
  'list|10-30': [
    {
      'index|+1': 1, // 属性值自动加 1，初始值为88
      'name': '@cname()',
      'age|10-30': 1, // 18至28以内随机整数, 0只是用来确定类型
      'DISCOUNT_MODE_NAME': "@date('yyyy-MM-dd')", // 日期
    }
  ]
});
