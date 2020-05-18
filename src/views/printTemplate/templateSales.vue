<template>
  <!-- 打印销售单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <img src="@/assets/img/Lodop_logo.png" alt="" style="display: block; width: 400px; height: 100px;float: right;"> -->
    <h1
      style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;"
    >{{ data.baseInfo.DEALER_NAME }}</h1>
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
      <!-- <tr>
        <td width="100%" align="center" height="24" style="font-size: 24px;">备件销售单</td>
      </tr>-->
      <tr>
        <td width="33%" align="center" height="24" style="font-size: 24px;"></td>
        <td width="33%" align="center" height="24" style="font-size: 24px;">备件销售单</td>
        <td width="33%" align="right" height="24" style="font-size:12px;">{{ nowTime }}</td>
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
        <td align="right" width="10%" height="26">销售单号：</td>
        <td>{{ data.baseInfo.SO_NO }}</td>
        <td align="right" width="10%">对应单号：</td>
        <td>{{ data.baseInfo.SALES_PART_NO }}</td>
        <td align="right" width="10%">开单日期：</td>
        <td>{{ data.baseInfo.create_date }}</td>
      </tr>
      <tr>
        <td align="right" height="26">客户名称：</td>
        <td>{{ data.baseInfo.CUSTOMER_NAME }}</td>
        <td align="right">有效期：</td>
        <td>{{ data.baseInfo.useful_date ? data.baseInfo.useful_date : '' }}</td>
        <td align="right">合计金额：</td>
        <td>{{ data.baseInfo.SALES_PART_AMOUNT }}</td>
      </tr>
    </table>

    <table class="bor">
      <tr style="font-size:12px;height:30px">
        <td width="7%" height="26" align="center">序号</td>
        <td width="18%" align="center">备件代码</td>
        <td width="18%" align="center">备件名称</td>
        <td width="10%" align="center">仓库</td>
        <!-- <td width="7%" align="center">库区</td> -->
        <td width="10%" align="center">库位</td>
        <td width="8%" align="center">单位</td>
        <td width="10%" align="center">销售单价</td>
        <td width="10%" align="center">销售数量</td>
        <td width="10%" align="center">金额小计</td>
      </tr>
      <tr v-for="(x, index) in data.detailInfo" :key="x.id" style="font-size:12px;height:30px">
        <td height="24" align="center">{{ index + 1 }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <!-- <td>{{ x.kq }}</td> -->
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
        <td align="center">{{ x.UNIT_NAME }}</td>
        <td align="center">{{ x.PART_SALES_PRICE }}</td>
        <td align="center">{{ x.PART_QUANTITY }}</td>
        <td align="center">{{ x.PART_SALES_AMOUNT }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="right" width="10%" height="26">地址：</td>
        <td width="50%">{{ data.baseInfo.ADDRESS }}</td>
        <td align="right" width="10%">开户：</td>
        <td>{{ data.baseInfo.BANK }}</td>
      </tr>
      <tr>
        <td align="right" height="26">邮编：</td>
        <td>{{ data.baseInfo.ZIP_CODE }}</td>
        <td align="right">账号：</td>
        <td>{{ data.baseInfo.BANK_ACCOUNT }}</td>
      </tr>
      <tr>
        <td align="right" height="26">电话：</td>
        <td>{{ data.baseInfo.CONTACTOR_PHONE }}</td>
        <td align="right">户名：</td>
        <td>{{ data.baseInfo.BANK_NAME }}</td>
      </tr>
      <tr>
        <td align="right" height="26">销售员：</td>
        <td>{{ data.baseInfo.USER_NAME ? data.baseInfo.USER_NAME : data.baseInfo.USER_ID }}</td>
        <td align="right">税号：</td>
        <td>{{ data.baseInfo.TAX_NO }}</td>
      </tr>
      <tr>
        <td align="right" height="26">说明：</td>
        <td>{{ data.baseInfo.REMARK }}</td>
        <td align="right">用户签名：</td>
        <td>_________________</td>
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
    //  totalPrice() {
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
