<template>
  <!-- 打印调拨入库单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table>
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">出库单</td>
        <td width="33%" align="right" height="24" style="font-size:12px;">{{ nowTime }}</td>
        <!-- {{ nowTime }} -->
      </tr>
    </table>

    <table>
      <tr>
        <td style="border-top:1px solid #000" align="right" width="15%" height="26">出库单号：</td>
        <td style="border-top:1px solid #000" width="15%">{{ data.baseInfo.ro_no }}</td>
        <td style="border-top:1px solid #000" align="right" width="15%">对应入库单号：</td>
        <td style="border-top:1px solid #000" width="15%"></td>
        <td style="border-top:1px solid #000" align="right" width="15%">车型：</td>
        <td style="border-top:1px solid #000" width="15%">{{ data.baseInfo.MODEL }}</td>
        <td style="border-top:1px solid #000" width="10%" align="left">领料出库</td>
      </tr>
    </table>

    <table>
      <tr>
        <td style="border-top:1px solid #000" align="right" width="15%" height="26">客户名称：</td>
        <td style="border-top:1px solid #000" width="15%">{{ data.baseInfo.OWNER_NAME }}</td>
        <td style="border-top:1px solid #000" align="right" width="15%">车牌号：</td>
        <td style="border-top:1px solid #000" width="15%">{{ data.baseInfo.LICENSE }}</td>
        <td style="border-top:1px solid #000" align="right" width="15%"></td>
        <td style="border-top:1px solid #000" width="15%"></td>
        <td style="border-top:1px solid #000" width="10%" align="left">{{ data.baseInfo.type }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="7%" height="26" align="center">序号</td>
        <td width="10%" align="center">仓库</td>
        <td width="14%" align="center">备件号</td>
        <td width="14%" align="center">备件名称</td>
        <td width="7%" align="center">单位</td>
        <td width="10%" align="center">出库单价</td>
        <td width="10%" align="center">出库数量</td>
        <td width="10%" align="center">结存数量</td>
        <!-- <td width="8%" align="center">库区</td> -->
        <td width="10%" align="center">库位</td>
        <td width="8%" align="center">性质</td>
      </tr>
      <tr v-for="(x, index) in data.detailInfo" :key="x.id" style="font-size:12px;height:30px">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.UNIT_NAME }}</td>
        <td align="center">{{ x.PART_COST_PRICE }}</td>
        <td align="center">{{ x.PART_QUANTITY }}</td>
        <td align="center">{{ x.STOCK_QUANTITY ? Number(x.STOCK_QUANTITY).toFixed(2) : '0.00' }}</td>
        <!-- <td align="center">{{ x.xz }}</td> -->
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
        <td align="center">正常</td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="12%" style="border-bottom:1px solid #000" align="right">总金额：</td>
        <td width="18%" style="border-bottom:1px solid #000">{{ data.baseInfo.PART_COST_AMOUNT }}</td>
        <td width="12%" style="border-bottom:1px solid #000" height="26" align="right">发料人：</td>
        <td width="18%" style="border-bottom:1px solid #000">{{data.baseInfo.SENDER}}</td>
        <!-- <td width="10%" style="border-bottom:1px solid #000" align="right">库管员：</td>
        <td width="10%" style="border-bottom:1px solid #000">管理员</td>-->
        <td width="10%" style="border-bottom:1px solid #000" align="right">领料人：</td>
        <td width="10%" style="border-bottom:1px solid #000">{{ data.baseInfo.RECEIVER}}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="12%" align="right">备注：</td>
        <td width="48%">{{ data.baseInfo.REMARK }}</td>
        <td width="12%" align="right">出库时间：</td>
        <td width="18%">{{ data.baseInfo.SEND_TIME }}</td>
        <td width="10%"></td>
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
