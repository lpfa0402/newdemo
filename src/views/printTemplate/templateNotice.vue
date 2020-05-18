<template>
  <div v-show="isPreview" ref="print">
    <table class="bor-through">
      <tr>
        <td align="center" style="font-size: 24px;">备件收货通知单</td>
      </tr>
      <tr>
        <td align="right" style="font-size:12px;">提货日期:{{ data.DELIVER }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td>提货单号：</td>
        <td align="left" width="20%">{{ data.BILL_NO }}</td>
        <td>单位代码：</td>
        <td align="left" colspan="3">{{ data.COMPANY_CODE }}&nbsp;{{ data.COMPANY_NAME }}</td>
      </tr>
      <tr>
        <td>提货方式：</td>
        <td align="left" width="20%"></td>
        <td>提货仓库：</td>
        <td align="left" width="20%">{{ data.STORAGE_CODE }}</td>
        <td>联系人：</td>
        <td align="left" width="20%">{{ data.CONTACT }}</td>
      </tr>
      <tr>
        <td>移动电话：</td>
        <td>{{ data.MOBILE_PHONE }}</td>
        <td>电话：</td>
        <td>{{ data.PHONE }}</td>
        <td>承运商：</td>
        <td>{{ data.CARRIER_NAME }}</td>
      </tr>
      <tr>
        <td>承运日期：</td>
        <td></td>
        <td>备注：</td>
        <td>{{ data.REMARK }}</td>
        <td>税额：</td>
        <td>{{ data.TAX }}</td>
      </tr>
      <tr>
        <td>移动方式：</td>
        <td></td>
        <td>交货地址：</td>
        <td colspan="3">{{ data.ADDRESS }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td align="center">序号</td>
        <td align="center">备件代码</td>
        <td align="center">备件名称</td>
        <td align="center">单位</td>
        <td align="center">库位代码</td>
        <td align="center">数量</td>
        <td align="center">签收数量</td>
        <td align="center">单价</td>
        <td align="center">金额</td>
        <td align="center">适用车型</td>
      </tr>
      <tr v-for="(x, index) in data.rows" :key="x.id" style="font-size:12px;height:30px">
        <td align="center">{{ index + 1 }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.UNIT_NAME }}</td>
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
        <td align="center">{{ x.QTY }}</td>
        <td align="center"></td>
        <td align="center">{{ x.COST_WHOLESALES_PRICE }}</td>
        <td align="center">{{ x.AMOUNT }}</td>
        <td align="center">{{ x.SERIES }}</td>
      </tr>
      <tr>
        <td colspan="2">合计金额</td>
        <td colspan="5">{{ data.TOTAL_AMOUNT_CN }}</td>
        <td colspan="3">{{ data.TOTAL_AMOUNT }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td width="15%">销售制单：</td>
        <td width="25%" align="left">{{ data.OPERATOR }}</td>
        <td width="10%">财务审核：</td>
        <td width="30%"></td>
      </tr>
      <tr>
        <td>出库复核：</td>
        <td></td>
        <td>客户签收：</td>
        <td></td>
      </tr>
      <tr>
        <td>销售发单(盖章)：</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  name: 'templateNotice',
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
