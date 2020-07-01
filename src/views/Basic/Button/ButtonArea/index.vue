<template>
  <div style="padding-bottom: 60px;">
    <h2>ButtonArea 按钮容器</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <ButtonArea :containerStyle="{ paddingLeft: '80px' }" align="left">
          <el-button size="small" type="primary">到货确认</el-button>
          <el-button size="small">明细</el-button>
          <el-button size="small">发货单</el-button>
        </ButtonArea>
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
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
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
  </div>
</template>
<script>
import md from './README.md';
export default {
  name: 'ButtonAreaTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      AttributesData: [
        {
          parameter: 'containerStyle',
          explain: '承载按钮层容器的css 样式',
          type: 'Object',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'align',
          explain: '按钮的对齐方式',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: 'left'
        }
      ],
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>
