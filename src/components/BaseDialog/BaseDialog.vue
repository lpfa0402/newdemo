<script>
export default {
  name: 'BaseDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '60%'
    },
    top: {
      type: String,
      default: '10vh'
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    footerHeight: {
      type: [Number, String],
      default: 53
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isVisible: this.visible,
      fullscreen: false
    };
  },
  computed: {
    isShowDialog() {
      return this.destroyOnClose ? this.isVisible : true;
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.isVisible = val;
      } else {
        setTimeout(() => {
          this.isVisible = false;
          this.fullscreen = false;
        }, 300);
      }
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
    handleClick(e) {
      e.stopPropagation();
      this.fullscreen = !this.fullscreen;
    },
    createStyles(slots) {
      let hdHeight = '76px';
      let ftHeight = Object.keys(slots).includes('footer')
        ? `${this.footerHeight}px`
        : '0px';
      let dialogBodyHeight = this.fullscreen
        ? { height: `calc(100vh - ${ftHeight} - ${hdHeight})` }
        : {
            maxHeight: `calc(100vh - ${this.top} - ${this.top} - ${ftHeight} - ${hdHeight})`
          };
      return {
        overflowY: 'auto',
        minHeight: '150px',
        ...dialogBodyHeight
      };
    }
  },
  render() {
    const {
      closable,
      maskClosable,
      containerStyle,
      $props,
      $attrs,
      $listeners,
      $slots
    } = this;
    const wrapProps = {
      key: 'dialog',
      props: {
        ...$props,
        appendToBody: true,
        showClose: closable,
        closeOnClickModal: maskClosable,
        fullscreen: this.fullscreen,
        beforeClose: this.close,
        destroyOnClose: false
      },
      attrs: { ...$attrs },
      on: { ...$listeners }
    };
    return this.isShowDialog ? (
      <el-dialog class='base-dialog' {...wrapProps}>
        <span
          key='fullscreen'
          class='fullscreen-btn'
          onClick={this.handleClick}
        >
          <i class='el-icon-full-screen' />
        </span>
        {Object.keys($slots).map(name => (
          <section
            key={name}
            slot={name}
            style={name === 'default' ? this.createStyles($slots) : null}
          >
            <div class='container' style={containerStyle}>
              {$slots[name]}
            </div>
          </section>
        ))}
      </el-dialog>
    ) : null;
  }
};
</script>

<style scoped>
.fullscreen-btn {
  position: absolute;
  right: 42px;
  top: 16px;
  padding: 5px;
  line-height: 1;
  cursor: pointer;
}
</style>
