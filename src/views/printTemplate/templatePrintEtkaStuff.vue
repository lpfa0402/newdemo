<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <h2 style="text-align: center;">长春通立汽车服务有限责任公司</h2>
    <h2 style="text-align: center;">销售发货清单</h2>
    <!-- 顶部信息 -->
    <div style="padding: 0 10px;">
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.propsB">委托书号：</div>
          <div>{{ data.RO_NO }}</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.propsB">车牌号：</div>
          <div>{{ data.LICENSE }}</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.propsB">底盘号：</div>
          <div>{{ data.VIN }}</div>
        </div>
      </div>
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.propsB">服务顾问：</div>
          <div>{{ data.SERVICE_ADVISOR }}</div>
        </div>
        <div :style="styles.topCell"></div>
        <div :style="styles.topCell">
          <div :style="styles.propsB">报价时间：</div>
          <div>{{ nowTime }}</div>
        </div>
      </div>
    </div>
    <!-- table主表 -->
    <table class="tc bor">
      <tr style="line-height: 40px">
        <th>序号</th>
        <th>备件号</th>
        <th>备件名称</th>
        <th>备件常用名称</th>
        <th>备件销售单价</th>
        <th>使用数量</th>
        <th>可用库存</th>
        <th>服务顾问意见</th>
      </tr>
      <tr v-for="(item, index) in data.list" :key="'tb' + index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.PART_NO }}</td>
        <td>{{ item.PART_NAME }}</td>
        <td>{{ item.PART_DESCRIPTION }}</td>
        <td>{{ item.COST_SALES_PRICE }}</td>
        <td>{{ item.QTY }}</td>
        <td>{{ item.STOCK_QUANTITY }}</td>
        <td></td>
      </tr>
      <tr>
        <td>合计</td>
        <td></td>
        <td></td>
        <td></td>
        <td colspan="2">{{ sum }}</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <div style="padding: 10px 10px 40px 10px;">
      <div>说明：</div>
      <div>此报价只展示当日系统价格</div>
      <div>发货件会出现进口件和国产件替换的情况</div>
      <div>以上价格为含税价</div>
    </div>
    <div style="padding: 0 10px ;">
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.props">备件负责人：</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">维修技师：</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">服务顾问：</div>
        </div>
      </div>
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.props">日期：</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">日期：</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">日期：</div>
        </div>
      </div>
    </div>
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
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      styles: this.cteatePrintStyle(),
      sum: 0
    };
  },
  computed: {},
  created() {
    this.getSum();
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
    },
    cteatePrintStyle() {
      return {
        topCellWrap: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        },
        topCell: {
          width: '33.3%',
          display: 'flex',
          alignItems: 'center'
        },
        halfWidth: {
          width: '50%'
        },
        props: {
          width: '45%',
          fontWeight: 'bold'
        },
        propsB: {
          width: '35%',
          fontWeight: 'bold'
        }
      };
    },
    getSum() {
      let num = 0;
      this.data.list.map(x => (num += x.COST_SALES_PRICE * x.QTY));
      this.sum = num;
    }
  }
};
</script>

<style scoped>
.a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
