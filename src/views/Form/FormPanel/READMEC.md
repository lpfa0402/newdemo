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
          type: 'INPUT',
          label: '搜索',
          fieldName: 'INPUT',
          minlength: 2,
          maxlength: 10,
          rules: [{ pattern: /^1[3456789]\d{9}$/, message: '失败提示', trigger: 'blur' }],
          numberFormat: true,
          showPassword: true,
          onFocus: val => {
            console.log('获得焦点', val);
          },
          onEnter: val => {
            console.log('回车', val);
          },
          onInput: val => {
            console.log('输入事件', val);
          },
          unitRender: val => {
            return <span>后置单位的渲染</span>;
          }
        }
      ];
    }
  }
}
```