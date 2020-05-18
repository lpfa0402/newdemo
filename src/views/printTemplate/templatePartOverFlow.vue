<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">备件报溢单</td>
      </tr>
      <tr>
        <!-- <td colspan="7" align="right" height="26">打印时间：{{ nowTime }}&nbsp;</td> -->
      </tr>
      <tr>
        <td align="right" width="10%" height="26">报溢单号：</td>
        <td>{{ data.profitNo }}</td>
        <td width="10%" align="right">报溢日期：</td>
        <td>{{ nowTime }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr>
        <td width="10%" height="26" align="center">序号</td>
        <td width="10%" align="center">仓库</td>
        <td width="20%" align="center">零件编号</td>
        <td width="20%" align="center">零件名称</td>
        <td width="10%" align="center">库位</td>
        <td width="10%" align="center">单价</td>
        <td width="10%" align="center">数量</td>
        <td width="10%" align="center">金额</td>
      </tr>
      <tr v-for="(x, index) in data.data" :key="x.ITEM_ID">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.STORAGE_CODE }}</td>
        <td align="center">{{ x.PROFIT_PRICE }}</td>
        <td align="center">{{ x.PROFIT_QUANTITY }}</td>
        <td align="center">{{ x.PROFIT_AMOUNT }}</td>
      </tr>
      <tr>
        <td align="center" colspan="6">合计</td>
        <td align="center" width="10%">{{ totalQuantity }}</td>
        <td align="center" width="10%">{{ totalAmount }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="10%" align="right">打印时间：</td>
        <td>{{ nowTime }}</td>
        <td width="10%" align="right">验收人：</td>
        <td>{{ data.ysr }}</td>
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
  computed: {
    totalAmount() {
      let total = 0;
      this.data.data.forEach(x => {
        total = Number(x.PROFIT_AMOUNT) + total;
      });
      return total;
    },
    totalQuantity() {
      let total = 0;
      this.data.data.forEach(x => {
        total = Number(x.PROFIT_QUANTITY) + total;
      });
      return total;
    }
  },
  mounted() {
    console.log(this.data, 'data----');
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
