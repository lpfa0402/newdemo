```bash
<template>
  <BreakSpace
    :IconClass="IconClass"
    :contentPosition="contentPosition"
    :labelStyle="labelStyle"
    :containerStyle="containerStyle"
    :label="label"
  />
</template>
<script>
export default {
  name: 'BreakSpaceTest',
  data() {
    return {
      label: '标题',
      containerStyle: {},
      labelStyle: {},
      contentPosition: 'left',
      IconClass: null,
    };
  },
  methods: {}
}
```