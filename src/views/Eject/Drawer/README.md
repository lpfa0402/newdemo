```bash
<template>
  <div>
    <el-button @click="visible = true">打开抽屉</el-button>
    <Drawer 
      :visible.sync="visible"
      :closable="closable"
      :destroyOnClose="destroyOnClose"
      :title="title"
      :position="position"
      :lockScroll="lockScroll"
      :maskClosable="maskClosable"
      :width="width"
      :maskStyle="maskStyle"
      :containerStyle="containerStyle"
      @open="open"
      @close="close"
      @afterVisibleChange="afterVisibleChangeHandle"
    >
      内容
    </Drawer>
  </div>
</template>
<script>
export default {
  name: 'BaseDialogTest',
  data() {
    return {
     visible: false,
      closable: true,
      destroyOnClose: false,
      title: '这是标题',
      position: 'right',
      lockScroll: true,
      maskClosable: true,
      width: 700,
      maskStyle: {
        backgroundColor: '#e55954'
      },
      containerStyle: {
        backgroundColor: '#e55954'
      },
    };
  },
  methods: {
    open() {
      console.log('打开');
    },
    close() {
      console.log('关闭');
    },
    afterVisibleChangeHandle(val) {
      console.log('当前显示状态：', val);
    }
  }
}
```