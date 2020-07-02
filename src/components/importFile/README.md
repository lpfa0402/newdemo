<h1 align="center">
  A Vue importFile Component by jzy
</h1>

#### importFile 组件调用

`组件的引用`

```bash
# main.js
import importFile from '@/components/importFile';
Vue.use(importFile);
```

`组件参数API`

- title{String|必选参数，上传的按钮文字}
- actionUrl{String|必选参数，上传的地址}
- close{Function|关闭的回调事件，参数是上传接口的数据}

`示例代码`

```bash
# template
<template>
  <importFile
    title="导入"
    actionUrl="/api/cluecenter/jk/clue/excelImportCheck"
    @close="closeHandler"
  />
</template>

# js
export default {
  data() {
    return {
      form: {
        fileList: []
      }
    };
  },
  methods: {
    closeHandler(val) {
      this.form.fileList = val;
    }
  }
};
```
