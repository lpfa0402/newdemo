```bash
<template>
  <multiuse-button size="small" @click="closeHandle">关闭</multiuse-button>
  <multiuse-button size="small" :click="saveHandle" :auth-list="auths" auth-mark="/api/aaa">保存<multiuse-button>
  <multiuse-button type="warning" :click="saveHandle.bind(this, 1)">保存</multiuse-button>
</template>
<script>
// 引入接口
import { authority } from '@/utils/authMixin';
import { saveApi } from '@/api/xxx/xxx';
export default {
  mixins: [authority],
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    async saveHandle(type) {
      // if (type === 1) {
      //   业务逻辑判断
      // }
      const res = await saveApi(this.formData);
    },
    closeHandle() {}
  }
}
```