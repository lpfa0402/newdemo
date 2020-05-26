```bash
<template>
  <TopFilter
    :list="topFilterInit"
    :cols="3"
    :rows='1'
    :disabled="false"
    :collapse="true"
    :isSubmitBtn="true"
    @filterChange="changeHandle"
    @resetChange="resetChange"
    @onCollapse="onCollapse"
  />
</template>
<script>
export default {
  name: 'TopFilterTest',
  data() {
    return {
      topFilterInit: this.createTopFilters(),
    };
  },
  methods: {
    createTopFilters() {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'title',
          placeholder: '请输入标题名称...',
          initialValue: '',
          filterable: false,
          style: { width: '200px' },
          rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
        },
        {
          type: 'SELECT',
          label: '所属分类',
          fieldName: 'cid',
          placeholder: '所属分类',
          itemList: [{ text: '热点', value: '1' }, { text: '资讯', value: '2' }],
          rules: [{ required: true, message: '请选择所属分类', trigger: 'change' }]
        }
      ];
    },
    changeHandle(val){
      console.log('搜索的参数：', val);
    }
}
```