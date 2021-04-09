<!--
 * @Author: Lpf
 * @Date: 2021-03-02 16:54:41
 * @LastEditTime: 2021-04-09 15:07:18
 * @Description: 
-->
<template>
  <div style="padding-bottom: 60px;">
    <h2>多级表格勾选联动</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <LinkageTable
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="show">
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="show ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="show = !show">{{show ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExportFileTest',
  data () {
    return {
      disabled: false,
      show: false,
    };
  },
  methods: {
    
  }
};
</script>
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
