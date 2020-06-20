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
          type: 'MULTIPLE_CHECKBOX',
          label: '标题',
          fieldName: 'MULTIPLE_CHECKBOX',
          selfCols: 2,
          initialValue: [10041001],
          itemList: [
            { value: 10041001, text: '选项A' },
            { value: 10041003, text: '选项B' }
          ],
        }
      ];
    }
  }
}
```