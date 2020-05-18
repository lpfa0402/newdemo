<template>
  <!-- 打印采购入库单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <div class="repaircaption">{{nowTime}}</div> -->
    <!-- <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;"
    >{{data.title}}</h1>-->
    <!-- <div style="clear:both;">
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:5%;">承修单位(章):</span>
        <span>上海绿地---</span>
      </div>
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:25%;">电话:</span>
        <span>021-56651999</span>
      </div>
    </div>-->
    <table class="bor-through">
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">入库单</td>
        <td width="33%" align="right" height="24" style="font-size:12px;">{{ nowTime }}</td>
      </tr>
    </table>

    <table>
      <!-- <tr>
        <td colspan="7" align="left" height="26">&nbsp;</td>
      </tr>-->

      <!-- <tr>
        <td colspan="7" align="right" height="26">&nbsp;</td>
      </tr>-->
      <tr>
        <td style="border-bottom:1px solid #000" align="left" width="10%" height="26">入库单号：</td>
        <td
          style="border-bottom:1px solid #000"
          align="left"
          width="20%"
        >{{ data.baseInfo.STOCK_IN_NO ? data.baseInfo.STOCK_IN_NO : data.baseInfo.ALLOCATE_IN_NO }}</td>
        <td style="border-bottom:1px solid #000" align="right" width="10%">对应单号：</td>
        <td
          style="border-bottom:1px solid #000"
          width="20%"
        >{{ data.baseInfo.PURCHASE_CODE ? data.baseInfo.PURCHASE_CODE : '' }}</td>
        <td style="border-bottom:1px solid #000" align="right" width="12%">供应商代码：</td>
        <td style="border-bottom:1px solid #000" width="8%">{{ data.baseInfo.CUSTOMER_CODE }}</td>
        <td
          style="border-bottom:1px solid #000"
          width="20%"
          align="right"
        >{{ data.baseInfo.STOCK_IN_TYPE ? data.baseInfo.STOCK_IN_TYPE : '调拨入库' }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="left" height="26" width="12%">供应商名称：</td>
        <td width="18%" align="left">{{ data.baseInfo.CUSTOMER_NAME }}</td>
        <td align="right" width="10%">库号：</td>
        <td width="20%">{{ data.baseInfo.HWH_ID }}</td>
        <td align="center" width="12%"></td>
        <!-- 仓库 -->
        <td width="8%"></td>
        <td align="right" width="20%">正常</td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="6%" height="26" align="center">序号</td>

        <td width="10%" align="center">仓库</td>

        <td width="12%" align="center">备件代码</td>
        <td width="10%" align="center">备件名称</td>
        <td width="7%" align="center">单位</td>
        <td width="7%" align="center">数量</td>

        <td width="8%" align="center">成本单价</td>
        <td width="8%" align="center">成本小计</td>
        <td width="8%" align="center">入库单价</td>
        <td width="8%" align="center">金额小计</td>
        <td width="7%" align="center">尚欠</td>

        <!-- <td width="5%" align="center">库区</td> -->
        <td width="9%" align="center">库位</td>
      </tr>
      <tr v-for="(x, index) in data.detailInfo" :key="x.id" style="font-size:12px;height:30px">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.UNIT_NAME }}</td>
        <td align="center">{{ Number(x.IN_QUANTITY).toFixed(2) }}</td>

        <td align="center">{{ Number(x.IN_PRICE).toFixed(2) }}</td>
        <td align="center">{{ x.IN_AMOUNT ? Number(x.IN_AMOUNT).toFixed(2) : '0.00' }}</td>
        <td align="center">{{ x.IN_PRICE_TAXED ? Number(x.IN_PRICE_TAXED).toFixed(2) : '0.00' }}</td>
        <td align="center">{{ x.IN_AMOUNT_TAXED ? Number(x.IN_AMOUNT_TAXED).toFixed(2) : '0.00' }}</td>
        <td align="center">0.00</td>
        <!-- <td>{{ x.kq }}</td> -->
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="right" width="10%" height="26">总成本：</td>
        <td
          style="border-right:1px solid #000;"
          width="10%"
        >{{ Number(data.baseInfo.TOTAL_AMOUNT).toFixed(2) }}</td>
        <td align="right" width="10%">领料日期：</td>
        <td width="10%"></td>
        <td align="right" width="7%">验收：</td>
        <td width="7%"></td>
        <td align="right" width="7%">主管：</td>
        <td width="7%"></td>
        <td align="right" width="8%">进货人：</td>
        <td width="7%"></td>
        <td align="right" width="8%">操作人：</td>
        <td
          width="9%"
        >{{ data.baseInfo.USER_NAME ? data.baseInfo.USER_NAME : data.baseInfo.USER_ID }}</td>
      </tr>
      <tr>
        <td style="border-bottom:1px solid #000;" align="right" height="26">总金额：</td>
        <td
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
        >{{ data.baseInfo.BEFORE_TAX_AMOUNT ? Number(data.baseInfo.BEFORE_TAX_AMOUNT).toFixed(2) : data.baseInfo.BEFOE_TAX_AMOUNT }}</td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
        <td style="border-bottom:1px solid #000"></td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="10%" height="26" align="right">备注：</td>
        <td width="60%">{{ data.baseInfo.REMARK }}</td>
        <td width="10%" align="right">入库日期：</td>
        <td>{{ data.baseInfo.FINISHED_DATE }}</td>
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
    //   let total = 0
    //   this.data.items.forEach(x => {
    //      total = Number(x.xz) + total
    //    });
    //    return total
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
