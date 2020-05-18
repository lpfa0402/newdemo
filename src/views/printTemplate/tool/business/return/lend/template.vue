<template>
  <div v-show="isPreview" ref="print" style="width: 800px; margin: 0 auto;">
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">工具盘点清单</td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="26" style="font-size: 14px;">日期：{{ nowTime }}&nbsp;</td>
      </tr>
    </table>

    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td width="30%" style="border: 1px solid #000; font-size: 14px;">工具存放位置</td>
        <td width="25%" style="border: 1px solid #000; font-size: 14px;">工具代码</td>
        <td width="25%" style="border: 1px solid #000; font-size: 14px;">工具名称</td>
        <td width="10%" style="border: 1px solid #000; font-size: 14px;">账面数量</td>
        <td width="10%" style="border: 1px solid #000; font-size: 14px;">实盘数量</td>
      </tr>
      <tr v-for="x in data.data" :key="x.id">
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.sptLocation }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.toolNum }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.toolName }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.inCount }}</td>
        <td style="border: 1px solid #000; font-size: 14px;">{{ x.firmCount }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'checkTemplate',
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
