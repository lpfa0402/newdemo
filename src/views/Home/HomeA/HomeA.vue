<template>
  <div>
    {{ $t('test.val') }}
    <CountUp :endVal="643" :options="options"/>
  </div>
</template>
<script>
export default {
  name: 'homeA',
  data() {
    return {
      options: {
        startVal: 1,
        decimals: 2
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
