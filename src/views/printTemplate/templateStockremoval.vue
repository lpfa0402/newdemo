<template>
  <!-- 打印调拨入库单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table>
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">备件移库单</td>
        <td width="33%" align="right" height="24" style="font-size:12px;"></td>
        <!-- {{ nowTime }} -->
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
        <td align="right" width="20%" height="26">移库单号：</td>
        <td width="20%">{{ data.transferNo }}</td>
        <td align="right" width="20%">移库日期：</td>
        <td width="20%">{{ data.transferDate }}</td>
        <td width="20%"></td>
      </tr>
      <tr>
        <td style="border-top:2px solid #000" align="right" width="20%" height="26"></td>
        <td style="border-top:2px solid #000" width="20%"></td>
        <td style="border-top:2px solid #000" align="right" width="20%"></td>
        <td style="border-top:2px solid #000" width="20%"></td>
        <td style="border-top:2px solid #000" width="20%"></td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="6%" height="26" align="center">序号</td>
        <td width="10%" align="center">原仓库</td>
        <td width="14%" align="center">目标仓库</td>
        <td width="10%" align="center">原库位</td>
        <td width="10%" align="center">新库位</td>
        <td width="10%" align="center">原库区</td>
        <td width="10%" align="center">新库区</td>
        <td width="18%" align="center">备件代码</td>
        <td width="20%" align="center">备件名称</td>
        <td width="12%" align="center">移库数量</td>
      </tr>
      <tr v-for="(x, index) in data.items" :key="x.id" style="font-size:12px;height:30px">
        <td align="center" height="24">{{ index + 1 }}</td>
        <td align="center">{{ x.OLD_STORAGE_NAME }}</td>
        <td align="center">{{ x.NEW_STORAGE_NAME }}</td>
        <td align="center">{{ x.OLD_STORAGEPOSITION_CODE }}</td>
        <td align="center">{{ x.NEW_STORAGEPOSITION_CODE }}</td>
        <td align="center">{{ x.OLD_STORAGE_AREA_CODE }}</td>
        <td align="center">{{ x.NEW_STORAGE_AREA_CODE }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.TRANSFER_QUANTITY }}</td>
      </tr>
    </table>

    <!-- <table>
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
    </table>-->

    <table>
      <tr>
        <td width="20%" align="right"></td>
        <td width="20%"></td>
        <td width="20%" height="26" align="right"></td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr>
        <td width="20%" align="right" style="border-top:2px solid #000;">打印时间：</td>
        <td width="20%" style="border-top:2px solid #000;">{{ nowTime }}</td>
        <td width="20%" style="border-top:2px solid #000;" height="26" align="right">合计移库数量：</td>
        <td width="20%" style="border-top:2px solid #000;">{{ totalNumber }}</td>
        <td width="20%" style="border-top:2px solid #000;"></td>
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
    // 统计数量和累计金额
    totalNumber() {
      return this.data.items.reduce((total, curr) => {
        return Number(total + Number(curr.TRANSFER_QUANTITY));
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
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
