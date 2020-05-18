<template>
  <!-- 索赔件清单 -->
  <div  ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
    <h2 style="clear:both;line-height:40px;font-weight:bold;margin:0;text-align:center;">吉林省国兴汽车贸易有限公司</h2>
    <h2 style="clear:both;line-height:40px;font-weight:bold;margin:0;text-align:center;">首保任务委托书</h2>
     <div style="clear:both;">

       <div style="float:left;width:50%;margin:0;font-size:16px;">
         <span style="position:relative;left:-10%">客 户:</span>
         <span style="position:relative;left:80%;font-weight:700;">委托书号:</span>
      </div>
      <div style="width:50%;margin:0;font-size:16px;">
         <span style="position:relative;left:-19%">地 址:</span>
      </div>
       <div style="width:50%;margin:0;font-size:16px;">
         <span style="position:relative;left:-8%">联系人:</span>
        <span style="position:relative;left:78%;font-weight:700;">进厂时间:</span>
      </div>
       <div style="width:50%;margin:0;font-size:16px;">
         <span style="position:relative;left:-1%">电 话:</span>
         <span style="position:relative;left:35%">移动电话:</span>
        <span style="position:relative;left:70%;font-weight:700;">约定交车:</span>
      </div>
    </div>
      <table border="1">

<tr  height="35px">
<th><p style="font-size:15px;text-align:center;">牌照号</P></th>
<th><p style="font-size:15px;text-align:center;">颜色</P></th>
<th><p style="font-size:15px;text-align:center;">底盘号</P></th>
<th><p style="font-size:15px;text-align:center;">发动机号</P></th>
<th><p style="font-size:15px;text-align:center;">公里</P></th>
<th><p style="font-size:15px;text-align:center;">购车日期</P></th>
<th><p style="font-size:15px;text-align:center;">旧件带走</P></th>
<th><p style="font-size:15px;text-align:center;">是否洗车</P></th>
</tr>
<tr v-for="x in this.data" :key="x.$index" height="35px">
  <td>
    <p align="center">{{}}</p>
  </td>
  <td>
    <p align="center">{{x.partNo}}</p>
  </td>
  <td>
    <p align="center">{{x.partName}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>
</tr>
<tr  height="35px">
<td><p style="font-size:15px;text-align:center;font-weight:700;">车型</P></td>
<td colspan="5"><p style="font-size:17px;text-align:center;"></P></td>
<td><p style="font-size:15px;text-align:center;font-weight:700;">邮箱</P></td>
<td><p style="font-size:15px;text-align:center;"></P></td>
</tr>
<tr  height="35px">
<td><p style="font-size:15px;text-align:center;font-weight:700;">生产日期</P></td>
<td colspan="5"><p style="font-size:17px;text-align:center;"></P></td>
<td><p style="font-size:15px;text-align:center;font-weight:700;">付款方式</P></td>
<td><p style="font-size:15px;text-align:center;"></P></td>
</tr>
<tr  height="35px">
<td ><p style="font-size:15px;text-align:center;font-weight:700;">客户描述</P></td>
<td colspan="7"><p style="font-size:15px;text-align:center;"></P></td>
</tr>
</table>
    </div>
     <div>
<table border="1" style="position:relative;top:10px">

<tr  height="35px">
<th colspan="5"><span style="font-size:15px;text-align:center;font-weight:700;">维修增项</span></th>
</tr>
<tr  height="35px">
<td><p style="font-size:15px;text-align:center;font-weight:700;">项目名称</P></td>
<td><p style="font-size:15px;text-align:center;font-weight:700;">工时费</P></td>
<td><p style="font-size:15px;text-align:center;font-weight:700;">性质</P></td>
<td><p style="font-size:15px;text-align:center;font-weight:700;">确认方式</P></td>
<td><p style="font-size:15px;text-align:center;font-weight:700;">客户签字</P></td>
</tr>
<tr v-for="x in this.data" :key="x.$index" height="35px">
  <td>
    <p align="center">{{}}</p>
  </td>
  <td>
    <p align="center">{{x.partNo}}</p>
  </td>
  <td>
    <p align="center">{{x.partName}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>
  <td>
    <p align="center">{{x.nqty}}</p>
  </td>

</tr>

</table>
<div>
  <p><span style="position:relative;left:10%;font-size:15px;">预估费用合计：</span>
  <span style="position:relative;left:50%;font-size:15px;">注：建议500公里保养</span>
  </p>
  <p><span style="position:relative;left:10%;font-size:15px;">互检(班组长)：<u></u></span>
  <span style="position:relative;left:50%;font-size:15px;">终检(检查员)：<u></u></span>
  </p>
  <p><span style="position:relative;left:10%;font-size:15px;">服务总监：</span>
  </p>
   <p><span style="position:relative;left:10%;font-size:15px;">地址：</span>
  <span style="position:relative;left:60%;font-size:15px;">服务顾问：</span>
  </p>
  <p><span style="position:relative;left:10%;font-size:15px;">电话：</span>
  <span style="position:relative;left:60%;font-size:15px;">制单：</span>
  </p>
   <p><span style="position:relative;left:10%;font-size:15px;">说明：(1)检查后备箱，杂物箱内设施-<label><input name="Fruit" type="checkbox" value="" />是 </label>
<label><input name="Fruit" type="checkbox" value="" />否 </label> </span>
  </p>
  <p><span style="position:relative;left:10%;font-size:15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)进厂维修时随车贵重物品请自行保管！付款方式-<label><input name="Fruit" type="checkbox" value="" />现金 </label>
<label><input name="Fruit" type="checkbox" value="" />刷卡 </label> </span>
  </p>
  <p><span style="position:relative;left:10%;font-size:15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3)任务委托书副联是唯一凭证，请妥善保管！ </span>

  </p>
  <span style="position:relative;left:10%;font-size:15px;" >
    经销商会根据中国法律要求和为客户提供更好服务的目的收集客户个人信息，包括但不限于<br>
    姓名、电话、地址邮编、身份证号码、维护信息、购买信息。经销商会将收集到的客户信息<br>
    提供给一汽-大众(包括一汽-大众股东、一汽大众授权的第三方)，经销商和一汽-大众(包括一<br>
    汽-大众股东、一汽大众授权的第三方)，可能会使用客户信息包括但不限于分析、研究、致电、<br>
    发送信息。经销商和一汽-大众可能会根据法律的有关规定，或者行政、司法机构要求，向第<br>
    三方或者行政司法机构披露客户信息。经销商、一汽大众(包括一汽-大众股东、一汽大众<br>
    授权的第三方)会尽到高度审慎的注意业务、采取严密的技术措施防止信息泄露。
     </span>

 <p>
  <span style="position:relative;left:60%;font-size:15px;">客户签名：</span>
  <input style="border-left:0px;border-top:opx;border-right:0px;border-bottom:1px;position:relative;left:60%;top:25px">
  </p>
  <p>
  <span style="position:relative;left:50%;font-size:15px;">欢迎使用“奥迪服务小程序”</span>
  </p>

</div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.repair_contentbox {
  border: 1px;
}
</style>

<script>
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';
import { getUser } from '@/assets/js/auth';
export default {
  name: 'temlateBusinessOrder',
  props: {
    data: {
      username: getUser(),
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
      nowTime: moment().format('YYYY-MM-DD'),
      // username: getUser()
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
  created() {
  },
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    // if (this.isPreview) {
    //   this.fillInToDom();
    // }
  },
  methods: {
    // fillInToDom() {
    //   // this.isPreview = true;
    // }
  }
};
</script>
