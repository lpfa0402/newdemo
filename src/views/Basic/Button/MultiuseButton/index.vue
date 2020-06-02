<template>
  <div style="padding-bottom: 60px;">
    <h2>MultiuseButton 防止重复提交按钮aaa</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <!-- 将@click绑定的ajax事件换成 :click绑定 -->
        <MultiuseButton :disabled="false" :click="saveHandle" size="medium" type="primary">
          提交
        </MultiuseButton>
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
import '@/mock/AjaxButton.js';
import { reqPost } from '@/api';
import md from './README.md';
export default {
  name: 'MultiuseButtonTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      AttributesData: [
        {
          parameter: ':click',
          explain: '点击按钮触发的事件方法，用于实现 ajax 的防止重复提交 注意：是参数而不是事件',
          type: 'Function',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'divider',
          explain: '按钮前/后的分隔符',
          type: 'String',
          must: 'false',
          OptionalValues: 'before/afte',
          Default: '——'
        },
        {
          parameter: 'auth-list',
          explain: '权限数组，通过 authority 的混入，使用 this.auths 即可',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'auth-mark',
          explain: '控制该按钮权限的标识符，业务的 ajax 接口地址',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'containerStyle',
          explain: '按钮自定义的 css 样式',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        }
      ],
    };
  },
  methods: {
    // 异步发送Ajax请求
    async saveHandle() {
      await reqPost();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
