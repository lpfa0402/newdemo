<template>
  <!-- 打印索赔单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div>
      <div class="repair_contentbox" style="width:100%;float:left;margin-top:0px;text-align:center;margin-top:50px">
        <p style="line-height:28px;margin:0;font-size:28px">索赔件发货单</p>
      </div>
    </div>
  <p style="text-align:; line-height:10px;margin:0;margin-top:10px;font-size:10px">&emsp;&emsp;</p>
   <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr>
            <td style="text-align:left;width:70%;">服务站名:{{data[0].OWNER_CODE}} {{data.companyNameCn}}</td>
            <td style="text-align:left;width:30%;">登记单号:{{data[0].DELIVERY_NO}}</td>
          </tr>
        </tbody>
      </table>
      <table cellspacing="0" border="1" style="margin-top:5px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:center;width:5%;">序号</td>
            <td style="text-align:center;width:15%;">故障件代码</td>
            <td style="text-align:center;width:5%;">数量</td>
            <td style="text-align:center;width:45%;">故障件名称</td>
            <td style="text-align:center;width:15%;">类别</td>
            <td style="text-align:center;width:15%;">是否返旧件</td>
          </tr>
          <tr v-for="(x,index) in this.data" :key="x.$index" style="height:15px;">
            <td style="text-align:center;width:5%;">{{index+1}}</td>
            <td style="text-align:center;width:15%;">{{x.FAULT_PART_CODE}}</td>
            <td style="text-align:right;width:5%;">{{x.FAULT_PART_COUNT}}</td>
            <td style="text-align:center;width:45%;">{{x.OLD_PART_NAME}}</td>
            <td style="text-align:center;width:15%;">{{x.CLAIM_TYPE}}</td>
            <td style="text-align:center;width:15%;">{{x.IF_RETURN}}</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:20%;" colspan="2">合计</td>
            <td style="text-align:right;width:5%;">{{data[0].SUM_COUNT}}</td>
            <td style="text-align:center;width:75%;" colspan="3"></td>
          </tr>
        </tbody>
      </table>
      <table cellspacing="0" style="width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <tbody>
          <tr>
            <td style="text-align:left;width:25%;">上报日期：{{data[0].NOW_DATE}}</td>
            <td style="text-align:center;width:45%;">索赔员：</td>
            <td style="text-align:left;width:30%;">盖章：</td>
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
  name: 'templatePrintFaultParts',
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
