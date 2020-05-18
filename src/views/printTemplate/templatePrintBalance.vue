<template>
  <!-- 打印结算单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div>
      <!-- <img src="@/assets/img/Lodop_logo.png" alt="" style="display: block; width: 400px; height: 100px;float: right;"> -->
      <div class="repair_contentbox" style="width:100%;float:left;margin-top:20px;text-align:center;">
        <p style="line-height:28px;margin:0;font-size:28px">{{this.data.companyNameCn}}</p>
        <p style="line-height:28px;margin:0;margin-top:5px;font-size:20px">结算单</p>
      </div>
    </div>

      <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <!-- <tr style="height:15px;">

            <td style="text-align:left;font-size:13px; width:100%;vertical-align:bottom;" colspan="1">结算单号：{{data.BALANCE_NO}}</td>
          </tr> -->
          <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:75%" colspan="1">结算单号：{{data.BALANCE_NO}}</td>
            <td style="text-align:left;font-size:13px; width:25%;vertical-align:bottom;" colspan="1">结算日期：{{data.BALANCE_TIME}}</td>
          </tr>
        </tbody>
      </table>
    </div>

  <!-- <p style="text-align:; line-height:28px;margin:0;margin-top:2px;font-size:10px">&emsp;&emsp;</p> -->


     <div >
      <table cellspacing="0" border="1" cellpadding="6" style="margin-top:0px;font-size:12px; border:1;width:90%;margin-left:5%">
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:10%;font-size:12px;">客&emsp;&emsp;户</td>
          <td align="center" style="width:40%;font-size:12px;">{{this.data.OWNER_NAME}}</td>
          <td align="center" style="width:10%;font-size:12px;">委托书</td>
          <td align="center" style="width:15%;font-size:12px;">{{this.data.RO_NO}}</td>
          <td align="center" style="width:10%;font-size:12px;">车牌号</td>
          <td align="center" style="width:15%;font-size:12px;">{{this.data.LICENSE}}</td>
        </tr>

        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:10%;font-size:12px;">联系人</td>
          <td align="center" style="width:40%;font-size:12px;">{{data.DELIVERER}}</td>
          <td align="center" style="width:10%;font-size:12px;">电&emsp;&emsp;话</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.DELIVERER_PHONE}}</td>
          <td align="center" style="width:10%;font-size:12px;">移动电话</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.DELIVERER_MOBILE}}</td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:10%;font-size:12px;">地&emsp;&emsp;址</td>
          <td align="center" style="width:40%;font-size:12px;"  >{{data.ADDRESS}}</td>
          <td align="center" style="width:10%;font-size:12px;">使用单位</td>
          <td align="center" style="width:15%;font-size:12px;"  colspan="3">{{data. USE_UNIT_NAME}}</td>
        </tr>


        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:10%;font-size:12px;">底盘号</td>
          <td align="center" style="width:40%;font-size:12px;">{{ data.VIN }}</td>
          <td align="center" style="width:10%;font-size:12px;">进厂日期</td>
          <td align="center" style="width:15%;font-size:12px;">{{ data.RO_CREATE_DATE}}</td>
          <td align="center" style="width:10%;font-size:12px;">发票号</td>
          <td align="center" style="width:15%;font-size:12px;"></td>
        </tr>

      <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:10%;font-size:12px;">车&emsp;&emsp;型</td>
          <td align="center" style="width:40%;font-size:12px;"> {{ data.MODEL }}</td>
          <td align="center" style="width:10%;font-size:12px;">行驶里程</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.IN_MILEAGE}}公里</td>
          <td align="center" style="width:10%;font-size:12px;">发动机号</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.ENGINE_NO}}</td>
        </tr>


        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:10%;font-size:12px;">预计下次保养</td>
          <td align="center" style="width:40%;font-size:12px;">日期：{{data.NEXT_MAINTAIN_DATE}}~{{data.NEXT_MAINTAIN_DATE_END}} &emsp;&emsp; 里程：{{data.NEXT_MAINTAIN_MILEAGE}}~{{data.NEXT_MAINTAIN_MILEAGE_END}} </td>
          <td align="center" style="width:13%;font-size:12px;">希望联系方式</td>
          <td align="center" style="width:12%;font-size:12px;">{{data.BEST_CONCAT_TYPE}}</td>
          <td align="center" style="width:13%; font-size:12px;">方便联系时间</td>
          <td align="center" style="width:12%;font-size:12px;">{{data.CONCAT_TIME}}</td>
        </tr>


      </table>
    </div>
     <div >
       <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="8" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">维修项目</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目代码</p>
            </th>
            <th style="font-size:12px;width:26%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目名称</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">维修类型</p>
            </th>
            <th style="font-size:12px;width:6%;border-bottom:1px solid #000;">
              <p style="margin:0;">工时</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">工时单价</p>
            </th>
            <!-- 应收 -->
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">应收工时费</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">实收工时费</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.data.labour" :key="index" style="font-size:12px;height:20px;line-height:15px;">
            <div>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.LABOUR_CODE}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.LABOUR_NAME}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.REPAIR_TYPE_CODE}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.STD_LABOUR_HOUR}}</td>
               <td style="text-align:center;line-height:15px;font-size:12px">{{item.LABOUR_PRICE}}</td>
                 <!-- 应收 -->
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.LABOUR_AMOUNT}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.CALC_REAL_RECEIVE_AMOUNT}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.CHARGE_PARTITION_NAME}}</td>


            </div>
          </tr>
            <tr style="font-size:12px;height:30px;line-height:26px; border:1px solid #000;">
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="2">应收工时费：{{data.RECEIVEABLE_LABOUR_FEE}}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="2">核销金额：{{data.labourWriteOffAmount}}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="2">折扣：{{data.labourDiscountAmount}}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="2">实收：{{data.REAL_LABOUR_FEE}}</td>
          </tr>
        </tbody>
      </table>
    </div>

         <div >
       <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="6" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">维修备件</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">备件代码</p>
            </th>
            <th style="font-size:12px;width:26%;border-bottom:1px solid #000;">
              <p style="margin:0;">备件名称</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">数量</p>
            </th>

             <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">应收备件金额</p>
            </th>

            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">实收备件金额</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.data.part" :key="index" style="font-size:12px;height:20px;line-height:15px;">
            <div>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_NO}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_NAME}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_QUANTITY}}</td>
                <!-- 应收备件 -->
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.PART_SALES_AMOUNT}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.CALC_REAL_RECEIVE_AMOUNT}}</td>
              <td style="text-align:center;line-height:15px;font-size:12px">{{item.CHARGE_PARTITION_NAME}}</td>

              <!-- <td style="text-align:center;line-height:26px;">{{ item.REMARK }}</td> -->
            </div>
          </tr>
          <tr style="font-size:12px;height:30px;line-height:26px; border:1px solid #000;">
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="2">应收备件：{{data.SALE_PAR_SUM}}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="1">核销金额：{{data.partWriteOffAmount}}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="1">折扣：{{data.partDiscountAmount}}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;font-size:12px" colspan="2">实收：{{data.PAR_REAL_SUM}}</td>
          </tr>
        </tbody>
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
             <td align="center" style="width:20%;font-size:12px;">应收总金额:{{data.RECEIVEABLE_FEE}}</td>
             <td align="center" style="width:20%;font-size:12px;">折扣总金额:{{data.TOTAL_DISCOUNT_AMOUNT}}</td>
             <td align="center" style="width:20%;font-size:12px;">核销总金额:{{data.WRITE_OFF_AMOUTS}}</td>
             <td align="center" style="width:20%;font-size:12px;">抹零金额:{{data.SUB_OBB_AMOUNT}}</td>
             <td align="center" style="width:20%;font-size:12px;">实收总金额:{{data.SUM_AMOUNT}}</td>

              <!-- <td style="text-align:center;line-height:26px;">{{ item.REMARK }}</td> -->
            </div>
          </tr>
        </tbody>
      </table>

    </div>






    <div >
      <table cellspacing="0" border="1" cellpadding="6" style="margin-top:20px;font-size:12px; border:1;width:90%;margin-left:5%">
        <!-- <tr style="font-size:13px;width:100%;">
          <td align="center" style="width:20%;font-size:13px;font-weight:700;" colspan="5">合计金额</td>
        </tr>

        <tr style="height:1px; font-size:5px">
          <td align="center" style="width:20%;font-size:12px;">应收总金额:5000.00</td>
          <td align="center" style="width:20%;font-size:12px;">折扣总金额:5000.00</td>
          <td align="center" style="width:20%;font-size:12px;">核销总金额:5000.00</td>
          <td align="center" style="width:20%;font-size:12px;">抹零金额:5000.00</td>
          <td align="center" style="width:20%;font-size:12px;">实收总金额:5000.00</td>
        </tr> -->
         <tr style="font-size:13px;width:100%;border-bottom:1px solid #000;">
          <td align="center" style="width:20%;font-size:13px;font-weight:700;" colspan="6">收款金额</td>
        </tr>

        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:12%;font-size:12px;">收款金额</td>
          <td align="center" style="width:21%;font-size:12px;">{{data.ALL_SUM_AMOUNT}}</td>
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
            <td style="text-align:left;width:25%;">服务总监：{{data.employeeName}}</td>
            <td style="text-align:left;width35%;">账&emsp;&emsp;号：{{data.bankAccount}}</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">电话：{{data.phone}}</td>
            <td style="text-align:left;width:25%;">服务顾问：{{data.SERVICE_ADVISOR}}</td>
            <td style="text-align:left;width:35%;">税&emsp;&emsp;号：{{data.dutyNumber}}</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;">结算人：{{data.BALANCE_HANDLER}}</td>
            <td style="text-align:left;width:25%;">担保方：{{data.GUARANTOR}}</td>
            <td style="text-align:left;width:35%;">户&emsp;&emsp;名：</td>
          </tr>
           <tr style="height:15px;">
            <td style="text-align:left;width:40%;font-weight:700" colspan="3">说明：</td>
          </tr>
          <tr style="height:15px;" v-for="(item, index) in this.data.default" :key="index">
            <!-- <td style="text-align:right;margin-top:0px;width:14%;vertical-align:top;font-weight:700;">说&emsp;&emsp;&emsp;&emsp;明：</td> -->
            <td style="width:45% ;font-weight:700" colspan="7">
              &emsp;&emsp; &emsp;&emsp;{{index+1}}.{{item.DEFAULT_VALUE}}
            </td>
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
