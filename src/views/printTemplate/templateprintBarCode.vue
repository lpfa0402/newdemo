<template>
  <!-- 打印索赔单 -->
  <div v-show="isPreview" ref="print" style="margin: 0 auto;">
    <!-- <p style="text-align:; line-height:10px;margin:0;margin-top:10px;font-size:10px">&emsp;&emsp;</p> -->
    <!-- style="margin-top:10px;width:50%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;" -->

    <div id="data" style="width:50%"></div>
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
  name: 'templatePrintClaim',
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
    this.createTableInfo();
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
    console.log(JSON.stringify(this.data), 'data数据-----');
  },
  methods: {
    //打印获取数据
    createTableInfo() {
      let dataDiv = document.getElementById('data');
      let dataLength = this.data.list.length;
      let dataStr = '';
      for (var i = 0; i < dataLength; i++) {
        // if ((i + 1) % 2 != 0) {
        //   dataStr += "<div style='float:left;width:45%;margin-left:3%'>";
        // } else {
        //   dataStr += "<div style='float:right;width:45%;margin-left:2%'>";
        // }
        dataStr += "<div style='width:430px;'>";
        dataStr += "<table cellspacing='0' style='height:185.625px;border-collapse: collapse; border-spacing: 0;box-sizing:border;'>";
        dataStr += '<tbody>';
        dataStr += "<tr style='height:28.5px;font-weight:bold'>";
        dataStr += "<td style='text-align:left;font-size:20px;' colspan='4'>中国第一汽车股份有限公司</td>";
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2' >" + this.data.list[i].OWNER_CODE + ' ' + this.data.companyNameCn + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>打印时间:" + this.data.list[i].NOW_TIME + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>索赔单号:" + this.data.list[i].CLAIM_NO + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>维修日期:" + this.data.list[i].REPAIR_COMPLETE_DATE + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>底盘号:" + this.data.list[i].VIN + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>车型大类:" + this.data.list[i].VEHICLE_CLASS_CODE + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>生产日期:" + ((this.data.list[i].PRODUCT_DATE == undefined) ? '' : this.data.list[i].PRODUCT_DATE)+ '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>销售日期:" + ((this.data.list[i].SALE_DATE == undefined) ? '' : this.data.list[i].SALE_DATE) + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>配件代码:" + this.data.list[i].NEW_PART_CODE + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>行驶里程:" + this.data.list[i].MILEAGE + 'Km</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='4'>配件名称:" + this.data.list[i].NEW_PART_NAME + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>厂家代码:" + ((this.data.list[i].RES_FACTORY_CODE == undefined) ? '' : this.data.list[i].RES_FACTORY_CODE) + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>" + this.data.list[i].MAIN_FLAG + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>车辆用途:" + this.data.list[i].VEHICLE_USE_NAME + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>索赔类型:" + this.data.list[i].CLAIM_TYPE_NAME + '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>故障代码:" + ((this.data.list[i].FAULT_POSITION_CODE == undefined) ? '' : this.data.list[i].FAULT_POSITION_CODE) + '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>车系:" + ((this.data.list[i].VEHICLE_SERIES_CODE == undefined) ? '' : this.data.list[i].VEHICLE_SERIES_CODE)+ '</td>';
        dataStr += '</tr>';
        dataStr += "<tr style='height:23.5px;text-decoration: underline;'>";
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>故障原因:" + ((this.data.list[i].FAULT_DES == undefined) ? '' : this.data.list[i].FAULT_DES)+ '</td>';
        dataStr += "<td style='text-align:left;font-size:10px;' colspan='2'>责任类别:" + ((this.data.list[i].RES_CLASS_NAME == undefined) ? '' : this.data.list[i].RES_CLASS_NAME)+ '</td>';
        dataStr += '</tr>';
        dataStr += '<tr>';
        dataStr +=
          "<td colspan='4' align='center' style='font-size: 28px;text-align:left;border:1px solid #ddd;'><img src='" +
          this.data.barcode[i] +
          "' style='width:260px;height:60px;display:block;margin:0 auto;'/></td>";
        dataStr += '</tr>';
        dataStr += '</tbody>';
        dataStr += '</table>';
        dataStr += '</div>';
        console.log('==========>', this.data.barcode[i]);
      }
      dataDiv.innerHTML = dataStr;
    },
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
