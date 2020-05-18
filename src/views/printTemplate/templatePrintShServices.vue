<template>
  <!-- 打印结算单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div>
      <div class="repair_contentbox" style="width:100%;float:left;margin-top:0px;text-align:center;margin-top:50px">
        <p style="line-height:28px;margin:0;font-size:28px">{{data.companyNameCn}}体验中心</p>
        <p style="line-height:28px;margin:0;margin-top:5px;font-size:20px">服务产品销售凭证</p>
      </div>
    </div>
  <p style="text-align:; line-height:28px;margin:0;margin-top:10px;font-size:10px">&emsp;&emsp;</p>



   <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;width:40%;">销售单号：{{data.initData.ORDER_NO}}</td>
            <td style="text-align:left;width:25%;">&emsp;</td>
            <td style="text-align:left;width:35%;">&emsp;</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">销售日期：{{data.initData.SALE_DATE}}</td>
            <td style="text-align:left;width:25%;">&emsp;</td>
            <td style="text-align:left;width:35%;">&emsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

     <div >
      <table cellspacing="0" border="1" cellpadding="3" style="margin-top:0px;font-size:12px; border:1;width:90%;margin-left:5%">
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:33.33%;font-size:12px;">客户名称：{{data.initData.CUSTOMER_NAME}}</td>
          <td align="center" style="width:33.33%;font-size:12px;">客户电话：{{data.initData.CUSTOMER_PHONE}}</td>
          <td align="center" style="width:33.33%;font-size:12px;">车牌号:{{data.initData.LICENSE_NO}}</td>

        </tr>
          <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:33.33%;font-size:12px;">联系人姓名：{{data.initData.CONTACT}}</td>
          <td align="center" style="width:33.33%;font-size:12px;">联系人电话：{{data.initData.CONTACT_PHONE}}</td>
          <td align="center" style="width:33.33%;font-size:12px;">底盘号:{{data.initData.VIN}}</td>

        </tr>
          <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:33.33%;font-size:12px;">销售金额（合计）:&emsp;{{data.TOTAL_AMOUNT}}</td>
          <td align="center" style="width:33.33%;font-size:12px;">优惠金额:{{data.DISCOUNT_AMOUNT}}</td>
          <td align="center" style="width:33.33%;font-size:12px;">实收金额:&emsp;{{data.initData.TOTAL_AMOUNT}}</td>

        </tr>
      </table>
    </div>



     <div >
      <table cellspacing="0" border="1" cellpadding="7" style="margin-top:10px;font-size:12px; border:1;width:90%;margin-left:5%">
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:14.2%;font-size:12px;">产品代码</td>
          <td align="center" style="width:14.2%;font-size:12px;">产品名称</td>
          <td align="center" style="width:14.2%;font-size:12px;">销售金额</td>
          <td align="center" style="width:14.2%;font-size:12px;">抵用金额/次数</td>
          <td align="center" style="width:14.2%;font-size:12px;">有效期（起）</td>
          <td align="center" style="width:14.2%;font-size:12px;">有效期（止）</td>
          <td align="center" style="width:14.2%;font-size:12px;">自费部分</td>
        </tr>
         <tr v-for="(item, index) in this.data.dtlData" :key="index" style="font-size:12px;height:20px;line-height:15px;">
            <div>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PRODUCT_CODE}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PRODUCT_NAME}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.TOTAL_AMOUNT}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.DEDUCTION_AMOUNT?item.DEDUCTION_AMOUNT+'元': item.DEDUCTION_COUNT+'次'}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.VALIDITY_PERIOD_END}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.MAINTENCE_FLAG}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.TOTAL_AMOUNT}}</td>

            </div>
          </tr>

      </table>
    </div>



   <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;width:40%;">产品说明</td>
          </tr>
           <tr v-for="(item, index) in this.data.dtlData" :key="index"  style="height:15px;">
            <td style="text-align:left;width:40%;">{{index}}、{{item.PRODUCT_DESC}}</td>
          </tr>
        </tbody>
      </table>
    </div>


 <div>
      <table cellspacing="0" style="margin-top:15px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;width:40%;">我已阅读并理解服务条款，并认可划痕宝产品的相关内容，不存在模糊之处</td>
          </tr>
        </tbody>
      </table>
    </div>

      <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>

          <tr style="height:15px;">

            <td style="text-align:left;font-size:13px; width:80%;font-weight:700;vertical-align:bottom;" colspan="1">打印日期：{{nowTime}}</td>
             <td style="text-align:left;font-size:13px; width:20%" colspan="1"></td>
          </tr>
          <tr style="height:15px;">

            <td style="text-align:left;font-size:13px; width:80%;font-weight:700;vertical-align:bottom;" colspan="1">体验中心地址：{{data.addressZh}}</td>
           <td style="text-align:left;font-size:13px; width:20%" colspan="1"></td>
          </tr>
          <tr style="height:15px;">

            <td style="text-align:left;font-size:13px; width:80%;font-weight:700;vertical-align:bottom;" colspan="1">体验中心电话：{{data.phone}}</td>
            <td style="text-align:left;font-size:13px; width:20%" colspan="1"></td>
          </tr>
        </tbody>
      </table>
    </div>

 <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <!-- <td style="text-align:left;font-size:13px; width:13%;" colspan="1">
              <div style="width:5%;height:120px;margin:0;float:left;">
                <img src="@/assets/img/wechat.jpg" width="85px" style="margin-top:15px;margin-left:10px" />
              </div>
            </td> -->
            <td style="text-align:right;font-size:13px; width:10%;font-weight:700;vertical-align:bottom;" colspan="1">客户签字：</td>
            <td style="text-align:left;font-size:13px;border-bottom:1px solid #000; width:10%" colspan="1"></td>
          </tr>
          <!-- <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <td style="text-align:left;font-size:13px; width:10%;" colspan="3">欢迎使用“奥迪小程序”</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <td style="text-align:left;font-size:13px; width:10%;" colspan="3">以告知客户维修所使用备件/附件的渠道来源</td>
          </tr> -->
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
  name: 'templatePrintBalance',
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
