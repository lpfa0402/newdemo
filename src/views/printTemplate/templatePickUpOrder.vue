<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table>
      <tr>
        <td colspan="6" align="center" height="24" style="font-size: 24px;">预先拣料</td>
      </tr>
      <tr>
        <td height="26" width="10%">预拣单号</td>
        <td width="20%">{{ data.roNo }}</td>
        <td width="15%">服务工程师</td>
        <td width="20%">{{ data.serviceAdvisor }}</td>
        <td width="15%">打印日期</td>
        <td width="20%">{{ nowTime }}</td>
      </tr>
      <tr>
        <td height="26" width="10%">技师</td>
        <td width="20%">{{ data.technician }}</td>
        <td width="15%">车主</td>
        <td width="20%">{{ data.ownerName }}</td>
        <td width="15%">进厂时间</td>
        <td width="20%">{{ data.createDate }}</td>
      </tr>
      <tr>
        <td height="26" width="10%">VIN</td>
        <td width="20%">{{ data.vin }}</td>
        <td width="15%">发动机号</td>
        <td width="20%">{{ data.engineNo }}</td>
        <td width="15%">车型</td>
        <td width="20%">{{ data.model }}</td>
      </tr>
      <tr>
        <td height="26" width="10%">车牌号</td>
        <td width="20%">{{ data.license }}</td>
        <td width="15%">进厂里程</td>
        <td width="20%">{{ data.inMileage }}</td>
        <td width="15%"></td>
        <td width="20%"></td>
      </tr>
    </table>

    <table class="bor">
      <tr>
        <td width="8%" height="26" align="center">序号</td>
        <td width="11.5%" align="center">配件代码</td>
        <td width="11.5%" align="center">配件名称</td>
        <td width="11.5%" align="center">数量</td>
        <td width="11.5%" align="center">单位</td>
        <td width="11.5%" align="center">仓库</td>
        <td width="11.5%" align="center">库位</td>
        <td width="11.5%" align="center">单价</td>
        <td width="11.5%" align="center">金额</td>
      </tr>
      <tr v-for="(x, index) in data.inventoryList" :key="x">
        <td height="24" align="center">{{ index + 1 }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center">{{ x.PART_QUANTITY }}</td>
        <td align="center">{{ x.UNIT_CODE }}</td>
        <td align="center">{{ x.STORAGE_CODE }}</td>
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
        <td align="center">{{ x.SALES_PRICE }}</td>
        <td align="center">{{ x.RECEIVE_AMOUNT }}</td>
      </tr>
      <tr>
        <td colspan="8" align="center">合计</td>
        <!-- <td>{{ totalNumber }}</td> -->
        <td align="center">{{ Number(totalAmount).toFixed(2) }}</td>
      </tr>
    </table>

    <table style="margin-top:10px">
      <tr>
        <td height="26">技师签名：</td>
        <td>领料人签字：</td>
        <td>发料人签字：</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'templatePickUpOrder',
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
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      checkListNumber: ''
    };
  },
  computed: {
    // totalPrice() {
    //   return this.data.items.reduce((prev, curr) => {
    //     return curr.ckdj * curr.ckdj + prev;
    //   }, 0);
    // },
    // 统计数量和累计金额
    totalNumber() {
      return this.data.inventoryList.reduce((total, curr) => {
        return Number(total + Number(curr.PROFIT_LOSS_QUANTITY));
      }, 0);
    },
    totalAmount() {
      return this.data.inventoryList.reduce((total, curr) => {
        return Number(total + Number(curr.RECEIVE_AMOUNT));
      }, 0);
    }
  },
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
