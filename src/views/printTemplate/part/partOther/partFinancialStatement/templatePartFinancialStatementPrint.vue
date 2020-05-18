<template>
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;"></div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'templateDecorationPrint',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    },
    isPreview: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      checkListNumber: ''
    };
  },
  computed: {},
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
