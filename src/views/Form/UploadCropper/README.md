```bash
<template>
  <UploadCropper
    @error="conerror"
    @success="successHandler"
    :isFileName="true"
    :disabled="disabled"
    :titles="titles"
    :limit="limit"
    :isCalcHeight="isCalcHeight"
    :fixedSize="fixedSize"
    :initialValue="initialValue"
    actionUrl="UploadCropper"
  />
</template>
<script>
export default {
  name: 'UploadCropperTest',
  data() {
    return {
      initialValue: [
        {
          name: '图片',
          url:
            'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'
        }
      ],
      fixedSize: [1, 1],
      isCalcHeight: false,
      limit: 1,
      titles: ['标题一'],
      disabled: false,
    };
  },
  methods: {
    successHandler(val) {
      console.log('成功回调', val);
    },
    conerror(val) {
      console.log('失败回调', val);
    }
  }
}
```