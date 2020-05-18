<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table class="bor">
      <tr>
        <h2 width="20%" align="center">公司名称：用友汽车</h2>
      </tr>
      <tr>
        <td width="20%" align="left" height="30">预收款单号：{{ data.preReceiveNo }}</td>
        <td width="20%" align="left" height="30">客户编号：{{ data.customerCode }}</td>
      </tr>
      <tr>
        <td colspan="3" align="left" height="30">客户名称：{{ data.customerName }}</td>
      </tr>
      <tr>
        <td width="20%" align="left" height="30">收款类别：{{ data.receiveType }}</td>
        <td width="20%" align="left" height="30">收款日期：{{ nowTime }}</td>
      </tr>
      <tr>
        <td colspan="3" align="left" height="30">付款方式：{{ data.payTypeCode }}</td>
      </tr>
      <tr>
        <td colspan="3" align="left" height="30">金额（小写）：{{ data.receiveAmount }}</td>
      </tr>
      <tr>
        <td colspan="3" align="left" height="30">金额（大写）：{{ data.receiveAmountUp }}</td>
      </tr>
      <tr>
        <td colspan="3" align="left" height="30">备注：{{ data.remark }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';

export default {
  name: 'templateRegister',
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
      nowTime: moment().format('YYYY-MM-DD')
    };
  },
  computed: {},
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
