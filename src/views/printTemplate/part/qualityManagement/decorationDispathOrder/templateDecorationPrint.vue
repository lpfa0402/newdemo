<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <h3 style="text-align: center;">{{ data.dealerName }}</h3>
    <h3 style="text-align: center;">装饰派委托书</h3>
    <table style="border-top: 1px solid black; border-bottom: 1px solid black;padding: 10px 0;">
      <tr style="line-height: 20px">
        <th align="right">客户名称：</th>
        <td align="left">{{ data.customerName }}</td>
        <th align="right">装饰单编号：</th>
        <td align="left">{{ data.billNo || '未上牌' }}</td>
        <th align="right">牌照号：</th>
        <td align="left">{{ data.licenseTag }}</td>
      </tr>
      <tr style="line-height: 20px">
        <th align="right">派工日期：</th>
        <td align="left">{{ data.orderDate }}</td>
        <th align="right">对应销售单号：</th>
        <td align="left">{{ data.saleOrderNo }}</td>
      </tr>
    </table>

    <p style="text-align: center;font-size: 14px;font-weight: bold; margin: 5px 0;">装饰项目</p>
    <table class="bor">
      <tr>
        <th width="25%" align="center">装饰项目代码</th>
        <th width="25%" align="center">装饰项目名称</th>
        <th width="25%" align="center">班组</th>
        <th width="25%" align="center">工时费</th>
      </tr>
      <tr v-for="(item, index) in data.projectList" :key="index">
        <td align="center">{{ item.proCode }}</td>
        <td align="center">{{ item.proName }}</td>
        <td align="center">{{ item.bzName }}</td>
        <td align="center">{{ item.proFee }}</td>
      </tr>
    </table>

    <p style="text-align: center;font-size: 14px;font-weight: bold; margin: 5px 0;">装饰材料</p>

    <table class="bor">
      <tr>
        <th align="center">装饰件代码</th>
        <th align="center">装饰件名称</th>
        <th align="center">仓库</th>
        <th align="center">数量</th>
      </tr>
      <tr v-for="(item, index) in data.partList" :key="index">
        <td align="center">{{ item.partNo }}</td>
        <td align="center">{{ item.partName }}</td>
        <td align="center">{{ item.storageCode }}</td>
        <td align="center">{{ item.partQuantity }}</td>
      </tr>
    </table>

    <table style="margin-top: 15px;">
      <tr>
        <td align="right">打印日期：</td>
        <td align="left">{{ data.printDate }}</td>
        <td align="right">制单：</td>
        <td align="left">{{ data.userName }}</td>
        <td align="right">客户签名：</td>
        <td align="left">______________________</td>
      </tr>
    </table>
  </div>
</template>

<script>
/**
 * 2019年12月4日10:36:27
 * @author lgy
 */
import moment from 'moment';

export default {
  name: 'templateDecorationPrint',
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
        return Number(total + Number(curr.PROFIT_LOSS_QUANTITY * curr.COST_PRICE));
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
