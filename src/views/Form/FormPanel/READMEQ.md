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
          type: 'INPUT_CASCADER',
          label: '瀑布流下拉框',
          fieldName: 'INPUT_CASCADER',
          itemList: [
            {
              tetx: '显示文字',
              value: 1
            }
          ]
        }
      ];
    }
  }
}
```