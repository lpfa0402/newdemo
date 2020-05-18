<template>
  <div style="padding-bottom: 60px;">
    <h2>Drawer 抽屉</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <el-button @click="visible = true">打开抽屉</el-button>
        <Drawer 
          :visible.sync="visible"
          :closable="closable"
          :destroyOnClose="destroyOnClose"
          :title="title"
          :position="position"
          :lockScroll="lockScroll"
          :maskClosable="maskClosable"
          :width="width"
          :maskStyle="maskStyle"
          :containerStyle="containerStyle"
          @open="open"
          @close="close"
          @afterVisibleChange="afterVisibleChangeHandle"
        >
          内容
        </Drawer>
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
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
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
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
        Events
      </div>
      <el-table
        :data="EventsData"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          width="160px"
          prop="EventName"
          label="事件名称">
        </el-table-column>
        <el-table-column
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          prop="Callback"
          label="回调参数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import md from './README.md';
export default {
  name: 'DrawerTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      visible: false,
      closable: true,
      destroyOnClose: false,
      title: '这是标题',
      position: 'right',
      lockScroll: true,
      maskClosable: true,
      width: 700,
      maskStyle: {
        backgroundColor: '#e55954'
      },
      containerStyle: {
        backgroundColor: '#e55954'
      },
      AttributesData: [
        {
          parameter: 'visible',
          explain: '抽屉组件',
          type: 'Boolean',
          must: 'true',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'closable',
          explain: '是否显示右上角的关闭按钮',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'destroyOnClose',
          explain: '关闭时销毁 Drawer 里的子元素',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'title',
          explain: '标题',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '标题'
        },
        {
          parameter: 'position',
          explain: '抽屉弹出的方向',
          type: 'String',
          must: 'false',
          OptionalValues: 'top / right / bottom / left',
          Default: 'right'
        },
        {
          parameter: 'lockScroll',
          explain: '显示抽屉时是否禁用了主体滚动',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'maskClosable',
          explain: '点击蒙层是否允许关闭',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'width',
          explain: '抽屉宽度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'height',
          explain: '高度，在 position 为 top 或 bottom 时使',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'zIndex',
          explain: '设置 Drawer 的 z-index',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maskStyle',
          explain: '遮罩的 style',
          type: 'Object',
          must: 'false',
          OptionalValues: 'css',
          Default: '——'
        },
        {
          parameter: 'containerStyle',
          explain: '对话框外层容器的 style',
          type: 'Object',
          must: 'false',
          OptionalValues: 'css',
          Default: '——'
        }
      ],
      EventsData: [
        {
          EventName: 'open',
          explain: '抽屉打开事件',
          Callback: '——'
        },
        {
          EventName: 'close',
          explain: '关闭事件',
          Callback: '——'
        },
        {
          EventName: 'afterVisibleChange',
          explain: '切换抽屉时动画结束后的事件',
          Callback: 'visible'
        },
      ],
    };
  },
  methods: {
    open() {
      console.log('打开');
    },
    close() {
      console.log('关闭');
    },
    afterVisibleChangeHandle(val) {
      console.log('当前显示状态：', val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
