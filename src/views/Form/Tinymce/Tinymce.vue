<template>
  <div>
    <Tinymce v-model="content" :height="300" actionUrl="/api/basedata/upload" />
  </div>
</template>
<script>
export default {
  name: 'TintmceTest',
  data() {
    return {
      content: 'hello world'
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.l_checked_wrapper {
  margin-top: 20px;
  padding: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.l_checked {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.l_checked_wrapper_fl {
  border: #dedede 1px solid;
  padding: 10px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
