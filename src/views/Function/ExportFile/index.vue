<template>
  <div style="padding-bottom: 60px;">
    <h2>JsonToExcel 文件导出</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <JsonToExcel
          @onError="onError"
          @onFinish="onFinish"
          :formatHandle="formatHandle"
          :initialValue="json_data"
          :fields="json_fields"
          :fileName="fileName"
          :disabled="disabled"
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
  name: 'ExportFileTest',
  components: {
    md
  },
  data () {
    return {
      disabled: false,
      show: false,
      fileName: '导出文件.xlsx',
      AttributesData: [
        {
          parameter: 'initialValue',
          explain: '表头数组',
          type: 'Object',
          must: 'true',
          OptionalValues: '导出表格的表头',
          Default: '——'
        },
        {
          parameter: 'fields',
          explain: '表单数据数组',
          type: 'Array',
          must: 'true',
          OptionalValues: '与表头对应的表格内容',
          Default: '——'
        },
        {
          parameter: 'fileName',
          explain: '导出文件名称',
          type: 'String',
          must: 'true',
          OptionalValues: '任意的文件名称.xlsx',
          Default: '——'
        },
        {
          parameter: 'disabled',
          explain: '是否禁用',
          type: 'boolean	',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        }
      ],
      EventsData: [
        {
          EventName: 'formatHandle',
          explain: '格式化数据的附加方法，通常用于处理字段翻译',
          Callback: '自定义处理数据的方法'
        },
        {
          EventName: 'onFinish',
          explain: '导出成功的事件',
          Callback: '自定义的触发方法'
        },
        {
          EventName: 'onError',
          explain: '导出失败的事件',
          Callback: '自定义的触发方法'
        }
      ],
      json_fields: {
        'Complete name': 'name',
        City: 'city',
        Telephone: 'phone.mobile',
        'Telephone 2': {
          field: 'phone.landline',
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: 'Tony Peña',
          city: 'New York',
          country: 'United States',
          birthdate: '1978-03-15',
          phone: {
            mobile: '15417543010',
            landline: '(541) 754-3010'
          }
        },
        {
          name: 'Thessaloniki',
          city: 'Athens',
          country: 'Greece',
          birthdate: '1987-11-23',
          phone: {
            mobile: '18552755071',
            landline: '(2741) 2621-244'
          }
        }
      ]
    };
  },
  methods: {
    formatHandle(val) {
      console.log(val);
      return val;
    },
    onFinish() {
      alert('导出成功触发');
    },
    onError() {
      alert('导出失败触发');
    },
  }
};
</script>
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
