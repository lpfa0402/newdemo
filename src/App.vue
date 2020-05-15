<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import '@/assets/css/reset.css';
export default {
  name: 'App'
};
</script>

<style>
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
.line{
  height: 116px;
}
</style>
