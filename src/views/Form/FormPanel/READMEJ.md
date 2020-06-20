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
          type: 'DATE',
          label: '标题',
          fieldName: 'DATE',
          dateType: 'date',
          format: 'yyyy-MM',
          valueFormat: [],
          minDateTime: '2020-1-1',
          maxDateTime: '2020-10-1'
        }
      ];
    }
  }
}
```