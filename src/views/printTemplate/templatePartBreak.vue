<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <h2 style="text-align: center; line-height: 24px; height: 24px;">{{data.dealerName}}</h2> -->
    <h2 style="text-align: center; line-height: 24px; height: 24px;">用友汽车</h2>
    <table>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">配件报损单</td>
      </tr>
      <tr>
        <td align="center" height="26">报损单号：{{ data.lossNo }}</td>
        <td align="center">经手人：{{ data.handler }}</td>
        <td align="center">报损日期：{{ data.lossDate }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr>
        <td align="center" width="5%" height="26">序号</td>
        <td align="center" width="10%">仓库</td>
        <td align="center" width="10%">库位</td>
        <td align="center" width="10%">零件编号</td>
        <td align="center">零件名称</td>
        <td align="center" width="5%">单位</td>
        <td align="center" width="10%">报损数量</td>
        <td align="center" width="10%">报损金额</td>
      </tr>
      <tr></tr>
      <tr v-for="x in data.items" :key="x.index">
        <td align="center" height="24">{{ x.index + 1 }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.UNIT_NAME }}</td>
        <td align="center">{{ x.LOSS_QUANTITY.toFixed(2) }}</td>
        <td align="center">{{ x.LOSS_AMOUNT.toFixed(2) }}</td>
      </tr>
    </table>

    <table class="bor-through">
      <tr>
        <td align="center" height="26">打印时间：{{ nowTime }}</td>
        <td align="center">合计报损数量：{{ totalNum.toFixed(2) }}</td>
        <td align="center">合计报损金额：{{ totalPrice.toFixed(2) }}</td>
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
  name: 'templatePartBreak',
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
    totalNum() {
      return this.data.items.reduce((prev, curr) => {
        return curr.LOSS_QUANTITY + prev;
      }, 0);
    },
    totalPrice() {
      return this.data.items.reduce((prev, curr) => {
        return curr.LOSS_AMOUNT + prev;
      }, 0);
    }
  },
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
