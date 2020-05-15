```bash
<template>
  <div>
    <el-button type="primary" @click="visible = true">打开弹窗</el-button>
    <BaseDialog
      customClass="class"
      @close="close"
      @open="open"
      @opened="opened"
      @closed="closed"
      :visible.sync="visible"
      :closable="closable"
      :destroyOnClose="destroyOnClose"
      :title="title"
      :width="width"
      :modal="modal"
      :lockScroll="lockScroll"
      :maskClosable="maskClosable"
      :containerStyle="containerStyle"
    >
      <div >Dialog Content</div>
    </BaseDialog>
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
      title: '标题',
      width: '50%',
      modal: true,
      lockScroll: true,
      maskClosable: false,
      containerStyle: {
        border: '#e55954 1px solid'
      },
    };
  },
  methods: {
    open() {
      console.log('打开触发');
    },
    opened() {
      console.log('打开事件结束触发');
    },
    close() {
      console.log('关闭触发');
    },
    closed() {
      console.log('关闭事件结束触发');
    }
  }
}
```