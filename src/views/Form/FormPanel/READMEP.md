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
          type: 'TIME_SELECT',
          label: '时间下拉框',
          fieldName: 'TIME_SELECT',
          options: {
            startTime: '10:00', // 最小的时间
            endTime: '20:00', // 最大的时间
            stepTime: '00:10' // 每一步的间隔
          }
        }
      ];
    }
  }
}
```