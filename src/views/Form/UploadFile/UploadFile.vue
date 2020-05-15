<template>
  <div style="padding-bottom: 60px;">
    <h2>UploadCropper 图片上传</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <UploadFile
          @error="error()"
          @change="change()"
          :multiple="multiple"
          :containerStyle="containerStyle"
          :autoUpload="true"
          :disabled="disabled"
          :params="{ canshu: 'aaa' }"
          :fileSize="fileSize"
          :limit="limit"
          :isOnlyButton="isOnlyButton"
          :fileTypes="fileTypes"
          actionUrl="actionUrl"
          :initialValue="initialValue"
        >
          上传
        </UploadFile>
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
  name: 'UploadFileTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      initialValue: [
        {
          name: 'aaa',
          url:
            'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'
        }
      ],
      fileTypes: ['png', 'pdf'],
      isOnlyButton: false,
      limit: 1,
      fileSize: 5,
      disabled: false,
      containerStyle: {border: '1px solid #e55954'},
      multiple: false,
      AttributesData: [
        {
          parameter: 'actionUrl',
          explain: '上传的地址',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'initialValue',
          explain: '默认显示的文件',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fileTypes',
          explain: '限制上传附件的类型',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: 'jpg / png / pdf xls / xlsx / doc / docx / mp4 / rmvb'
        },
        {
          parameter: 'isOnlyButton',
          explain: '是否仅显示上传按钮',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'limit',
          explain: '支持上传附件的数量',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'fileSize',
          explain: '限制上传文件的大小，单位是M',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '5'
        },
        {
          parameter: 'params',
          explain: '上传时附带的额外参数',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'disabled',
          explain: '是否禁用',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'autoUpload',
          explain: '是否自动上传',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'containerStyle',
          explain: '承载按钮层容器的css样式',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'multiple',
          explain: '是否可批量上传',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        }
      ],
      EventsData: [
        {
          EventName: 'change',
          explain: '上传服务端成功的回调事件',
          Callback: '图片地址'
        },
        {
          EventName: 'error',
          explain: '上传服务端失败的回调事件',
          Callback: '错误对象'
        }
      ]
    };
  },
  methods: {
    change(val) {
      // 上传成功回调
      console.log(val);
    },
    error(val) {
      // 上传失败的回调
      console.log(val);
    }
  }
};
</script>
<style scoped>
.l_checked_wrapper {
  margin-top: 20px;
  padding: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.l_checked {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
