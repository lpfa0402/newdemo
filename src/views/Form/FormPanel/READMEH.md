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
          type: 'CHECKBOX',
          label: '标题',
          fieldName: 'CHECKBOX',
          options: { trueValue: 10041001, falseValue: 10041002 },
          CHECKBOX: val => {
            console.log('选中的值', val);
          }
        }
      ];
    }
  }
}
```