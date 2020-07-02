<template>
  <div style="padding-bottom: 60px;">
    <h2>OssUpload 分片上传</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <OssUpload v-model="ossUploadvalue"  :init="{fileTypes: ['*'],limit:1, root:'file/tianle/'}"   @getUrl="getUrl" />
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
        init 初始化参数配置
      </div>
      <el-table
        :data="AttributesDataB"
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
  name: 'OssUploadTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      ossUploadvalue:[
        {
          name:'文件名称',
          url:'地址'
        }
      ],
      AttributesData: [
        {
          parameter: 'v-model',
          explain: '文件回显，详情/编辑页面显示已经上传文件',
          type: 'Array',
          must: 'true',
          OptionalValues: "[{name:'文件名', url:'文件路径'}]",
          Default: '——'
        },
        {
          parameter: 'init',
          explain: '初始化上传文件配置',
          type: 'Object',
          must: 'true',
          OptionalValues: "{fileTypes: ['*'], limit:2, minSize:10, maxSize:0.01, partSize:1024 }",
          Default: '——'
        },
        {
          parameter: 'disabled',
          explain: '文件不可编辑',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
      ],
      AttributesDataB: [
        {
          parameter: 'fileTypes',
          explain: '上传文件类型，支持多个格式(用，分隔符)',
          type: 'Array',
          must: 'false',
          OptionalValues: "['pdf','jpg','png']",
          Default: 'false'
        },
        {
          parameter: 'limit',
          explain: '限制文件个数，',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'minSize',
          explain: '上传文件最小',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '0'
        },
        {
          parameter: 'maxSize',
          explain: '上传文件最大',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '5242880(5M)'
        },
        {
          parameter: 'partSize',
          explain: '分片上传 ,设置每片多少分割上传文件',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1024'
        },
        {
          parameter: 'root',
          explain: '上传文件层级目录，支持多层（XXX/XXX/XXX/）',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ],
      EventsData: [
        {
          EventName: '@getUrl',
          explain: '',
          Callback: "返回成功文件数据，格式数组[{name:'文件名', url:'文件路径'}]"
        }
      ]
    };
  },
  methods: {
    getUrl(val){
      console.log('返回上传成功文件', val);
    }
  }
};
</script>
<style scoped></style>
