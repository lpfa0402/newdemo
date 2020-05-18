<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div style="font-size:24px;text-align:center;height: 24px;margin-bottom: 10px">维修预约单</div>
    <hr style="border:1px solid #000" />
    <table class="bor" cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;box-sizing:border;margin-bottom: 20px">
      <tr style="text-align:center">
        <td align="center" width="10%" height="26" style="font-weight:700">预约单号</td>
        <td width="15%">{{ data.bookingOrderNo }}</td>
        <td width="10%" style="font-weight:700">资料来源</td>
        <td width="12%">{{ data.bookingSource }}</td>
        <td width="13%" style="font-weight:700">预约进厂时间</td>
        <td width="22%">{{ data.bookingComeTime }}</td>
      </tr>
      <tr style="text-align:center">
        <td height="30" style="font-weight:700">服务工程师</td>
        <td>{{ data.serviceAdvisor }}</td>
        <td height="30" style="font-weight:700">指定技师</td>
        <td>{{ data.chiefTechnicain }}</td>
        <td height="30" style="font-weight:700">预约类别</td>
        <td>{{ data.bookingTypeCode }}</td>
        <!-- <td height='30'>上次进厂日期</td>
        <td>2019-01-17 10:41</td>-->
      </tr>
      <tr style="text-align:center">
        <td style="font-weight:700">车主</td>
        <td>{{ data.ownerName }}</td>
        <td style="font-weight:700">VIN</td>
        <td>{{ data.vin }}</td>
        <td height="26" style="font-weight:700">车牌号</td>
        <td>{{ data.license }}</td>
      </tr>
      <tr style="text-align:center">
        <td style="font-weight:700">车辆品牌</td>
        <td>{{ data.brand }}</td>
        <td style="font-weight:700">车系</td>
        <td>{{ data.series }}</td>
        <td height="26" style="font-weight:700">车型</td>
        <td>{{ data.model }}</td>
      </tr>
      <tr style="text-align:center">
        <!-- <td>进厂里程</td>
        <td>238</td>-->
        <td style="font-weight:700">联系人</td>
        <td>{{ data.contactorName }}</td>
        <td style="font-weight:700">手机</td>
        <td>{{ data.contactorMobile }}</td>
        <td style="font-weight:700">送修人电话</td>
        <td>{{ data.contactorPhone }}</td>
      </tr>
    </table>

    <table class="bor" style="margin-bottom: 15px">
      <tr>
        <td colspan="7" align="center" height="26">预约项目</td>
      </tr>
      <tr style="text-align:center;font-size:16px;font-weight:700">
        <td width="5%" height="26">序号</td>
        <td width="30%">维修项目代码</td>
        <td>维修项目名称</td>
        <td width="30%">故障描述</td>
      </tr>
      <tr v-for="x in data.dms_table" :key="x.index" style="text-align:center">
        <td>{{ x.index + 1 }}</td>
        <td>{{ x.LABOUR_CODE }}</td>
        <td>{{ x.LABOUR_NAME }}</td>
        <td>{{ x.TROUBLE_DESC }}</td>
      </tr>
    </table>

    <table class="bor" style="margin-bottom: 15px">
      <tr style="text-align:center;font-size:16px;font-weight:700">
        <td colspan="7" align="center" height="26">预约配件</td>
      </tr>
      <tr style="text-align:center;font-size:16px;font-weight:700">
        <td width="5%" height="30">序号</td>
        <td width="30%">仓库代码</td>
        <td>预约配件代码</td>
        <td width="30%">预约配件名称</td>
      </tr>
      <tr v-for="x in data.dms_tablepart" :key="x.index" style="text-align:center">
        <td>{{ x.index + 1 }}</td>
        <td>{{ x.STORAGE_CODE }}</td>
        <td>{{ x.PART_NO }}</td>
        <td>{{ x.PART_NAME }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="right" colspan="7">预估金额：{{ data.estimateAmount }} 元</td>
      </tr>
      <tr>
        <td align="right" height="30" width="15%">客户需求：</td>
        <td>{{ data.customerDes }}</td>
      </tr>
      <tr>
        <td align="right" height="30" width="15%">备注：</td>
        <td>{{ data.remarkB }}</td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="26">打印时间：{{ nowTime }}&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';
// import { getPinpSelect, getChexSelect, modelsDict } from '@/api/repair/repairReception/repairBusinessManger';

export default {
  name: 'templateOrderForm',
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
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };
  },
  computed: {},
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
