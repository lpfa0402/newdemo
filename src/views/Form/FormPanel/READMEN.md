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
          type: 'UPLOAD_FILE',
          label: '文件上传',
          fieldName: 'UPLOAD_IMG',
          upload: {
            actionUrl: 'https://jsonplaceholder.typicode.com/posts/',
            fileSize: 3,
            limit: 1,
            fileTypes: ['jpg', 'jpeg']
          }
        }
      ];
    }
  }
}
```