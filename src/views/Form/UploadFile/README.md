```bash
<template>
  <UploadFile
    @error="error()"
    @change="change()"
    :multiple="multiple"
    :containerStyle="containerStyle"
    :autoUpload="true"
    :disabled="disabled"
    :params="{ canshu: 'aaa' }"
    :fileSize="fileSize"
    :limit="limit"
    :isOnlyButton="isOnlyButton"
    :fileTypes="fileTypes"
    actionUrl="actionUrl"
    :initialValue="initialValue"
  >
    上传
  </UploadFile>
</template>
<script>
export default {
  name: 'UploadCropperTest',
  data() {
    return {
      initialValue: [
        {
          name: 'aaa',
          url:
            'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'
        }
      ],
      fileTypes: ['png', 'pdf'],
      isOnlyButton: false,
      limit: 1,
      fileSize: 5,
      disabled: false,
      containerStyle: {border: '1px solid #e55954'},
      multiple: false,
    };
  },
  methods: {
    change(val) {
      // 上传成功回调
      console.log(val);
    },
    error(val) {
      // 上传失败的回调
      console.log(val);
    }
  }
}
```