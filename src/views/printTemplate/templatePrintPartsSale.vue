<template>
  <!-- 打印结算单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div>
      <!-- <img src="@/assets/img/Lodop_logo.png" alt="" style="display: block; width: 400px; height: 100px;float: right;"> -->
      <div class="repair_contentbox" style="width:100%;float:left;margin-top:0px;text-align:center;margin-top:20px">
        <p style="line-height:28px;margin:0;font-size:28px">{{this.data.companyNameCn}}</p>
        <p style="line-height:28px;margin:0;margin-top:5px;font-size:20px">备件销售结算单</p>
      </div>
    </div>
  <p style="text-align:; line-height:28px;margin:0;margin-top:10px;font-size:10px">&emsp;&emsp;</p>
 <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;width:40%;">销售单号：{{data.SALES_PART_NO}}</td>
            <td style="text-align:left;width:25%;">&emsp;</td>
            <td style="text-align:left;width:35%;">&emsp;</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">客户名称：{{data.CUSTOMER_NAME}}</td>
            <td style="text-align:left;width:25%;">&emsp;</td>
            <td style="text-align:left;width:35%;">结算日期：{{data.BALANCE_TIME}}</td>
          </tr>
        </tbody>
      </table>
    </div>

     <div >
      <table cellspacing="0" border="1" cellpadding="5" style="margin-top:0px;font-size:12px; border:1;width:90%;margin-left:5%">
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:15%;font-size:12px;">备件代码</td>
          <td align="center" style="width:35%;font-size:12px;">备件名称</td>
          <td align="center" style="width:16%;font-size:12px;">数量</td>
          <td align="center" style="width:16%;font-size:12px;">销售单价</td>
          <td align="center" style="width:17%;font-size:12px;">金额小计</td>
        </tr>
         <tr v-for="(item, index) in this.data.partInfo" :key="index" style="font-size:12px;height:20px;line-height:15px;">
            <div>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_NO}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_NAME}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_QUANTITY}}</td>
               <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_SALES_AMOUNT}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.REAL_RECEIVE_AMOUNT}}</td>
            </div>
          </tr>

      </table>
    </div>


  <div >
       <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;">
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="7" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">合计金额</p>
            </th>
          </tr>
        </thead>
          <tbody>
          <tr  style="font-size:12px;height:20px;line-height:15px;">
            <div>
             <td align="center" style="width:25%;font-size:12px;">应收总金额:{{data.SALES_PART_AMOUNT}}</td>
             <td align="center" style="width:25%;font-size:12px;">折扣总金额:{{data.TOTAL_DISCOUNT_AMOUNT}}</td>
             <td align="center" style="width:25%;font-size:12px;">抹零金额:{{data.SUB_OBB_AMOUNT}}</td>
             <td align="center" style="width:25%;font-size:12px;">实收总金额:{{data.SUM_AMOUNT}}</td>

              <!-- <td style="text-align:center;line-height:26px;">{{ item.REMARK }}</td> -->
            </div>
             </tr>
        </tbody>
      </table>

    </div>




    <div >
      <table cellspacing="0" border="1" cellpadding="6" style="margin-top:20px;font-size:12px; border:1;width:90%;margin-left:5%">
         <tr style="font-size:13px;width:100%;border-bottom:1px solid #000;">
          <td align="center" style="width:20%;font-size:13px;font-weight:700;" colspan="6">收款金额</td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:12%;font-size:12px;">合计金额</td>
          <td align="center" style="width:21%;font-size:12px;">{{data.SUM_AMOUNT}}</td>
          <td align="center" style="width:12%;font-size:12px;">已收金额</td>
          <td align="center" style="width:21%;font-size:12px;">{{data.arrearsAmounts}}</td>
          <td align="center" style="width:12%;font-size:12px;">欠收金额</td>
          <td align="center" style="width:21%;font-size:12px;">{{data.acceptedAmounts}}</td>
        </tr>
          <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:12%;font-size:12px;">大&emsp;&emsp;&emsp;&emsp;写</td>
          <td align="center" style="font-size:12px;" colspan="5">{{data.Capitalization}}</td>
        </tr>
      </table>
    </div>





 <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>

          <tr style="height:15px;">
            <td style="text-align:left;width:40%;">地址：{{data.addressZh}}</td>
            <td style="text-align:left;width:25%;"></td>
            <td style="text-align:left;width:35%;">开户行：{{data.bank}}</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">邮编：{{data.zipCode}}</td>
            <td style="text-align:left;width:25%;"></td>
            <td style="text-align:left;width35%;">账&emsp;&emsp;号：{{data.bankAccount}}</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">电话：{{data.phone}}</td>
            <td style="text-align:left;width:25%;"></td>
            <td style="text-align:left;width:35%;">税&emsp;&emsp;号：{{data.dutyNumber}}</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">结算人：{{data.BALANCE_HANDLER}}</td>
          <td style="text-align:left;width:25%;"></td>
            <td style="text-align:left;width:35%;">户&emsp;&emsp;名：</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;" colspan="3">说明：</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:40%;" colspan="3">&emsp;</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:40%;" colspan="3">打印日期：{{nowTime}}</td>
          </tr>
        </tbody>
      </table>
    </div>

      <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <td style="text-align:left;font-size:13px; width:10%;font-weight:700;vertical-align:bottom;" colspan="1">客户签字：</td>
            <td style="text-align:left;font-size:13px;border-bottom:1px solid #000; width:10%" colspan="1"></td>
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
