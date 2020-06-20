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
          type: 'INPUT_TREE',
          label: '标题',
          fieldName: 'INPUT_TREE',
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
        }
      ];
    }
  }
}
```