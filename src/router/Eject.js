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
    path: '/Eject',
    meta: { title: '弹出组件', icon: 'el-icon-s-grid' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Eject/Drawer',
        meta: { title: 'Drawer 抽屉' },
        component: AsyncComponent('Eject/Drawer')
      }
    ]
  }
];
export default menuRoutes;
