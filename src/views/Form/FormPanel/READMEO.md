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
          type: 'RADIO',
          label: '单选框',
          fieldName: 'RADIO',
          itemList: [
            {text: '是', value: 1},
            {text: '否', value: 0}
          ]
        }
      ];
    }
  }
}
```