<template>
  <!-- 打印结算单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div style="clear:both;margin-bottom:5px;">
      <div style="text-align:center;width:100%;">
        <!-- <h1>上海绿地</h1> -->
        <h3>派委托书</h3>
      </div>
      <div style="text-align:right;font-size:14px;width:100%;">
        <span>打印时间：</span>
        <span>{{ printTime }}</span>
      </div>
    </div>
    <hr style="border:2px solid #000" />
    <table
      cellspacing="0"
      width="100%"
      style="border-collapse: collapse; border-spacing: 0;box-sizing:border;"
    >
      <tr style="font-size:12px;height:30px;line-height:30px">
        <td style="width:10%;text-align:right">委托书号</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.RO_NO }}</td>
        <td style="width:10%;text-align:right">车牌号</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.LICENSE }}</td>
        <td style="width:15%;text-align:right">车身号码(vin)</td>
        <td style="width:25%;text-align:right">{{ data.repairOrderInfo.VIN }}</td>
      </tr>
      <tr style="font-size:12px;height:30px;line-height:30px">
        <td style="width:10%;text-align:right">车主</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.OWNER_NAME }}</td>
        <td style="width:10%;text-align:right">车型</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.MODEL_NAME }}</td>
        <td style="width:15%;text-align:right">服务工程师</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.SERVICE_ADVISOR }}</td>
      </tr>
      <tr style="font-size:12px;height:30px;line-height:30px">
        <td style="width:10%;text-align:right">接待日期</td>
        <td style="width:25%;text-align:center">{{ data.repairOrderInfo.CREATED_AT }}</td>
        <td style="width:10%;text-align:right">发动机号</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.ENGINE_NO }}</td>
        <td style="width:15%;text-align:right">进厂里程</td>
        <td style="width:20%;text-align:center">{{ data.repairOrderInfo.IN_MILEAGE }}</td>
      </tr>
      <tr style="font-size:12px;height:30px;line-height:30px">
        <td style="width:10%;text-align:right">预交车日期</td>
        <td style="width:25%;text-align:center">{{ data.repairOrderInfo.END_TIME_SUPPOSED }}</td>
        <td style="width:10%;text-align:right"></td>
        <td style="width:25%;text-align:right"></td>
      </tr>
    </table>

    <hr style="border:2px solid #000" />
    <div style="width:98%;margin:10px auto">
      <table
        cellspacing="0"
        width="100%"
        style="border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
      >
        <thead>
          <tr style="font-size:12px;height:30px;line-height:30px;font-weight:blod;">
            <th
              style="width:8%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >序号</th>
            <th
              style="width:15%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >技师</th>
            <th
              style="width:15%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >项目代码</th>
            <th
              style="width:20%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >项目名称</th>
            <th
              style="width:12%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >派工工时</th>
            <th
              style="width:15%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >收费区分</th>
            <th style="width:15%;text-align:center;border-bottom:1px solid #000;">备注</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data.repairLabour"
            :key="'L' + index"
            style="font-size:12px;height:30px;line-height:30px"
          >
            <td
              style="width:8%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >{{ index + 1 }}</td>
            <td
              style="width:15%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >{{ item.TECHNICIAN }}</td>
            <td
              style="width:15%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >{{ item.LABOUR_CODE }}</td>
            <td
              style="width:20%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >{{ item.LABOUR_NAME }}</td>
            <td
              style="width:12%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >{{ item.ASSIGN_LABOUR_HOUR }}</td>
            <td
              style="width:15%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
            >{{ item.CHARGE_PARTITION_CODE }}</td>
            <td style="width:15%;text-align:center;border-bottom:1px solid #000;">{{ item.REMARK }}</td>
          </tr>
        </tbody>
      </table>
      <div style="clear:both;font-size:14px;">
        <div
          style="width:25%;text-align:center;float:left;height:50px;margin-bottom:5px;line-height:50px"
        >技师签名：</div>
        <div
          style="width:25%;text-align:center;float:left;height:50px;margin-bottom:5px;line-height:50px"
        >完工签认：</div>
        <div
          style="width:25%;text-align:center;float:left;height:50px;margin-bottom:5px;line-height:50px"
        >质检员：</div>
        <div
          style="width:25%;text-align:center;float:left;line-height:50px;margin-bottom:5px;"
        >洗车工签名：</div>
      </div>
      <div v-show="data.payment">
        <table
          cellspacing="0"
          width="100%"
          style="border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
        >
          <thead>
            <tr style="font-size:12px;height:30px;line-height:30px;font-weight:blod;">
              <th
                style="width:25%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
              >序号</th>
              <th
                style="width:25%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
              >配件代码</th>
              <th
                style="width:25%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
              >配件名称</th>
              <th style="width:25%;text-align:center;border-bottom:1px solid #000;">数量</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in data.repairPart"
              :key="'P' + index"
              style="font-size:12px;height:30px;line-height:30px"
            >
              <td
                style="width:25%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
              >{{ index + 1 }}</td>
              <td
                style="width:25%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
              >{{ item.PART_NO }}</td>
              <td
                style="width:25%;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000;"
              >{{ item.PART_NAME }}</td>
              <td
                style="width:25%;text-align:center;border-bottom:1px solid #000;"
              >{{ item.PART_QUANTITY }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr style="border:2px solid #000" />
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
<script>
import moment from 'moment';
import QRcode from 'qrcode';
export default {
  name: 'templateWorkOrder',
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
      nowTime: moment().format('YYYY/MM/DD'),
      printTime: moment().format('YYYY-MM-DD hh:mm:ss')
    };
  },
  computed: {
    totalPrice() {
      return '';
      // return this.data.items.reduce((prev, curr) => {
      //   return curr.ckdj * curr.ckdj + prev;
      // }, 0);
    }
  },
  mounted() {
    console.log(this.data, 'data---');
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
    // this.getqrcode();
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    },
    async getqrcode() {
      const setUrl = await QRcode.toDataURL('http://www.baidu.com');
      this.srcUrl = setUrl;
      console.log(this.srcUrl, 'srcUrl');
    }
  }
};
</script>
