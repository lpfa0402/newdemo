<template>
  <div style="padding-bottom: 60px;">
    <h2>BreakSpace 分隔符</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <BreakSpace
          :IconClass="IconClass"
          :contentPosition="contentPosition"
          :labelStyle="labelStyle"
          :containerStyle="containerStyle"
          :label="label"
        />
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
  name: 'BreakSpaceTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      label: '标题',
      containerStyle: {border: '1px solid #e55954'},
      labelStyle: {color: '#e55954'},
      contentPosition: 'left',
      IconClass: null,
      AttributesData: [
        {
          parameter: 'label',
          explain: '分隔符的标题文本',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'containerStyle',
          explain: '分隔符外层容器的 css 样式',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'labelStyle',
          explain: '分隔符中文本的 css 样式',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'contentPosition',
          explain: '分隔符标题位置',
          type: 'String',
          must: 'false',
          OptionalValues: 'left / center / right',
          Default: 'left'
        },
        {
          parameter: 'IconClass',
          explain: '分隔符标题图标',
          type: 'String',
          must: 'false',
          OptionalValues: 'element图标库',
          Default: '——'
        }
      ],
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>
