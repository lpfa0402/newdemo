<template>
  <div ref="print" v-show="isPreview" style="width: 100%; margin: 0 auto;">
    <div style="width: 80%; margin: 0 auto;">
      <h2 style="text-align: center; line-height: 24px; height: 24px;">提车单</h2>

      <table style="border-collapse: collapse; border-spacing: 0;border:1px solid #ddd;box-sizing:border;">
        <tr>
          <td align="center" height="100" style="font-size: 14px;text-align:left;border:1px solid #ddd;width:50%;">配载单号:{{ data.transOperateNo }}</td>
          <td align="center" height="100" style="font-size: 28px;text-align:left;border:1px solid #ddd;width:50%;">
            <img :src="data.img" style="width:200px;height:90px;display:block;margin:0 auto;" />
          </td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;width:50%;font-size:14px;">
            <span style="display:inline-block;width:120px;">入场时间：</span>
          </td>
          <td align="left" style="border:1px solid #ddd;width:50%;font-size:14px;"><span style="display:inline-block;width:120px;">出场时间：</span></td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;width:50%;font-size:14px;">
            <span style="display:inline-block;width:120px;">出库地点：</span>
            ({{ data.salesStoreCode }}){{ data.salesStoreName }}
          </td>
          <td align="left" style="border:1px solid #ddd;width:50%;font-size:14px;">
            <span style="display:inline-block;width:120px;">出库地提车道号：</span>
            {{ data.outLaneNumber }}
          </td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;width:50%;font-size:14px;">
            <span style="display:inline-block;width:120px;">出库地联系人：</span>
            {{ data.outLinkMan }}
          </td>
          <td align="left" style="border:1px solid #ddd;width:50%;font-size:14px;">
            <span style="display:inline-block;width:120px;">出库地联系电话：</span>
            {{ data.outLInkPhone }}
          </td>
        </tr>
        <tr>
          <td align="left" height="26" colspan="2" style="border:1px solid #ddd;font-size:14px;">
            <span style="display:inline-block;width:120px;">目的地名称:</span>
            {{ data.dealerName }}
          </td>
        </tr>
        <tr>
          <td align="left" height="26" colspan="2" style="border:1px solid #ddd;font-size:14px;"><span style="display:inline-block;width:120px;">目的地地址：</span>{{ data.vreceiveaddr }}</td>
        </tr>
      </table>

      <table style="border-collapse:collapse; border-spacing: 0;border:1px solid #ddd;box-sizing:border;border-top:none;border-bottom:none;">
        <thead>
          <tr>
            <th style="font-weight:normal;border:1px solid #ddd;border-top:none;">运单号</th>
            <th style="font-weight:normal;border:1px solid #ddd;border-top:none;">产品代码</th>
            <th style="font-weight:normal;border:1px solid #ddd;border-top:none;">数量</th>
          </tr>
        </thead>
        <tr v-for="(li, index) in data.list" :key="index">
          <td align="left" height="26" style="border:1px solid #ddd;width:40%;font-size:14px;">{{ li.waybillNo }}</td>
          <td align="left" style="border:1px solid #ddd;width:40%;font-size:14px;">{{ li.productCode }}</td>
          <td align="left" style="border:1px solid #ddd;width:20%;font-size:14px;">{{ li.transNum }}</td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;" colspan="2">合计</td>
          <td align="left" style="border:1px solid #ddd;width:20%;font-size:14px;">{{ data.len }}</td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;" colspan="3">提车单位: {{ data.ownerName }}</td>
        </tr>
      </table>

      <table style="border-collapse:collapse; border-spacing: 0;border:1px solid #ddd;box-sizing:border;border-top:none;">
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;width:40%;font-size:14px;border-top:none;">提车人姓名: {{ data.username }}</td>
          <td align="left" style="border:1px solid #ddd;width:30%;font-size:14px;border-top:none;">牌照号:</td>
          <td align="left" style="border:1px solid #ddd;width:30%;font-size:14px;border-top:none;" rowspan="4"></td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;" colspan="2">联系电话: 0431-85730726</td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;" colspan="2">证件号码:</td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;" colspan="2">提车单位负责人确认:</td>
        </tr>
        <tr>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;">付车员:</td>
          <td align="left" height="26" style="border:1px solid #ddd;font-size:14px;" colspan="2">打印时间: {{ data.time }}</td>
        </tr>
      </table>
    </div>
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
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  },
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
  }
};
</script>
