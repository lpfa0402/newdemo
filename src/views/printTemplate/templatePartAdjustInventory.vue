<template>
  <!-- 打印调拨入库单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <div class="repaircaption">{{nowTime}}</div> -->
    <!-- <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;"
    >{{data.title}}</h1> -->
    <!-- <div style="clear:both;">
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:5%;">承修单位(章):</span>
        <span>上海绿地---</span>
      </div>
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:25%;">电话:</span>
        <span>021-56651999</span>
      </div>
    </div> -->
    <table class="bor-through">
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">调拨入库单</td>
        <td width="33%" align="right" height="24" style="font-size:12px;"></td>
        <!-- {{ nowTime }} -->
      </tr>
    </table>

    <table>
      <!-- <tr>
        <td colspan="7" align="left" height="26">&nbsp;</td>
      </tr> -->

      <!-- <tr>
        <td colspan="7" align="right" height="26">&nbsp;</td>
      </tr> -->
      <tr>
        <td style="border-top:1px solid #000" align="right" width="12%" height="26">调拨单号：</td>
        <td style="border-top:1px solid #000" width="18%">{{ data.xsdh }}</td>
        <td style="border-top:1px solid #000" align="right" width="12%">供应商：</td>
        <td style="border-top:1px solid #000" width="18%">{{ data.dydh }}</td>
        <td style="border-top:1px solid #000" align="right" width="12%">开单日期：</td>
        <td style="border-top:1px solid #000" width="18%">{{ data.kdrq }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="6%" height="26" align="center">序号</td>
        <td width="10%" align="center">仓库</td>
        <td width="14%" align="center">零件代码</td>
        <td width="11%" align="center">零件名称</td>
        <td width="7%" align="center">库位</td>
        <td width="6%" align="center">单位</td>
        <td width="7%" align="center">数量</td>
        <td width="10%" align="center">调拨价</td>
        <td width="10%" align="center">含税单价</td>
        <td width="9%" align="center">金额</td>
        <td width="10%" align="center">含税金额</td>
      </tr>
      <tr v-for="(x, index) in data.items" :key="x.id" style="font-size:12px;height:30px">
        <td height="24">{{ index + 1 }}</td>
        <td>{{ x.bjdm }}</td>
        <td>{{ x.bjmc }}</td>
        <td>{{ x.dw }}</td>
        <td align="right">{{ x.sl }}</td>
        <td align="right">{{ x.sl }}</td>
        <td align="right">{{ x.xsdj }}</td>
        <td align="right">{{ x.xz }}</td>
        <td align="right">{{ x.xsdj }}</td>
        <td align="right">{{ x.xz }}</td>
        <td align="right">{{ x.xz }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="center" width="6%" height="26"></td>
        <td align="center" width="10%"></td>
        <td align="center" width="14%"></td>
        <td align="center" width="11%"></td>
        <td align="center" width="7%"></td>
        <td align="center" width="6%"></td>
        <td align="center" width="7%"></td>
        <td align="center" width="10%"></td>
        <td align="center" width="10%">合计金额：</td>
        <td align="center" width="9%">{{ totalPrice }}</td>
        <td align="center" width="10%">{{ totalPrice }}</td>
      </tr>
      <tr>
        <td style="border-bottom:1px solid #000;" align="center" height="26"></td>
        <td style="border-bottom:1px solid #000;" align="left">备注:</td>
        <td style="border-bottom:1px solid #000;" colspan="9" align="left"></td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="12%" align="right">打印时间：</td>
        <td width="18%">{{ nowTime }}</td>
        <td width="12%" height="26" align="right">操作员：</td>
        <td width="18%">{{ data.czr }}</td>
        <td width="12%" align="right">验收人：</td>
        <td width="18%">{{ data.ysr }}</td>
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
    totalPrice() {
      let total = 0;
      this.data.items.forEach(x => {
        total = Number(x.xz) + total;
      });
      return total;
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
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
