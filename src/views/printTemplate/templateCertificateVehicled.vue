<template>
  <!-- 打印机动车小修竣工出厂合格证 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <div class="repaircaption">{{nowTime}}</div> -->
    <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;">机动车小修竣工出厂合格证</h1>
    <div style="clear:both;">
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:5%;">承修单位(章):</span>
        <span>{{ data.unit }}</span>
      </div>
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:25%;">电话:</span>
        <span>{{ data.phone }}</span>
      </div>
    </div>
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
      <tr style="font-size:12px;height:30px">
        <td style="border-bottom:1px solid #000;width:10%;border-right:1px solid #000;font-weight:bold">托修单位</td>
        <td style="border-bottom:1px solid #000;width:20%;border-right:1px solid #000;">{{ data.OWNER_NAME }}</td>
        <td style="border-bottom:1px solid #000;width:10%;border-right:1px solid #000;font-weight:bold">厂牌车型</td>
        <td colspan="3" style="border-bottom:1px solid #000;">{{ data.MODEL }}</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">牌照号码</td>
        <td style="width:20%;border-bottom:1px solid #000;border-right:1px solid #000;">{{ data.LICENSE }}</td>
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">进厂里程</td>
        <td style="width:20%;border-bottom:1px solid #000;border-right:1px solid #000;">{{ data.MILEAGE_INOUT }}</td>
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">进厂日期</td>
        <td style="width:30%;border-bottom:1px solid #000;">{{ nowTime }}</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">维修项目</td>
        <td colspan="5" style="border-bottom:1px solid #000;">{{ data.labourData }}</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">更换配件</td>
        <td colspan="5" style="border-bottom:1px solid #000;">{{ data.partData }}</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td colspan="6" style="border-bottom:1px solid #000;">
          机动车维修质量保质期： 汽车一级维护、小修及专项修理质量保证期为车辆行驶2000公里或者10日
        </td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">检验员签字</td>
        <td colspan="2" style="border-bottom:1px solid #000;border-right:1px solid #000;"></td>
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">接车人签字</td>
        <td colspan="2" style="border-bottom:1px solid #000;"></td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">出厂里程</td>
        <td colspan="2" style="border-bottom:1px solid #000;border-right:1px solid #000;"></td>
        <td style="width:10%;border-bottom:1px solid #000;border-right:1px solid #000;font-weight:bold">出厂日期</td>
        <td colspan="2" style="border-bottom:1px solid #000;"></td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td colspan="6" style="border-bottom:1px solid #000;">
          注： 1、机动车小修竣工合格证一式两联，一联由机动车承修方留存 2、“维修项目”一栏应如实填写作业内容，修复或换件情况，根据本标准条款对维修情况进行检验
        </td>
      </tr>
    </table>
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

export default {
  name: 'templateCertificateVehicled',
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
      nowTime: moment().format('YYYY-MM-DD')
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
