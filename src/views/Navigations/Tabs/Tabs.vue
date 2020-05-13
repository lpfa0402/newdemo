<template>
  <div style="padding-bottom: 60px;">
    <h2>LazyLoadTabs 标签页</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <LazyLoadTabs
          v-model="activeName"
          :type="type"
          :position="position"
          :destroyOnClose="destroyOnClose"
          :tabMenus="menus"
          @tab-click="TabClick"
          @input="ckinput"
        />
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
          min-width="100px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="60px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="60px"
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
        tabMenus Attributes
      </div>
      <el-table
        :data="tabMenusAttributesData"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="60px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="60px"
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
  name: 'Tabs',
  components: {
    md
  },
  data() {
    return {
      show: false,
      activeName: '测试页A',
      menus: [
        {
          title: '测试页A',
          path: 'Navigations/Tabs/TabsPage/TabsPageA', // 展示文件的路径
          params: {
            type: 1,
            canshu: '666'
          }
        },
        {
          title: '测试页B',
          path: 'Navigations/Tabs/TabsPage/TabsPageB',
          disabled: true,
          params: {
            type: 2
          }
        },
        {
          title: '测试页C',
          path: 'Navigations/Tabs/TabsPage/TabsPageC',
          params: {
            type: 3,
            canshu: '777'
          },
          on: {
            myCallback: list => {
              console.log('list--', JSON.stringify(list));
            },
            myCallbackB: list => {
              console.log('list--', JSON.stringify(list));
            }
          }
        }
      ],
      type: null,
      position: null,
      destroyOnClose: false,
      AttributesData: [
        {
          parameter: 'value / v-model',
          explain: '默认选中展示的选项卡',
          type: 'String',
          must: 'false',
          OptionalValues: '选项卡的title',
          Default: '第一个选项卡的title'
        },
        {
          parameter: 'type',
          explain: '选项卡风格类型',
          type: 'String',
          must: 'false',
          OptionalValues: 'card / border-card',
          Default: '——'
        },
        {
          parameter: 'position',
          explain: '选项卡所在位置',
          type: 'String',
          must: 'false',
          OptionalValues: 'top / right / bottom / left',
          Default: 'top'
        },
        {
          parameter: 'destroyOnClose',
          explain: '隐藏状态的选项卡是否销毁子组件',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        }
      ],
      tabMenusAttributesData: [
        {
          parameter: 'title',
          explain: '选项卡标题',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'path',
          explain: '选项卡路径',
          type: 'String',
          must: 'true',
          OptionalValues: '展示文件的路径, 默认为pages文件下的路径',
          Default: '——  '
        },
        {
          parameter: 'disabled',
          explain: '是否禁用该选项卡',
          type: 'Boolen',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'params',
          explain: '给组件传递的参数',
          type: 'Object',
          must: 'false',
          OptionalValues: '放置参数的对象',
          Default: '——'
        },
        {
          parameter: 'on',
          explain: '给组件传递的自定义事件',
          type: 'Object',
          must: 'false',
          OptionalValues: '自定义的事件',
          Default: '——'
        },
      ],
      EventsData: [
        {
          EventName: 'tab-click',
          explain: 'tab选中时触发',
          Callback: '选中的标签 tab 实例'
        },
        {
          EventName: 'input',
          explain: 'tab选中时触发',
          Callback: '选中的标签的title'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 触发tab-click
    TabClick(e) {
      console.log(e);
    },
    // 触发@input
    ckinput(e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
