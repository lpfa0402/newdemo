```bash
<template>
  <div>
    <OssUpload v-model="ossUploadvalue"  :init="{fileTypes: ['*'],limit:1, root:'file/tianle/'}"   @getUrl="getUrl" />
  </div>
</template>
<script>
export default {
  name: 'OssUploadTest',
  data() {
    return {
      ossUploadvalue:[
        {
          name:'文件名称',
          url:'地址'
        }
      ],
  },
  methods: {
    getUrl(val){
      console.log('返回上传成功文件', val);
    }
  }
}
```