<template>
  <!-- 索赔件清单 -->
  <div  ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
    <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;">营业报表</h1>
     <div style="clear:both;">

       <div style="float:left;width:50%;margin:0;font-size:16px;">
        <span style="position:relative;left:300px">统计范围:</span>
        <span>{{ data.unit }}</span>
      </div>
    </div>
      <table border="1">
        <tr  height="35px">

<th colspan="4"><p style="font-size:17px;text-align:center;">送修情况</P></th>

<th colspan="4"><p style="font-size:17px;text-align:center;">营业收入情况</P></th>
</tr>
<tr  height="35px">
<th><p style="font-size:17px;text-align:center;">类别</P></th>
<th><p style="font-size:17px;text-align:center;">统计期</P></th>
<th><p style="font-size:17px;text-align:center;">月累计</P></th>
<th><p style="font-size:17px;text-align:center;">年累计</P></th>
<th><p style="font-size:17px;text-align:center;">收入类别</P></th>
<th><p style="font-size:17px;text-align:center;">统计期</P></th>
<th><p style="font-size:17px;text-align:center;">月累计</P></th>
<th><p style="font-size:17px;text-align:center;">年累计</P></th>
</tr>
<tr v-for="(x,index) in this.data" :key="x.$index" height="35px">
  <td>
    <p align="center">{{index+1}}</p>
  </td>
  <td>
    <p align="center">{{x.SERIES_ID}}</p>
  </td>
  <td>
    <p align="center">{{x.COMPANY_CODE}}</p>
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
</table>
    </div>
    <div>
<table border="1" style="position:relative;top:10px">

<tr  height="35px">
<td rowspan="6"><p style="font-size:17px;text-align:center;">备注信息</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">会员消费</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">（总）消费</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">前台消费</P></td>
<td><p style="font-size:17px;text-align:center;">销售消费</P></td>
</tr>
<tr  height="35px">
<td colspan="2"><p style="font-size:17px;text-align:center;">统计期间累计</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">2222</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">33</P></td>
<td><p style="font-size:17px;text-align:center;"></P></td>
</tr>
<tr  height="35px">
<td colspan="2"><p style="font-size:17px;text-align:center;">至统计期间累计</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">222</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">11</P></td>
<td><p style="font-size:17px;text-align:center;"></P></td>
</tr>
<tr  height="35px">
<td colspan="2"><p style="font-size:17px;text-align:center;">欠账信息</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">（总）欠收</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">前台暂收</P></td>
<td><p style="font-size:17px;text-align:center;">销售暂收</P></td>
</tr>
<tr  height="35px">
<td colspan="2"><p style="font-size:17px;text-align:center;">统计期间累计</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">333</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">55</P></td>
<td><p style="font-size:17px;text-align:center;"></P></td>
</tr>
<tr  height="35px">
<td colspan="2"><p style="font-size:17px;text-align:center;">至统计期累计</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">333</P></td>
<td colspan="2"><p style="font-size:17px;text-align:center;">44</P></td>
<td><p style="font-size:17px;text-align:center;"></P></td>
</tr>
</table>
<div>
  <p><span style="position:relative;left:50px">填表：</span>
  <span style="position:relative;left:500px">打印日期：{{nowTime}}</span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     维修收入： 工时收入 + 材料收入 + 管理费 + 包工费 + 其他指的非免费类的委托书
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
    维修小计： 维修收入 + 首保索赔收入
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     总营业额：维修收入 + 备件销售收入
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     总 收 入：总营业额 + 首保索赔收入
    </span>
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
