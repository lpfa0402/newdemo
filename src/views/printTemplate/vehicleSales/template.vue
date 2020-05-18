<template>
  <div v-show="isPreview" ref="print" style="width: 800px; margin: 0 auto;">
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">预收单</td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="26" style="font-size: 14px;">打印人：{{ username }}&nbsp;&nbsp;&nbsp;&nbsp;日期：{{ nowTime }}&nbsp;</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">NO</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.orderNo }}</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">打印日期</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ nowTime }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">主题</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">客户预付定金</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">建单日期</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.buildDate }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">客户名称</td>
        <td width="80%" colspan="3" style="border: 1px solid #000; font-size: 14px;">{{ data.customerName }}</td>
      </tr>
      <tr v-for="x in data.detailList" :key="x.$index">
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">收款明细</td>
        <td width="80%" colspan="3" style="border: 1px solid #000; font-size: 14px;">{{ x.preAmt }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">金额大写</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.capitalSum }}</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">（小写）￥</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.sumPreAmt }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">备注</td>
        <td width="70%" colspan="3" style="border: 1px solid #000; font-size: 14px;">{{ data.remark }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">经办人</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.handlerName }}</td>
        <td width="50%" colspan="2" style="border: 1px solid #000; font-size: 14px;">收款单位盖章</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;"></td>
      </tr>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;"></td>
      </tr>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;"></td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="24" style="font-size: 20px;">客户签字：___________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';
import { getUser } from '@/assets/js/auth';

export default {
  name: 'wjyPrecollectMaintainTemplate',
  props: {
    data: {
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
      nowTime: moment().format('YYYY-MM-DD'),
      username: getUser()
    };
  },
  computed: {
    totalPrice() {
      return this.data.items.reduce((prev, curr) => {
        return curr.ckdj * curr.ckdj + prev;
      }, 0);
    }
  },
  mounted() {
    console.log(this.data);
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
