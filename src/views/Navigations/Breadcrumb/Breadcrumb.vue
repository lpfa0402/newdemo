<template>
  <div style="padding-bottom: 60px;">
    <h2>LazyLoadTabs 标签页</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <Breadcrumb
          :separator="separator"
          :separatorClass="separatorClass"
          :replace="replace"
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
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import md from './README.md';
export default {
  name: 'Tabs',
  components: {
    Breadcrumb,
    md
  },
  data() {
    return {
      show: false,
      separator: '/',
      separatorClass: '',
      replace: false,
      AttributesData: [
        {
          parameter: 'separator',
          explain: '分隔符号',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '/'
        },
        {
          parameter: 'separatorClass',
          explain: '分隔符号使用icon图标,使用此参数，separator会失效',
          type: 'String',
          must: 'false',
          OptionalValues: 'icon图标',
          Default: '——'
        },
        {
          parameter: 'replace',
          explain: '使用此组件跳转时是否向 history 添加新记录',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / fasle',
          Default: 'fasle'
        }
      ],
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  font-size: 24px;
  font-weight: 400;
  color: #1f2f3d;
  padding: 20px;
}
.cod_wrapper{
  margin-top: 20px;
  padding-bottom: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.cod_top{
  padding: 24px;
  border-bottom: #dedede 1px solid;
}
.cod_bottom{
  width: 100%;
  overflow: hidden;
}
.cod_bottom_btn{
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
.cod_bottom_content{
  background-color: #384548;
}
.Attributes_wrapper{
  width: 100;
  margin-top: 10px;
  overflow: hidden;
}
.Attributes_title{
  width: 100%;
  font-size: 22px;
  color: #1f2f3d;
  padding: 20px;
}
</style>
