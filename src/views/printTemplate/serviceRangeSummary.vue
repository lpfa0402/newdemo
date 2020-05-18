<template>
  <!-- 服务范围汇总 -->
  <div  ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
    <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;">服务范围汇总</h1>
     <div style="clear:both;">

       <div style="float:left;width:50%;margin:0;font-size:16px;">
         <span style="position:relative;left:0px">车型:</span>
        <span style="position:relative;left:300px">统计范围:</span>
        <span>{{ data.unit }}</span>
      </div>
    </div>
      <table border="1">
<tr  height="35px">
<th><p style="font-size:17px;text-align:center;">维修类别</P></th>
<th><p style="font-size:17px;text-align:center;">车型</P></th>
<th><p style="font-size:17px;text-align:center;">厂牌</P></th>
<th><p style="font-size:17px;text-align:center;">本地车</P></th>
<th><p style="font-size:17px;text-align:center;">外地车</P></th>
<th><p style="font-size:17px;text-align:center;">军车</P></th>
<th><p style="font-size:17px;text-align:center;">合计车次</P></th>
<th><p style="font-size:17px;text-align:center;">其中私车</P></th>
</tr>
<tr v-for="x in data" :key="x.$index" height="35px">
  <td :rowspan="dataLen">
    <p align="center">首保</p>
  </td>
  <td>
    <p align="center">{{x.SERIES_ID}}</p>
  </td>
  <td>
    <p align="center">{{x.COMPANY_CODE}}</p>
  </td>
  <td>
    <p align="center">3</p>
  </td>
  <td>
    <p align="center">4</p>
  </td>
  <td>
    <p align="center">5</p>
  </td>
  <td>
    <p align="center">6</p>
  </td>
  <td>
    <p align="center">7</p>
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
// import { getUser } from '@/assets/js/auth';
export default {
  name: 'temlateBusinessOrder',
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        return [];
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
    dataLen(){
      return this.data.length;
    },
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
