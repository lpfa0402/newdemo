<template>
  <!-- 打印委托书 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
      <p style="line-height:28px;margin:0;font-size:28px">吉林省国兴汽车贸易有限公司</p>
      <br />
      <p style="line-height:28px;margin:0;margin-top:5px;font-size:28px">出门证</p>
      <p style="line-height:28px;margin:0;margin-top:5px;font-size:15px">{{data.license}}</p>
      <br />
      <p style="line-height:28px;margin:0;margin-top:5px;font-size:15px">{{this.nowTime}}</p>
      <br />
      <p style="line-height:28px;margin:0;margin-top:5px;font-size:15px">（此证盖章有效）</p>
      <span style="line-height:28px;margin:0;margin-top:5px;font-size:15px">打印：{{this.username}}</span>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.repair_contentbox {
  border: 1px;
}
</style>

<script>
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';
import { getUser } from '@/assets/js/auth';
export default {
  name: 'templatePrintCMZ',
  props: {
    data: {
      username: getUser(),
      type: Object,
      required: true,
      default() {
        return {};
      }
    },
    isPreview: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      username: getUser()
    };
  },
  computed: {
    totalPrice() {
      return '';
      // return this.data.items.reduce((prev, curr) => {
      //   return curr.ckdj * curr.ckdj + prev;
      // }, 0);
    }
  },
  created() {},
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
