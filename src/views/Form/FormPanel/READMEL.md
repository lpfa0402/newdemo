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
          type: 'TEXT_AREA',
          label: 'textarea输入框 ',
          fieldName: 'TEXT_AREA',
          maxlength: 100,
          rows: 2
        }
      ];
    }
  }
}
```