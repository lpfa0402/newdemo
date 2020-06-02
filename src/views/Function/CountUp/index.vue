<template>
  <div style="padding-bottom: 60px;">
    <h2>CountUp 数字滚动</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <el-button @click="printHandler">打印</el-button>
        <BasePrint ref="print" :data="printList" template="template1" />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="show">
              <md/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="show ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="show = !show">{{show ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
        Attributes
      </div>
      <el-table
        :data="AttributesData"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="60px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="60px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
        Events
      </div>
      <el-table
        :data="EventsData"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          width="160px"
          prop="EventName"
          label="事件名称">
        </el-table-column>
        <el-table-column
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          prop="Callback"
          label="回调参数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import md from './README.md';
export default {
  name: 'BasePrintTest',
  components: {
    md
  },
  data () {
    return {
      printList: {},
      show: false,
      AttributesData: [
        {
          parameter: 'data',
          explain: '打印的数据',
          type: 'Object',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'template',
          explain: '调用的打印模板路径',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '默认前缀为: @/pages/printTemplate/'
        },
        {
          parameter: 'printCopies',
          explain: '打印的份数',
          type: 'Number',
          must: 'fasle',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'direction',
          explain: '打印方向',
          type: 'Number',
          must: 'fasle',
          OptionalValues: 'vertical/horizontal',
          Default: '纵向打印vertical'
        },
        {
          parameter: 'alwaysPrint',
          explain: '是否按内容走纸(连续无分页打印)',
          type: 'Boolean',
          must: 'fasle',
          OptionalValues: 'true / false',
          Default: '默认是整张走纸 false'
        },
        {
          parameter: 'isPreview',
          explain: '是否显示浏览器预览,开发模板时需要显示，生产环境打印不需要显示预览',
          type: 'Boolean',
          must: 'fasle',
          OptionalValues: 'true / false',
          Default: 'false'
        },
      ],
      EventsData: [
        {
          EventName: 'EXCUTE_PRINT',
          explain: '开始执行打印',
          Callback: '——'
        }
      ],
    };
  },
  methods: {
    printHandler() {
      this.$refs.print.EXCUTE_PRINT();
    }
  }
};
</script>
<style scoped>
</style>
