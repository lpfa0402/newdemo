<template>
  <div v-show="isPreview" ref="print" style="widtd:100%; margin: 0 auto;">
    <h2 style="text-align: center;">备件采购资金预测报表</h2>
    <div>制单日期：{{ nowTime }}</div>
    <table class="bor tc">
      <tr>
        <td>月份</td>
        <td colspan="2">当前月份</td>
        <td colspan="2">1月份</td>
        <td colspan="2">2月份</td>
        <td colspan="2">3月份</td>
      </tr>
      <tr>
        <td>预付金额</td>
        <td colspan="2">2500000.96</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
      </tr>
      <tr>
        <td>序号</td>
        <td>备件代码</td>
        <td>备件名称</td>
        <td>数量</td>
        <td>金额</td>
        <td>数量</td>
        <td>金额</td>
        <td>数量</td>
        <td>金额</td>
      </tr>
      <tr>
        <td>1</td>
        <td>partcode</td>
        <td>partName</td>
        <td>1</td>
        <td>10</td>
        <td>1</td>
        <td>10</td>
        <td>1</td>
        <td>10</td>
      </tr>
      <tr>
        <td>合计</td>
        <td></td>
        <td></td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
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
      styles: this.cteatePrintStyle()
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
    },
    cteatePrintStyle() {
      return {};
    }
  }
};
</script>
