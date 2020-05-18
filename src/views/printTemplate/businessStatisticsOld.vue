<template>
  <!-- 索赔件清单 -->
  <div  ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
    <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;">业务统计</h1>
     <div style="clear:both;">

       <div style="float:left;width:50%;margin:0;font-size:16px;">
        <span style="position:relative;left:300px;">统计范围:</span>
        <span>{{ data.unit }}</span>
      </div>
    </div>
      <table border="1">

<tr  height="35px">
<th><p style="font-size:17px;text-align:center;">类别</P></th>
<th><p style="font-size:17px;text-align:center;">次数</P></th>
<th><p style="font-size:17px;text-align:center;">收入类别</P></th>
<th><p style="font-size:17px;text-align:center;">首保索赔</P></th>
<th><p style="font-size:17px;text-align:center;">欠收</P></th>
<th><p style="font-size:17px;text-align:center;">统计期结算</P></th>
<th><p style="font-size:17px;text-align:center;">旧账结算</P></th>
</tr>
<tr v-for="(x,index) in this.data" :key="x.$index" height="35px">
  <td>
    <p align="center">{{index+1}}</p>
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

</tr>
</table>
    </div>
    <div>

<div>
  <p><span style="position:relative;left:270px">总产值：</span>
  <span style="position:relative;left:450px">营业额：</span>
  </p>
  <p><span style="position:relative;left:230px">总产值-维修 ：</span>
  <span style="position:relative;left:370px">营业额-维修：</span>
  </p>
  <p><span style="position:relative;left:230px">总产值-销售 ：</span>
  <span style="position:relative;left:370px">营业额-销售：</span>
  </p>
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
  <p>
    <span style="position:relative;left:50px;color:red">
     总 产 值： 总产值-维修+总产值-销售(统计期结算)
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     总产值-维修： 维修合计金额，首保索赔+欠收+统计期结算
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     总产值-销售： 备件销售合计金额，欠收+统计期结算
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     营 业 额：营业额-维修+营业额-销售(统计期结算)
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     营业额-维修：维修合计金额，统计期结算+旧账结算
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     营业额-销售：备件销售合计金额，统计期结算+旧账结算
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     欠 收：统计期内欠账单据合计金额
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     统计期结算：统计期内出厂结算金额
    </span>
  </p>
  <p>
    <span style="position:relative;left:50px;color:red">
     旧账结算：统计期之前出厂的欠账结算金额
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
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';
import { getUser } from '@/assets/js/auth';
export default {
  name: 'temlateBusinessStatisticsOld',
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
