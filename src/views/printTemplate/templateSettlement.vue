<template>
  <!-- 打印销售结算单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <div class="repaircaption">{{nowTime}}</div> -->
    <h1 style="clear:both;line-height:50px;font-weight:bold;margin:0;text-align:center;">销售结算单</h1>
    <!-- <div style="clear:both;">
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:5%;">承修单位(章):</span>
        <span>上海绿地---</span>
      </div>
      <div style="float:left;width:50%;margin:0;font-size:14px;">
        <span style="padding-left:25%;">电话:</span>
        <span>021-56651999</span>
      </div>
    </div>-->
    <!-- <table class="bor-through">
      <tr>
        <td width="100%" align="center" height="24" style="font-size: 24px;">备件销售单</td>
      </tr>
    </table>-->
    <table>
      <!-- <tr>
        <td colspan="7" align="left" height="26">&nbsp;</td>
      </tr>-->

      <!-- <tr>
        <td colspan="7" align="right" height="26">&nbsp;</td>
      </tr>-->
      <tr>
        <td align="right" width="10%" height="26">销售单号：</td>
        <td width="60%">{{ data.baseInfo.SALES_PART_NO }}</td>
        <td align="right" width="10%">&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>&nbsp;&nbsp;</td>
      </tr>
      <tr>
        <td align="right" height="26">客户名称：</td>
        <td>{{ data.baseInfo.CONTACTOR_NAME }}</td>
        <td align="right">打印日期：</td>
        <td>{{ nowTime }}</td>
      </tr>
    </table>

    <table
      cellspacing="0"
      width="100%"
      style="border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
    >
      <tr style="font-size:12px;height:30px">
        <td
          colspan="2"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >备件代码</td>
        <td
          colspan="4"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >备件名称</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">单位</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">数量</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">销售单价</td>
        <td style="border-bottom:1px solid #000;" align="center">金额小计</td>
      </tr>
      <tr v-for="x in data.detailInfo" :key="x.id" style="font-size:12px;height:30px">
        <td
          colspan="2"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >{{ x.PART_NO }}</td>
        <td
          colspan="4"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >{{ x.PART_NAME }}</td>
        <td
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >{{ x.UNIT_NAME }}</td>
        <td
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >{{ x.PART_QUANTITY }}</td>
        <td
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >{{ x.PART_SALES_PRICE }}</td>
        <td style="border-bottom:1px solid #000;" align="center">{{ x.PART_SALES_AMOUNT }}</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td
          colspan="2"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >结算方式</td>
        <td
          colspan="4"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >结算金额</td>
        <td
          colspan="2"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >手续费</td>
        <td colspan="2" style="border-bottom:1px solid #000;" align="center">结算日期</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td colspan="2" style="border-bottom:1px solid #000;border-right:1px solid #000;"></td>
        <td
          colspan="4"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        >{{data.baseInfo.RECEIVE_AMOUNT}}</td>
        <td
          colspan="2"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        ></td>
        <td colspan="2" style="border-bottom:1px solid #000">{{data.baseInfo.BALANCE_TIME}}</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td
          width="10%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >应收金额</td>
        <td
          width="10%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        >{{ data.baseInfo.SALES_PART_AMOUNT}}</td>
        <td
          width="8%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >全单优惠</td>
        <td
          width="8%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        ></td>
        <td
          width="7%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >其他费1</td>
        <td
          width="7%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        >0.00</td>
        <td
          width="10%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >其他费2</td>
        <td
          width="10%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        >0.00</td>
        <td
          width="15%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >其他费3</td>
        <td
          width="15%"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        >0.00</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">代金券</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="right">0.00</td>
        <td
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >合&nbsp;&nbsp;计</td>
        <td
          colspan="3"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="right"
        >{{ data.baseInfo.PART_AMOUNT ? parseFloat(data.baseInfo.PART_AMOUNT).toFixed(2) : '0.00' }}</td>
        <td
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >已&nbsp;&nbsp;收</td>
        <td colspan="3" style="border-bottom:1px solid #000" align="right">0.00</td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">金额大写</td>
        <td
          colspan="5"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
        >{{ data.baseInfo.PART_AMOUNT ? bigMoney : bigMoney }}</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">合计优惠</td>
        <td colspan="3" style="border-bottom:1px solid #000"></td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td
          rowspan="2"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
          align="center"
        >会员卡号</td>
        <td
          rowspan="2"
          colspan="5"
          style="border-bottom:1px solid #000;border-right:1px solid #000;"
        ></td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">刷卡消费</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;"></td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">卡内余额</td>
        <td style="border-bottom:1px solid #000"></td>
      </tr>
      <tr style="font-size:12px;height:30px">
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">本次积分</td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;"></td>
        <td style="border-bottom:1px solid #000;border-right:1px solid #000;" align="center">积分余额</td>
        <td style="border-bottom:1px solid #000"></td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="right" height="26" width="10%">地址：</td>
        <td width="50%">{{ data.baseInfo.ADDRESS }}</td>
        <td align="right" width="10%">开户：</td>
        <td>{{ data.baseInfo.BANK }}</td>
      </tr>
      <tr>
        <td align="right" height="26">邮编：</td>
        <td>{{ data.baseInfo.ZIP_CODE }}</td>
        <td align="right">账号：</td>
        <td>{{ data.baseInfo.BANK_ACCOUNT }}</td>
      </tr>
      <tr>
        <td align="right" height="26">电话：</td>
        <td>{{ data.baseInfo.CONTACTOR_PHONE }}</td>
        <td align="right">户名：</td>
        <td>{{ data.baseInfo.BANK_NAME }}</td>
      </tr>
      <tr>
        <td align="right" height="26">销售员：</td>
        <td>{{ data.baseInfo.USER_NAME ? data.baseInfo.USER_NAME : data.baseInfo.USER_ID }}</td>
        <td align="right">税号：</td>
        <td>{{ data.baseInfo.TAX_NO }}</td>
      </tr>
      <tr>
        <td align="right" height="26">说明：</td>
        <td>{{ data.baseInfo.REMARK1 }}</td>
        <td align="right">&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>&nbsp;&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'templateSettlement',
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
      totalPriceM: '999',
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };
  },
  computed: {
    // totalPrice () {
    //     let jisuan = 0
    //     this.data.items.forEach(x => {
    //     jisuan =  parseFloat (x.xz) + jisuan
    //     })
    //     this.totalPriceM = jisuan
    //     return jisuan
    // },
    // 数字转大写方法
    bigMoney() {
      let money = 0.0;
      if (this.data.baseInfo.PART_AMOUNT == null) {
        money = 0.0;
      } else {
        money = this.data.baseInfo.PART_AMOUNT;
      }
      let cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'); // 汉字的数字
      let cnIntRadice = new Array('', '拾', '佰', '仟'); // 基本单位
      let cnIntUnits = new Array('', '万', '亿', '兆'); // 对应整数部分扩展单位
      let cnDecUnits = new Array('角', '分', '毫', '厘'); // 对应小数部分单位
      // let cnInteger = "整"; //整数金额时后面跟的字符
      let cnIntLast = '元'; // 整型完以后的单位
      let maxNum = 999999999999999.9999; // 最大处理的数字

      let IntegerNum; // 金额整数部分
      let DecimalNum; // 金额小数部分
      let ChineseStr = ''; // 输出的中文金额字符串
      let parts; // 分离金额后用的数组，预定义
      let n = '';
      let p = '';
      let q = '';
      let m = '';
      if (money == '') {
        return '';
      }
      money = parseFloat(money);
      if (money >= maxNum) {
        alert('超出最大处理数字');
        return '';
      }
      if (money == 0) {
        // ChineseStr = cnNums[0]+cnIntLast+cnInteger;
        ChineseStr = cnNums[0] + cnIntLast;
        // document.getElementById("show").value=ChineseStr;
        return ChineseStr;
      }
      money = money.toString(); // 转换为字符串
      if (money.indexOf('.') == -1) {
        IntegerNum = money;
        DecimalNum = '';
      } else {
        parts = money.split('.');
        IntegerNum = parts[0];
        DecimalNum = parts[1].substr(0, 4);
      }
      if (parseInt(IntegerNum, 10) > 0) {
        // 获取整型部分转换
        let zeroCount = 0;
        let IntLen = IntegerNum.length;
        for (let i = 0; i < IntLen; i++) {
          n = IntegerNum.substr(i, 1);
          p = IntLen - i - 1;
          q = p / 4;
          m = p % 4;
          if (n == '0') {
            zeroCount++;
          } else {
            if (zeroCount > 0) {
              ChineseStr += cnNums[0];
            }
            zeroCount = 0; // 归零
            ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
          }
          if (m == 0 && zeroCount < 4) {
            ChineseStr += cnIntUnits[q];
          }
        }
        ChineseStr += cnIntLast;
        // 整型部分处理完毕
      }
      if (DecimalNum != '') {
        // 小数部分
        let decLen = DecimalNum.length;
        for (let i = 0; i < decLen; i++) {
          n = DecimalNum.substr(i, 1);
          if (n != '0') {
            ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
          }
        }
      }
      if (ChineseStr == '') {
        // ChineseStr += cnNums[0]+cnIntLast+cnInteger;
        ChineseStr += cnNums[0] + cnIntLast;
      } /* else if( DecimalNum == '' ){
                ChineseStr += cnInteger;
                ChineseStr += cnInteger;
            } */
      return ChineseStr;
    }
    // totalPrice() {
    //   return this.data.items.reduce((prev, curr) => {
    //     return curr.ckdj * curr.ckdj + prev;
    //   }, 0);
    // }
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
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
