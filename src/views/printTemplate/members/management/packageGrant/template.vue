<template>
  <div v-show="isPreview" ref="print" style="width: 800px; margin: 0 auto;">
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">会员优惠包打印单</td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="26" style="font-size: 14px;">打印人：{{ username }}&nbsp;&nbsp;&nbsp;&nbsp;日期：{{ nowTime }}&nbsp;</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">会员卡号</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.cardNum }}</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">客户名称</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.customer }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">优惠包代码</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.vDiscount }}</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">优惠包名称</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.vDiscountName }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">申请单号</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.vBillNo }}</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">优惠包售价</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">{{ data.nCost }}</td>
      </tr>
      <tr>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">备注</td>
        <td width="70%" colspan="3" style="border: 1px solid #000; font-size: 14px;">{{ data.vRemark }}</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">优惠项目明细</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td width="15%" style="border: 1px solid #000; font-size: 14px;">工时定额</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">项目代码</td>
        <td width="20%" style="border: 1px solid #000; font-size: 14px;">项目名称</td>
        <td width="10%" style="border: 1px solid #000; font-size: 14px;">工时费</td>
        <td width="10%" style="border: 1px solid #000; font-size: 14px;">有效日期</td>
        <td width="10%" style="border: 1px solid #000; font-size: 14px;">次数</td>
        <td width="15%" style="border: 1px solid #000; font-size: 14px;">备注</td>
      </tr>
      <tr v-for="x in data.items" :key="x.id">
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.nStandRationId }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.vCode }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.vName }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.rates }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.dExpire | DateFormat }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.nTimes }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.vRemark }}</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">优惠备件信息</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">备件代码</td>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">备件名称</td>
        <td width="15%" style="border: 1px solid #000; font-size: 14px;">有效日期</td>
        <td width="10%" style="border: 1px solid #000; font-size: 14px;">数量</td>
        <td width="25%" style="border: 1px solid #000; font-size: 14px;">备注</td>
      </tr>
      <tr v-for="x in data.parts" :key="x.id">
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.vCode }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.vName }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.dExpire | DateFormat }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.nTimes }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.vRemark }}</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;"></td>
      </tr>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;"></td>
      </tr>
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;"></td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="24" style="font-size: 20px;">客户签字：___________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';
import { getUser } from '@/assets/js/auth';

export default {
  name: 'cylPackageGrantTemplate',
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
      nowTime: moment().format('YYYY-MM-DD'),
      username: getUser()
    };
  },
  computed: {
    totalPrice() {
      return this.data.items.reduce((prev, curr) => {
        return curr.ckdj * curr.ckdj + prev;
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
