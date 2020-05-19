```bash
<template>
  <div>
    <Spin :spinning="loading" tip="Loading...">
      <div style="width: 100%; height: 60px">需要 Loading 的区域</div>
    </Spin>
    <el-button @click="loading = !loading">切换状态</el-button>
  </div>
</template>
<script>
export default {
  name: 'SpinTest',
  data() {
    return {
      loading: true,
    };
  },
  methods: {}
}
```