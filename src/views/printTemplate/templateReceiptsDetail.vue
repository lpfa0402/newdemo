<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table>
      <tr>
        <td width="50%" align="right" height="24" style="font-size: 24px;">收据</td>
        <td align="left">NO：{{ data.BALANCE_NO }}</td>
      </tr>
      <tr>
        <td colspan="6" align="center" height="26">{{ nowTime }}&nbsp;</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="right" width="10%" height="26">客户名称：</td>
        <td>{{ data.CUSTOMER_NAME }}</td>
      </tr>
      <tr>
        <td width="10%" align="right" height="26">车牌号：</td>
        <td>{{ data.LICENSE }}</td>
        <td width="10%" align="right">结算单号：</td>
        <td>{{ data.RECEIVE_NO }}</td>
      </tr>
      <tr>
        <td width="10%" align="right" height="26">应收款：</td>
        <td>{{ data.RECEIVABLE_AMOUNT }}</td>
        <td width="10%" align="right">减免：</td>
        <td>{{ data.DERATED_AMOUNT }}</td>
      </tr>
      <tr>
        <td width="10%" align="right" height="26">付款方式：</td>
        <td>{{ data.PAY_TYPE_CODE }}</td>
        <td width="10%" align="right">实收款：</td>
        <td>{{ data.RECEIVED_AMOUNT }}</td>
      </tr>
      <tr>
        <td width="20%" align="right" height="26">本次使用专项资金：</td>
        <td>{{ data.SPARE_AMOUNT }}</td>
        <td width="10%" align="right">使用储蓄：</td>
        <td>{{ data.SPARE_AMOUNT }}</td>
      </tr>
      <tr>
        <td width="20%" align="right" height="26">本次已用预收款：</td>
        <td>{{ data.USE_PRE_PAY }}</td>
        <td width="20%" align="right">剩余预收款：</td>
        <td>{{ data.OLD_PRE_PAY }}</td>
      </tr>
      <tr>
        <td width="10%" align="right" height="26">储蓄余额：</td>
        <td>{{ data.STORE_AMOUNT }}</td>
      </tr>
      <tr>
        <td width="10%" align="right" height="26">收款单位：</td>
        <td>{{}}</td>
        <td width="10%" align="right">交款人：</td>
        <td>{{}}</td>
      </tr>
      <tr>
        <td width="10%" align="right" height="26">盖章：</td>
        <td>{{}}</td>
        <td width="10%" align="right">收款人：</td>
        <td>{{}}</td>
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
  name: 'template1',
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
    console.log(this.data, 'data0000');
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
