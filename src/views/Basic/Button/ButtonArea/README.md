```bash
<template>
  <ButtonArea :containerStyle="{ paddingLeft: '80px' }align="left"">
    <el-button size="small" type="primary">到货确认</el-button>
    <el-button size="small">明细</el-button>
    <el-button size="small">发货单</el-button>
  </ButtonArea>
</template>
<script>
export default {
  name: 'ButtonAreaTest',
  data() {
    return {};
  },
  methods: {}
}
```