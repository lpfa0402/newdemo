<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <h2 style="text-align: center; line-height: 24px; height: 24px;">{{data.dealerName}}</h2> -->
    <!-- <h2 style="text-align: center; line-height: 24px; height: 24px;">用友汽车</h2> -->
    <h3 style="text-align: center; line-height: 18px; height: 18px;">车辆出门证</h3>
    <table style="border: 0px solid #ccc;margin: 0 auto">
      <tr>
        <td align="right" width="30%" height="26">车牌号：</td>
        <td>{{ data.license }}</td>
        <td align="right">车主：</td>
        <td>{{ data.ownerName }}</td>
      </tr>
      <tr>
        <td align="right" height="26">车架号：</td>
        <td>{{ data.vin }}</td>
        <td align="right">车型：</td>
        <td>{{ data.modelName }}</td>
      </tr>
      <tr>
        <td align="right" height="26">结算员：</td>
        <td>{{ data.balanceHandler }}</td>
        <td align="right">结算时间：</td>
        <td>{{ data.balanceTime }}</td>
      </tr>
      <tr>
        <td align="right" height="26" width="20%">开单时间：</td>
        <td>{{ data.roCreateDate }}</td>
        <!-- <td align="right">应收金额：</td>
        <td>{{ data.receiveAmount }}</td> -->
           <td align="right" height="26">维修类型：</td>
        <td>{{ data.repairTypeName }}</td>
      </tr>
      <!-- <tr>
        <td align="right" height="26">维修类型：</td>
        <td>{{ data.repairTypeName }}</td>
      </tr> -->
      <tr>
        <td align="right" height="26">备注：</td>
        <td>{{ data.remark }}</td>
      </tr>
      <tr>
        <td align="right" height="26" width="15%">经办人签字：</td>
        <td></td>
        <td align="right">签发人：</td>
        <td></td>
        <td align="right">(注：本出门证盖章有效)</td>
        <td></td>
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

export default {
  name: 'templateGiveCar',
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
