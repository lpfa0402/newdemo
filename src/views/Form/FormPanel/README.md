```bash
<template>
  <FormPanel
    :list="formList"
    :formType="formType"
    :cols="cols"
    :labelWidth="labelWidth"
    :isSubmitBtn="isSubmitBtn"
  />
</template>
<script>
export default {
  name: 'FormPanelTest',
  data() {
    return {
      formList: this.CreatFormList(),
      formType: 'add',
      cols: 3,
      labelWidth: 80,
      isSubmitBtn: true,
    };
  },
  methods: {
    CreatFormList() {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'search'
        },
        {
          type: 'INPUT',
          label: '搜索2',
          fieldName: 'searchb'
        }
      ];
    }
  }
}
```