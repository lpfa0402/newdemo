<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div style="font-size:24px;text-align:center;height: 24px;margin-bottom: 10px">销售报价单</div>
    <hr style="border:1px solid #000" />
    <table>
      <tr>
        <td align="center" width="10%" height="26">报价单号：</td>
        <td>{{ data.quoteNo }}</td>
        <td width="30%" align="right">车主：</td>
        <td>{{ data.customerName }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr>
        <td width="10%" height="26" align="center">序号</td>
        <td width="10%" align="center">仓库</td>
        <td width="20%" align="center">备件代码</td>
        <td width="20%" align="center">备件名称</td>
        <td width="10%" align="center">单位</td>
        <td width="10%" align="center">销售单价</td>
        <td width="10%" align="center">销售数量</td>
        <td width="10%" align="center">销售金额</td>
      </tr>
      <tr v-for="(x, index) in data.data" :key="x.index">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.storageCode }}</td>
        <td align="center">{{ x.partNo }}</td>
        <td align="center">{{ x.partName }}</td>
        <td align="center">{{ x.unitName }}</td>
        <td align="center">{{ x.outPrice }}</td>
        <td align="center">{{ x.outQuantity }}</td>
        <td align="center">{{ x.outAmount }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="center" colspan="6"></td>
        <td align="center" width="10%">金额：</td>
        <td align="center" width="10%">{{ totalAmount }}</td>
      </tr>
      <tr>
        <td width="10%" align="left">打印时间：</td>
        <td>{{ nowTime }}</td>
        <td width="20%" align="right">操作员：</td>
        <td>{{ data.ysr }}</td>
      </tr>
    </table>

    <hr style="border:1px solid #000" />
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
        total = Number(x.outAmount) + total;
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
