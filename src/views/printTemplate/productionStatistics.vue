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
        <!-- <table border>
    <template v-for="(item) in afterList" >
      <tr v-for="(row, i) in item" >
          <td  v-if="i === 0" :rowspan="item.length">{{row.col1}}</td>
          <td  v-if="i === 0" :rowspan="item.length">{{row.col2}}</td>
          <td>{{row.col3}}</td>
      </tr>
    </template>
  </table> -->
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
<tr v-for="(x) in this.data" :key="x.$index" height="35px">

  <td rowspan= "x.length">
     <p align="center">{{x.partNo}}</p>
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
</table>
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
  name: 'temlateProductionStatistics',
  props: {
    data: {
      username: getUser(),
      type: Object,
      required: true,
      default() {
        return {};
      },
      //  list: data,
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
