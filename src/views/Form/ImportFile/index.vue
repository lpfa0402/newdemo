<template>
  <div style="padding-bottom: 60px;">
    <h2>ImportFile 附件上传</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <importFile
          title="导入aaa"
          actionUrl="/api/cluecenter/jk/clue/excelImportCheck"
          @close="closeHandler"
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
  name: 'ImpotrFileTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      fileList: [],
      AttributesData: [
        {
          parameter: 'title',
          explain: '上传的按钮文字',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'actionUrl',
          explain: '上传的地址',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        }
      ],
      EventsData: [
        {
          EventName: 'close',
          explain: '关闭的回调事件，参数是上传接口的数据',
          Callback: '——'
        }
      ]
    };
  },
  methods: {
    closeHandler(val) {
      this.form.fileList = val;
    }
  }
};
</script>
<style scoped></style>
