```bash
<template>
  <div>
    <el-button @click="printHandler">打印</el-button>
    <BasePrint ref="print" :data="printList" template="template1" />
  </div>
</template>
<script>
export default {
  name: 'ExportFileTest',
  data () {
    return {
      printList: {}
    };
  },
  methods: {
    printHandler() {
      this.$refs.print.EXCUTE_PRINT();
    }
  }
};
</script>
```