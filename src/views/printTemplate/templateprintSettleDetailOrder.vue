<template>
  <!-- 打印索赔单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div>
      <div class="repair_contentbox" style="width:100%;float:left;margin-top:0px;text-align:center;margin-top:50px">
        <p style="line-height:28px;margin:0;font-size:28px">结算单明细</p>
      </div>
    </div>
  <p style="text-align:; line-height:10px;margin:0;margin-top:10px;font-size:10px">&emsp;&emsp;</p>
   <div>
      <table cellspacing="0" border="1" style="margin-top:5px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:center;width:10%;">结算单号</td>
            <td style="text-align:center;width:10%;">单据编号</td>
            <td style="text-align:center;width:10%;">单据种类代码</td>
            <td style="text-align:center;width:10%;">单据种类名称</td>
            <td style="text-align:center;width:10%;">业务类型代码</td>
            <td style="text-align:center;width:10%;">业务类型名称</td>
            <td style="text-align:center;width:10%;">结算金额</td>
            <td style="text-align:center;width:10%;">VIN</td>
            <td style="text-align:center;width:10%;">结算日期</td>
            <td style="text-align:center;width:10%;">备注</td>
          </tr>
          <tr v-for="(x) in this.data" :key="x.$index" style="height:15px;">
            <td style="text-align:center;width:10%;">{{x.settlementNo}}</td>
            <td style="text-align:center;width:10%;">{{x.orderNo}}</td>
            <td style="text-align:center;width:10%;">{{x.orderTypeCode}}</td>
            <td style="text-align:center;width:10%;">{{x.orderTypeName}}</td>
            <td style="text-align:center;width:10%;">{{x.businessTypeCode}}</td>
            <td style="text-align:center;width:10%;">{{x.businessTypeName}}</td>
            <td style="text-align:center;width:10%;">{{x.settleAmount}}</td>
            <td style="text-align:center;width:10%;">{{x.vin}}</td>
            <td style="text-align:center;width:10%;">{{x.settleDate}}</td>
            <td style="text-align:center;width:10%;">{{x.remark}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
<script>
import moment from 'moment';
// import QRcode from 'qrcode';

export default {
  name: 'templateprintSettleDetail',
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
      repairLabour: [{ index: 1 }, { index: 1 }],
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };
  },
  computed: {
    totalPrice() {
      return '';
      // return this.data.items.reduce((prev, curr) => {
      //   return curr.ckdj * curr.ckdj + prev;
      // }, 0);
    }
  },
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
    console.log(JSON.stringify(this.data), 'data数据-----');
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
