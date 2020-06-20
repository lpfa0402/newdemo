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
          type: 'BREAK_SPACE',
          label: '分隔符',
          fieldName: 'BREAK_SPACE',
          containerStyle: "{border: '1px solid #e55954'}",
          labelStyle: "{color: '#e55954'}",
          contentPosition: 'left',
          IconClass: 'el-icon-mobile-phone',
        }
      ];
    }
  }
}
```