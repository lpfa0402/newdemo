<template>
  <div v-show="isPreview" ref="print" style="width: 600px; margin: 0 auto;">
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td colspan="7" align="center" height="24" style="font-size: 24px;">收入汇总</td>
      </tr>
      <tr>
        <td colspan="7" align="right" height="26" style="font-size: 14px;">日期：{{ nowTime }}&nbsp;</td>
      </tr>
    </table>

    <table class="bor">
      <tr>
        <td rowspan="2">整车</td>
        <td>进口</td>
        <td colspan="2">{{ data.importAmount }}</td>
      </tr>
      <tr>
        <td>国产</td>
        <td colspan="2">{{ data.countryAmount }}</td>
      </tr>
      <tr>
        <td rowspan="5">维修保养</td>
        <td></td>
        <td>材料收入</td>
        <td>人工收入</td>
      </tr>
      <tr>
        <td>保险客户</td>
        <td>{{ data.safeMaterial }}</td>
        <td>{{ data.safeHand }}</td>
      </tr>
      <tr>
        <td>自费客户</td>
        <td>{{ data.ownMaterial }}</td>
        <td>{{ data.ownHand }}</td>
      </tr>
      <tr>
        <td>索赔客户</td>
        <td>{{ data.claimMaterial }}</td>
        <td>{{ data.claimHand }}</td>
      </tr>
      <tr>
        <td>首保客户</td>
        <td>{{ data.firstMaterial }}</td>
        <td>{{ data.firstHand }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'summaryTemplate',
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
