export default {
  data: [
    {
      path: '/home',
      key: '/home',
      title: '基础组件',
      icon: 'el-icon-s-check',
      children: [
        {
          path: '/home/HomeA',
          key: '/home/HomeA',
          title: '组件一',
          icon: 'el-icon-s-check'
        },
        {
          path: '/home/HomeB',
          key: '/home/HomeB',
          title: '组件二',
          icon: 'el-icon-s-check'
        }
      ]
    },
    {
      path: '/Function',
      key: '/Function',
      title: '功能组件',
      icon: 'el-icon-s-check',
      children: [
        {
          path: '/Function/ExportFile',
          key: '/Function/ExportFile',
          title: '导出文件'
        },
        {
          path: '/Function/BasePrint',
          key: '/Function/BasePrint',
          title: '打印'
        },
        {
          path: '/Function/CountUp',
          key: '/Function/CountUp',
          title: '数字滚动'
        }
      ]
    },
    {
      path: '/Navigation',
      key: '/Navigation',
      title: '导航组件',
      icon: 'el-icon-wind-power',
      children: [
        {
          path: '/Navigations/Tabs',
          key: '/Navigations/Tabs',
          title: 'Tabs 标签页'
        },
        {
          path: '/Navigations/Breadcrumb',
          key: '/Navigations/Breadcrumb',
          title: 'Breadcrumb 面包屑'
        },
        {
          path: '/Navigations/Anchor',
          key: '/Navigations/Anchor',
          title: 'Anchor 页内导航'
        }
      ]
    },
    {
      path: '/Basic',
      key: '/Basic',
      title: '基础组件',
      icon: 'el-icon-s-grid',
      children: [
        {
          path: '/Basic/Button',
          key: '/Basic/Button',
          title: 'Button 按钮',
          children: [
            {
              path: '/Basic/Button/AjaxButton',
              key: '/Basic/Button/AjaxButton',
              title: 'AjaxButton'
            },
            {
              path: '/Basic/Button/MultiuseButton',
              key: '/Basic/Button/MultiuseButton',
              title: 'MultiuseButton'
            },
            {
              path: '/Basic/Button/ButtonArea',
              key: '/Basic/Button/ButtonArea',
              title: 'ButtonArea'
            }
          ]
        },
        {
          path: '/Basic/BaseDialog',
          key: '/Basic/BaseDialog',
          title: 'BaseDialog 对话框'
        },
        {
          path: '/Basic/Spin',
          key: '/Basic/Spin',
          title: 'Spin 区域Loding'
        }
      ]
    },
    {
      path: '/Form',
      key: '/Form',
      title: 'Fomr 组件',
      icon: 'el-icon-tickets',
      children: [
        {
          path: '/Form/UploadCropper',
          key: '/Form/UploadCropper',
          title: 'UploadCropper 图片上传'
        },
        {
          path: '/Form/ImportFile',
          key: '/Form/ImportFile',
          title: 'ImportFile 附件上传'
        },
        {
          path: '/Form/UploadFile',
          key: '/Form/UploadFile',
          title: 'UploadFile 文件上传'
        },
        {
          path: '/Form/BreakSpace',
          key: '/Form/BreakSpace',
          title: 'BreakSpace 分隔符'
        },
        {
          path: '/Form/Tinymce',
          key: '/Form/Tinymce',
          title: 'Tinymce 富文本'
        },
        {
          path: '/Form/FormPanel',
          key: '/Form/FormPanel',
          title: 'Form 表单'
        }
      ]
    },
    {
      path: '/Eject',
      key: '/Eject',
      title: '弹窗组件',
      icon: 'el-icon-s-check',
      children: [
        {
          path: '/Eject/Drawer',
          key: '/Eject/Drawer',
          title: '抽屉'
        }
      ]
    },
    {
      path: '/Table',
      key: '/Table',
      title: '表格组件',
      icon: 'el-icon-s-check',
      children: [
        {
          path: '/Table/Table',
          key: '/Table/Table',
          title: 'Table 表格'
        },
        {
          path: '/Table/TableColumns',
          key: '/Table/TableColumns',
          title: 'Table 表头参数'
        },
        {
          path: '/Table/TopFilter',
          key: '/Table/TopFilter',
          title: 'Table 搜索'
        }
      ]
    },
  ]
};
