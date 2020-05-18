<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <table>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">盘点单</td>
      </tr>
      <tr>
        <td>
          <span style="font-weight:blod">公司：</span>
          {{ownerName}}
        </td>
      </tr>
      <tr>
        <td colspan="3" align="left" height="26">盘点单号：{{ data.inventoryNo }}&nbsp;</td>
        <td colspan="4" align="right" height="26">盘点日期：{{ data.inventoryDate }}&nbsp;</td>
      </tr>
    </table>

    <table class="bor">
      <tr>
        <td width="8%" height="26" align="center">序号</td>
        <td width="11.5%" align="center">仓库</td>
        <td width="11.5%" align="center">库位</td>
        <td width="11.5%" align="center">备件代码</td>
        <td width="11.5%" align="center">备件名称</td>
        <td width="11.5%" align="center" v-if="data.isRealStock == '1'">账面数量</td>
        <td width="11.5%" align="center">实盘数量</td>
        <!-- <td width="11.5%" align="center">盈亏数量</td>
        <td width="11.5%" align="center">盈亏金额</td>-->
      </tr>
      <tr v-for="x in data.inventoryList" :key="x.index">
        <td height="24" align="center">{{ x.index + 1 }}</td>
        <td align="center">{{ x.STORAGE_NAME }}</td>
        <td align="center">{{ x.STORAGE_POSITION_CODE }}</td>
        <td align="center">{{ x.PART_NO }}</td>
        <td align="center">{{ x.PART_NAME }}</td>
        <td align="center" v-if="data.isRealStock == '1'">{{ x.REAL_STOCK }}</td>
        <td align="center"></td>
        <!-- <td align="center">{{ x.PROFIT_LOSS_QUANTITY }}</td>
        <td align="center">{{ Number(x.PROFIT_LOSS_QUANTITY * x.COST_PRICE).toFixed(2) }}</td>-->
      </tr>
      <!-- <tr>
        <td colspan="7" align="center">合计</td>
        <td>{{ totalNumber }}</td>
        <td>{{ Number(totalAmount).toFixed(2) }}</td>
      </tr>-->
    </table>

    <p style="text-align:right;">备注：{{ data.remark }}</p>
    <p style="text-align:right;">打印时间:{{ nowTime }}</p>
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
import { getOwnerName } from '@/assets/js/auth';
export default {
  name: 'templateCheckList',
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
      checkListNumber: '',
      ownerName: getOwnerName()
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
