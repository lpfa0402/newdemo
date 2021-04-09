/*
 * @Author: Lpf
 * @Date: 2021-03-02 16:54:40
 * @LastEditTime: 2021-04-09 14:59:14
 * @Description: 
 */
/**
 * 第一个模块的全部路由
 */
// 引入路由包裹器
const RouteView = () => import('@/layout/RouteView');

// 创建异步路由组件加载
const AsyncComponent = __name__ => () => import(`@/views/${__name__}`);

// 菜单路由
const menuRoutes = [
  {
    path: '/home',
    meta: { title: '基础组件', icon: 'el-icon-s-tools' },
    redirect: '/home',
    component: RouteView,
    children: [
      {
        path: '/home/HomeA',
        meta: { title: '组件一' },
        component: AsyncComponent('Home/HomeA/HomeA')
      },
      {
        path: '/home/HomeB',
        meta: { title: '图片压缩上传' },
        component: AsyncComponent('Home/HomeB/HomeB')
      },
      {
        path: '/home/HomeC',
        meta: { title: '多级选中联动表格' },
        component: AsyncComponent('Home/HomeC')
      }
    ]
  }
];
export default menuRoutes;
