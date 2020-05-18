<template>
  <div v-show="isPreview" ref="print" style="width:70%;margin: 0 auto;">
    <!-- <img src="@/assets/img/Lodop_logo.png" alt="" style="display: block; width: 400px; height: 100px;float: right;"> -->
    <div style="width:100%;float:left;text-align:center;">
      <h3 style="text-align:center">经销商试车记录</h3>
    </div>
    <table cellspacing="0" style="border-collapse: collapse; border-spacing: 0;border:none;box-sizing:border">
      <tr style="height:35px;">
        <td width="8%"></td>
        <td width="15%">经销商代码:</td>
        <td align="left" colspan="5">
          <span>{{ data.ownerCode }}</span>
          <!-- style="border-bottom:1px solid #000" -->
        </td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>主修人：</td>
        <td align="left" colspan="5">____________</td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>试车人：</td>
        <td align="left">____________</td>
        <td align="right">同行人：</td>
        <td align="left">____________</td>
        <td align="right">任务委托书号:</td>
        <td align="left">
          <span>{{ data.roNo }}</span>
        </td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>日期：</td>
        <td align="left">
          <span>{{ nowTime }}</span>
        </td>
        <td></td>
        <td></td>
        <td align="right">车牌号:</td>
        <td align="left">
          <span>{{ data.license }}</span>
        </td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>试车性质：</td>
        <td align="left"><input type="checkbox" />接车试车</td>
        <td align="left" colspan="4"><input type="checkbox" />交车试车</td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>试车原因或用户抱怨：</td>
        <td align="left" colspan="5">___________________________________________________________</td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>起始里程：</td>
        <td align="left">____________km</td>
        <td></td>
        <td align="right">试车时间:</td>
        <td align="left">____________</td>
        <td></td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>试车性质：</td>
        <td align="left"><input type="checkbox" />城市公路</td>
        <td align="left"><input type="checkbox" />高速公路</td>
        <td align="left"><input type="checkbox" />乡村环路</td>
        <td align="left"><input type="checkbox" />内部试车场</td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>结束里程：</td>
        <td align="left">____________km</td>
        <td></td>
        <td align="right">试车时间:</td>
        <td align="left">____________</td>
        <td></td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>试车结果：</td>
        <td align="left"><input type="checkbox" />故障清除</td>
        <td align="left"><input type="checkbox" />修后故障仍存在</td>
        <td align="left"><input type="checkbox" />故障存在</td>
        <td align="left"><input type="checkbox" />没有发现故障</td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>新故障：</td>
        <td align="left"><input type="checkbox" />有新故障</td>
        <td align="left"><input type="checkbox" />无新故障</td>
        <td align="left"></td>
        <td align="left"></td>
        <td width="10%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>新故障描述：</td>
        <td align="left" colspan="5">___________________________________________________________</td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>新故障状态：</td>
        <td align="left"><input type="checkbox" />需要维修</td>
        <td align="left"><input type="checkbox" />不需要</td>
        <td align="left"></td>
        <td align="left"></td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td>新故障类型：</td>
        <td align="left"><input type="checkbox" />电器</td>
        <td align="left"><input type="checkbox" />底盘</td>
        <td align="left"></td>
        <td align="left"></td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td width="8%"></td>
        <td></td>
        <td align="left"><input type="checkbox" />发动机</td>
        <td align="left"><input type="checkbox" />车身</td>
        <td align="left"></td>
        <td align="left"></td>
        <td width="8%"></td>
      </tr>
      <tr style="height:35px">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td align="left">试车批准签字:</td>
        <td align="left">______________</td>
      </tr>
      <tr style="height:35px">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td align="left">试车人签字:</td>
        <td align="left">______________</td>
      </tr>
      <tr style="height:35px">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td align="left">用户签字:</td>
        <td align="left">______________</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'template1',
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
      nowTime: moment().format('YYYY-MM-DD')
    };
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
