<template>
  <div style="padding-bottom: 60px;">
    <h2>Spin 区域Loading</h2>
    <div class="cod_wrapper" style="text-align: center;">
      <Spin :spinning="loading" tip="Loading..." :containerStyle="containerStyle">
        <div style="width: 100%; height: 60px; line-height: 60px;">需要 Loading 的区域</div>
      </Spin>
      <el-button @click="loading = !loading">切换状态</el-button>
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
  name: 'SpinTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      loading: true,
      containerStyle: {
        border: '#e55954 1px solid',
        marginTop: '10px'

      },
      AttributesData: [
        {
          parameter: 'spinning',
          explain: '是否为加载中状态',
          type: 'Boolean',
          must: 'true',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'tip',
          explain: '自定义描述文案',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'containerStyle',
          explain: '外层容器的 style 样式，此样式会在加载过后被移除',
          type: 'Object',
          must: 'false',
          OptionalValues: 'css样式',
          Default: '——'
        },
        {
          parameter: 'height',
          explain: '设置 table 组件的高度，如果不设置，为自适应屏幕高度，如果值是 auto，高度随着内容递增',
          type: 'Number/String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maxHeight',
          explain: '设置 table 最大高度,与height一起使用时失效',
          type: 'Number/String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        }
      ],
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
