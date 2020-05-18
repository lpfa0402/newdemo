<template>
  <!-- 打印调拨入库单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div style="text-align:center;width:100%;">
      <h1>{{ data.title }}</h1>
    </div>
    <table>
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">预先拣料</td>
        <td width="33%" align="right" height="24" style="font-size:12px;"></td>
        <!-- {{ nowTime }} -->
      </tr>
    </table>

    <table>
      <tr>
        <td width="12%" align="right" style="border-top:2px solid #000;" height="26">预检单号：</td>
        <td width="18%" style="border-top:2px solid #000;">{{ data.xsdh }}</td>
        <td width="12%" align="right" style="border-top:2px solid #000;">服务专员：</td>
        <td width="18%" style="border-top:2px solid #000;">{{ data.dydh }}</td>
        <td width="12%" align="right" style="border-top:2px solid #000;">打印日期：</td>
        <td width="18%" style="border-top:2px solid #000;">{{ nowTime }}</td>
      </tr>
      <tr>
        <td align="right" height="26">技师：</td>
        <td>{{ data.xsdh }}</td>
        <td align="right">车主：</td>
        <td>{{ data.dydh }}</td>
        <td align="right">进厂时间：</td>
        <td>{{ nowTime }}</td>
      </tr>
      <tr>
        <td align="right" height="26">VIN：</td>
        <td>{{ data.xsdh }}</td>
        <td align="right">发动机号：</td>
        <td>{{ data.dydh }}</td>
        <td align="right">车型：</td>
        <td>{{ nowTime }}</td>
      </tr>
      <tr>
        <td align="right" height="26">车牌号：</td>
        <td>{{ data.xsdh }}</td>
        <td align="right">进厂里程：</td>
        <td>{{ data.dydh }}</td>
        <td align="right"></td>
        <td></td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="7%" height="26" align="center">序号</td>
        <td width="12%" align="center">备件代码</td>
        <td width="14%" align="center">备件名称</td>
        <td width="8%" align="center">数量</td>
        <td width="7%" align="center">单位</td>
        <td width="10%" align="center">备件车系</td>
        <td width="10%" align="center">仓库</td>
        <td width="10%" align="center">库位</td>
        <td width="10%" align="center">单价</td>
        <td width="10%" align="center">金额</td>
      </tr>
      <tr v-for="(x, index) in data.items" :key="x.id" style="font-size:12px;height:30px">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.bjdm }}</td>
        <td align="center">{{ x.dw }}</td>
        <td align="center">{{ x.sl }}</td>
        <td align="center">{{ x.sl }}</td>
        <td align="center">{{ x.xsdj }}</td>
        <td align="center">{{ x.sl }}</td>
        <td align="center">{{ x.sl }}</td>
        <td align="center">{{ x.sl }}</td>
        <td align="center">{{ x.sl }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="12%" align="right"></td>
        <td width="18%"></td>
        <td width="12%" height="26" align="right"></td>
        <td width="18%"></td>
        <td width="12%" align="right">总计：</td>
        <td width="18%">{{ totalPrice }}</td>
      </tr>
      <tr>
        <td align="right">技师签名：</td>
        <td></td>
        <td height="26" align="right">领料人签字：</td>
        <td></td>
        <td align="right">发料人签字：</td>
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
