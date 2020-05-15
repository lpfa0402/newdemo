<template>
  <div style="padding-bottom: 60px;">
    <h2>UploadCropper 图片上传</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <UploadCropper
          @error="conerror"
          @success="successHandler"
          :isFileName="true"
          :disabled="disabled"
          :titles="titles"
          :limit="limit"
          :isCalcHeight="isCalcHeight"
          :fixedSize="fixedSize"
          :initialValue="initialValue"
          actionUrl="UploadCropper"
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
  name: 'UploadCropperTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      initialValue: [
        {
          name: '图片',
          url:
            'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'
        }
      ],
      fixedSize: [1, 1],
      isCalcHeight: false,
      limit: 1,
      titles: ['标题一'],
      disabled: false,
      AttributesData: [
        {
          parameter: 'actionUrl',
          explain: '图片上传的地址',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'initialValue',
          explain: '默认显示的图片项式',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fixedSize',
          explain: '裁剪框的宽高比',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '[1, 1]'
        },
        {
          parameter: 'isCalcHeight',
          explain: '是否根据裁剪图片宽高比自动计算上传组件容器高度',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'limit',
          explain: '支持上传图片的数量',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'titles',
          explain: '图片对应的标题，与limit的数量保持一致',
          type: 'Array',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'disabled',
          explain: '是否禁用上传图片',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'isFileName',
          explain: '是否传入文件名到后台',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        }
      ],
      EventsData: [
        {
          EventName: 'success',
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
    successHandler(val) {
      console.log(val);
    },
    conerror(val) {
      console.log(val);
    }
  }
};
</script>
<style scoped></style>
