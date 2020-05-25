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
    path: '/Table',
    meta: { title: '表格组件', icon: 'el-icon-s-grid' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Table/Table',
        meta: { title: 'Table 表格' },
        component: AsyncComponent('Table/Table')
      },
      {
        path: '/Table/TableColumns',
        meta: { title: 'Table 表头参数' },
        component: AsyncComponent('Table/TableColumns')
      }
    ]
  }
];
export default menuRoutes;
