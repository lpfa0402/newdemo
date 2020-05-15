<template>
  <div style="padding-bottom: 60px;">
    <h2>BaseDialog 请求按钮</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <el-button type="primary" @click="visible = true">打开弹窗</el-button>
        <BaseDialog
          customClass="class"
          @close="close"
          @open="open"
          @opened="opened"
          @closed="closed"
          :visible.sync="visible"
          :closable="closable"
          :destroyOnClose="destroyOnClose"
          :title="title"
          :width="width"
          :modal="modal"
          :lockScroll="lockScroll"
          :maskClosable="maskClosable"
          :containerStyle="containerStyle"
        >
          <div >Dialog Content</div>
        </BaseDialog>
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
  name: 'BaseDialogTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      visible: false,
      closable: true,
      destroyOnClose: false,
      title: '标题',
      width: '50%',
      modal: true,
      lockScroll: true,
      maskClosable: false,
      containerStyle: {
        border: '#e55954 1px solid'
      },
      AttributesData: [
        {
          parameter: 'visible',
          explain: '是否显示 Dialog',
          type: 'Boolean',
          must: 'true',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'destroyOnClose',
          explain: '关闭时销毁 Dialog 里的子元素',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'title',
          explain: 'Dialog 标题',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'width',
          explain: 'Dialog 的宽度',
          type: 'String',
          must: 'false',
          OptionalValues: '百分比 / px值',
          Default: '50%'
        },
        {
          parameter: 'modal',
          explain: '是否显示遮罩层',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'lockScroll',
          explain: '是否在 Dialog 出现时将 body 滚动锁定',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'customClass',
          explain: '给Dialog添加自定义类名',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'containerStyle',
          explain: '对话框外层容器的 style',
          type: 'Object',
          must: 'false',
          OptionalValues: 'style样式',
          Default: '——'
        },
        {
          parameter: 'maskClosable',
          explain: '是否可以通过点击 modal 关闭 Dialog',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        }
      ],
      EventsData: [
        {
          EventName: 'open',
          explain: 'Dialog打开事件',
          Callback: '——'
        },
        {
          EventName: 'opened',
          explain: 'Dialog打开动画结束事件',
          Callback: '——'
        },
        {
          EventName: 'close',
          explain: 'Dialog关闭事件',
          Callback: '——'
        },
        {
          EventName: 'closed',
          explain: 'Dialog关闭动画结束事件',
          Callback: '——'
        }
      ]
    };
  },
  methods: {
    open() {
      console.log('打开触发');
    },
    opened() {
      console.log('打开事件结束触发');
    },
    close() {
      console.log('关闭触发');
    },
    closed() {
      console.log('关闭事件结束触发');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nr {
  width: 100%;
  height: 500px;
}
.l_checked_wrapper {
  margin-top: 20px;
  padding: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.l_checked {
  margin-top: 20px;
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
