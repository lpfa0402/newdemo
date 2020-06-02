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
    path: '/Function',
    meta: { title: '功能组件', icon: 'el-icon-s-tools' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Function/ExportFile',
        meta: { title: '导出文件' },
        component: AsyncComponent('Function/ExportFile')
      },
      {
        path: '/Function/BasePrint',
        meta: { title: '打印' },
        component: AsyncComponent('Function/BasePrint')
      },
      {
        path: '/Function/CountUp',
        meta: { title: '数组滚动' },
        component: AsyncComponent('Function/CountUp')
      }
    ]
  }
];
export default menuRoutes;
