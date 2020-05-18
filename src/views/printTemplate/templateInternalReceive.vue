<template>
  <!-- 打印调拨入库单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div style="text-align:center;width:100%;">
      <h1>{{ data.DEALER_NAME }}</h1>
    </div>
    <table>
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">内部领用单</td>
        <td width="33%" align="right" height="24" style="font-size:12px;"></td>
        <!-- {{ nowTime }} -->
      </tr>
    </table>

    <table>
      <tr>
        <td align="right" width="15%" height="26">内部调用号：</td>
        <td width="15%">{{ data.baseInfo.RECEIPT_NO ? data.baseInfo.RECEIPT_NO : '' }}</td>
        <td align="right" width="15%"></td>
        <td width="10%"></td>
        <td align="right" width="15%">申请日期：</td>
        <td width="20%">{{ data.baseInfo.RECEIPT_DATE }}</td>
        <!-- <td width="10%" align="right">未确认</td> -->
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="8%" height="26" align="center">序号</td>

        <td width="14%" align="center">仓库</td>

        <td width="18%" align="center">领用件代码</td>
        <!-- <td width="8%" align="center">批号</td> -->
        <td width="20%" align="center">领用件名称</td>
        <td width="12%" align="center">出库单价</td>
        <td width="14%" align="center">数量</td>
        <td width="14%" align="center">成本单价</td>
      </tr>
      <tr v-for="(x, index) in data.detailInfo" :key="x.id" style="font-size:12px;height:30px">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <!-- <td align="center"></td> -->
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.OUT_PRICE }}</td>
        <td align="center">{{ x.OUT_QUANTITY }}</td>
        <td align="center">{{ x.COST_PRICE }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="10%" align="right">申请部门：</td>
        <td width="10%"></td>
        <td width="10%" height="26" align="right">成本金额：</td>
        <td width="10%">{{ data.baseInfo.COST_AMOUNT }}</td>
        <td width="10%" align="right">出库金额：</td>
        <td width="20%">{{ data.baseInfo.OUT_AMOUNT }}</td>
        <td width="12%" align="right">打印日期：</td>
        <td width="18%">{{ nowTime }}</td>
      </tr>
      <tr>
        <td align="right">申请人：</td>
        <td>{{ data.baseInfo.USER_NAME ? data.baseInfo.USER_NAME : data.baseInfo.USER_ID }}</td>
        <td height="26" align="right">备注：</td>
        <td>{{ data.baseInfo.REMARK }}</td>
        <td align="right"></td>
        <td></td>
        <td align="right"></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'templateSales',
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
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };
  },
  computed: {
    // totalPrice() {
    //   let total = 0;
    //   this.data.items.forEach(x => {
    //     total = Number(x.xz) + total;
    //   });
    //   return total;
    // }
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
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
