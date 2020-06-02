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
    path: '/Basic',
    meta: { title: '基础组件', icon: 'el-icon-s-grid' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Basic/Button',
        meta: { title: 'Button 按钮' },
        component: RouteView,
        children: [
          {
            path: '/Basic/Button/AjaxButton',
            meta: { title: 'AjaxButton' },
            component: AsyncComponent('Basic/Button/AjaxButton/AjaxButton')
          },
          {
            path: '/Basic/Button/MultiuseButton',
            meta: { title: 'MultiuseButton' },
            component: AsyncComponent('Basic/Button/MultiuseButton')
          }
        ]
      },
      {
        path: '/Basic/BaseDialog',
        meta: { title: 'BaseDialog 对话框' },
        component: AsyncComponent('Basic/BaseDialog/BaseDialog')
      },
      {
        path: '/Basic/Spin',
        meta: { title: 'Spin 区域Loding' },
        component: AsyncComponent('Basic/Spin')
      }
    ]
  }
];
export default menuRoutes;
