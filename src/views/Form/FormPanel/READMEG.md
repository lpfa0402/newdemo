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
        type: 'SELECT',
        label: '标题',
        fieldName: 'SELECT',
        multiple: true,
        clearable: true,
        collapseTags: true,
        filterable: true,
        limitNum: 3,
        itemList: [
          {
            value: 1,
            text: 'aa'
          },
          {
            value: 2,
            text: 'bb'
          },
        ],
        change: val => {
          console.log('当前值', val);
        }
      ];
    }
  }
}
```