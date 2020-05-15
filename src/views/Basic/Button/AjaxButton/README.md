```bash
<template>
  <!-- 将@click绑定的ajax事件换成 :click绑定 -->
  <AjaxButton :click="saveHandle" size="small" type="primary">
    提交
  </AjaxButton>
</template>
<script>
// 引入接口
import { reqPost } from '@/api';
export default {
  name: 'AjaxButtonTest',
  data() {
    return {};
  },
  methods: {
    // 异步发送Ajax请求
    async saveHandle() {
      await reqPost();
    }
  }
}
```