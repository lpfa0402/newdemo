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
          type: 'INPUT_NUMBER',
          label: '标题',
          fieldName: 'INPUT_NUMBER',
          min: 5,
          max: 10,
          step: 2,
          precision: 2
        }
      ];
    }
  }
}
```