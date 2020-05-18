<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <h2 style="text-align: center;">销售发货清单</h2>
    <!-- 顶部信息 -->
    <div style="padding: 0 10px;">
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.propsB">发货清单号</div>
          <div>1094826485</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">销售订单号</div>
          <div>1094826485</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">建立人</div>
          <div>ADMIN</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">建立时间</div>
          <div>2019-05-14</div>
        </div>
      </div>
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.propsB">总金额(含税)</div>
          <div>1305.38</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">客户号</div>
          <div>0075580200</div>
        </div>
        <div :style="{ ...styles.topCell, width: '50%' }">
          <div :style="{ ...styles.props, width: '22.5%' }">客户名称</div>
          <div>长春通力汽车服务有限公司</div>
        </div>
      </div>
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="styles.topCell">
          <div :style="styles.propsB">发货工厂</div>
          <div>001</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">所属中转库</div>
          <div>0103</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">发运方式</div>
          <div>暂无</div>
        </div>
        <div :style="styles.topCell">
          <div :style="styles.props">仓库号</div>
          <div>003</div>
        </div>
      </div>
      <div class="fs14" :style="styles.topCellWrap">
        <div :style="{ ...styles.topCell, width: '50%' }">
          <div :style="{ ...styles.props, width: '22.5%' }">发运点</div>
          <div>00001 一汽大众备件中心库发货点</div>
        </div>
      </div>
    </div>
    <!-- table主表 -->
    <table class="tc bor">
      <tr style="line-height: 40px">
        <th>备件代码</th>
        <th>备件名称</th>
        <th>数量</th>
        <th>架区</th>
        <th>库位</th>
        <th>包装数</th>
        <th>单价(不含税)</th>
        <th>项号</th>
      </tr>
      <tr>
        <td>L8WO 823 029 A</td>
        <td>前舱盖</td>
        <td>1.0</td>
        <td>201</td>
        <td>A01A</td>
        <td>1.0</td>
        <td>4560.93</td>
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
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
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
      return {
        topCellWrap: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        },
        topCell: {
          width: '25%',
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
          width: '50%',
          fontWeight: 'bold'
        }
      };
    }
  }
};
</script>
