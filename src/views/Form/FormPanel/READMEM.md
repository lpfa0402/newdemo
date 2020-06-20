```bash
<template>
  <FormPanel
    :list="formList"
  />
</template>
<script>
export default {
  name: 'FormPanelTest',
  data() {
    return {
      formList: this.CreatFormList()
    };
  },
  methods: {
    CreatFormList() {
      return [
        {
          type: 'UPLOAD_IMG',
          label: '图片上传',
          fieldName: 'UPLOAD_IMG',
          upload: {
            actionUrl: 'https://jsonplaceholder.typicode.com/posts/',
            fixedSize: [5, 3],
            isCalcHeight: true,
            limit: 1,
            titles: ['标题A'],
            tipText: '提示文字'
          }
        }
      ];
    }
  }
}
```