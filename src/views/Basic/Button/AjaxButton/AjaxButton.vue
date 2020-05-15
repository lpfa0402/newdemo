<template>
  <div style="padding-bottom: 60px;">
    <h2>AjaxButton 请求按钮</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <!-- 将@click绑定的ajax事件换成 :click绑定 -->
        <AjaxButton :disabled="false" :click="saveHandle" size="medium" type="primary">
          提交
        </AjaxButton>
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
  name: 'AjaxButtonTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      AttributesData: [
        {
          parameter: ':click',
          explain: '触发请求的绑定',
          type: 'Function',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'size',
          explain: '按钮的尺寸',
          type: 'String',
          must: 'false',
          OptionalValues: 'medium / small / mini',
          Default: 'mini'
        },
        {
          parameter: 'type',
          explain: '按钮的类型',
          type: 'String',
          must: 'false',
          OptionalValues: 'primary / success / warning / danger / info / text',
          Default: '——'
        },
        {
          parameter: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
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
