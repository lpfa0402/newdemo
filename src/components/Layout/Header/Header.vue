<template>
  <div class="l_header_wrapper">
    <span class="trigger fl" @click="clickHandler">
      <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" />
    </span>
    <!-- <div class="action fr">
      <slot name="action" />
    </div> -->
    <!-- <div class="menus">
      <slot name="menu" />
    </div> -->
    <div class="l_checked_wrapper">
      <el-dropdown @command="handleCommand" trigger="click" class="l_checked">
        <span class="el-dropdown-link">
          {{title}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="中文">中文</el-dropdown-item>
          <el-dropdown-item command="English">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  name: 'Header',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isCollapse: this.collapsed,
      title: '中文'
    };
  },
  methods: {
    clickHandler() {
      this.isCollapse = !this.isCollapse;
      this.toggle(this.isCollapse);
    },
    handleCommand(val) {
      this.title = val;
      if (val === '中文') {
        Cookies.set('language', 'zh');
        this.$i18n.locale = 'zh';
      } else {
        Cookies.set('language', 'en');
        this.$i18n.locale = 'en';
      }
    }
  }
};
</script>

<style scoped>
.l_header_wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.l_header_wrapper .trigger {
  display: inline-block;
  font-size: 24px;
  line-height: 54px;
  padding: 0 20px;
  cursor: pointer;
  transition: color 0.3s ease;
}
.l_header_wrapper .menus {
  margin: 0 200px 0 65px;
  padding-top: 20px;
}
.l_checked{
  cursor: pointer;
}
</style>
