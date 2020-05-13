```bash
<template>
  <LazyLoadTabs
    v-model="activeName"
    :type="type"
    :position="position"
    :destroyOnClose="destroyOnClose"
    :tabMenus="menus"
    @tab-click="TabClick"
    @input="ckinput"
  />
</template>
<script>
export default {
  data () {
    activeName: '测试页A',
    type: null,
    position: null,
    destroyOnClose: false,
    menus: [
      {
        title: '测试页A',
        path: 'Navigations/Tabs/TabsPage/TabsPageA', // 展示文件的路径
        params: {
          type: 1,
          canshu: '666'
        }
      },
      {
        title: '测试页B',
        path: 'Navigations/Tabs/TabsPage/TabsPageB',
        disabled: true,
        params: {
          type: 2
        }
      },
      {
        title: '测试页C',
        path: 'Navigations/Tabs/TabsPage/TabsPageC',
        params: {
          type: 3,
          canshu: '777'
        },
        on: {
          myCallback: list => {
            console.log('list--', JSON.stringify(list));
          },
          myCallbackB: list => {
            console.log('list--', JSON.stringify(list));
          }
        }
      }
    ],
  },
  methods: {
    // 触发tab-click
    TabClick(e) {
      console.log(e);
    },
    // 触发@input
    ckinput(e) {
      console.log(e);
    }
  }
}
</script>
```
```bash
  # 子组件参数接收与事件触发
  TabsPageC.vue
<script>
export default {
  props: {
    type: Number,
    canshu: String
  },
  name: 'TabsPageC',
  mounted() {
    this.$emit('myCallback', '测试myClallback的回调');
    this.$emit('myCallbackB', '测试myClallbackB的回调');
  }
};
</script>
```