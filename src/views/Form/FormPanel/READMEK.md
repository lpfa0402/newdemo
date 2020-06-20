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
          type: 'SEARCH_HELPER',
          label: '搜索框',
          fieldName: 'SEARCH_HELPER',
          request: {
            fetchApi: () => {},
            params: {canshu: 'aaa'},
            fieldKey: 'name',
            datakey: 'String',
            valueKey: 'String',
            textKey: 'String'
          },
        }
      ];
    }
  }
}
```