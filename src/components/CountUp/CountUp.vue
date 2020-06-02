 <script>
import { CountUp } from 'countup.js';
import _ from 'lodash';

export default {
  name: 'CountUp',
  props: {
    endVal: {
      type: Number,
      required: true
    },
    delay: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    this.instance = null;
    return {};
  },
  watch: {
    endVal(value) {
      if (this.instance && _.isFunction(this.instance.update)) {
        this.instance.update(value);
      }
    }
  },
  mounted() {
    this.create();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    create() {
      this.instance = new CountUp(this.$refs.countup, this.endVal, this.options) || { error: true };
      if (this.instance.error) return;
      if (this.delay < 0) {
        return this.$emit('ready', this.instance, CountUp);
      }
      setTimeout(() => this.instance.start(() => this.$emit('ready', this.instance, CountUp)), this.delay);
    },
    printValue(value) {
      if (this.instance && _.isFunction(this.instance.printValue)) {
        return this.instance.printValue(value);
      }
    },
    start(callback) {
      if (this.instance && _.isFunction(this.instance.start)) {
        return this.instance.start(callback);
      }
    },
    pauseResume() {
      if (this.instance && _.isFunction(this.instance.pauseResume)) {
        return this.instance.pauseResume();
      }
    },
    reset() {
      if (this.instance && _.isFunction(this.instance.reset)) {
        return this.instance.reset();
      }
    },
    update(newEndVal) {
      if (this.instance && _.isFunction(this.instance.update)) {
        return this.instance.update(newEndVal);
      }
    },
    destroy() {
      this.instance = null;
    }
  },
  render() {
    return <span ref="countup" />;
  }
};

</script>
