<template>
  <div style="padding-bottom: 60px;">
    <h2>table 表头搜索</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <TopFilter
          :list="topFilterInit"
          :cols="3"
          :rows='1'
          :disabled="false"
          :collapse="true"
          :isSubmitBtn="true"
          @filterChange="changeHandle"
          @resetChange="resetChange"
          @onCollapse="onCollapse"
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
        List Attributes
      </div>
      <el-table
        :data="ListAttributesData"
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
        List Options Attributes
      </div>
      <el-table
        :data="ListOptionsAttributesData"
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
        List LabelOptions Attributes
      </div>
      <el-table
        :data="ListLabelOptionsAttributesData"
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
        List DescOptions Attributes
      </div>
      <el-table
        :data="ListDescOptionsAttributesData"
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
        SEARCH_HELPER|SELECT|MULTIPLE_SELECT 配置项
      </div>
      <el-table
        :data="peizhiAttributesData"
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
  name: 'TopFilterTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      topFilterInit: this.createTopFilters(),
      AttributesData: [
        {
          parameter: 'list',
          explain: '头部筛选条件数组，支持动态赋值(数据数组必须是新的引用)',
          type: 'Array',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'cols',
          explain: '每行显示多小列 注意：只能是被 24 整除的值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '3'
        },
        {
          parameter: 'labelWidth',
          explain: 'label 标签的宽度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '80'
        },
        {
          parameter: 'collapse',
          explain: '是否显示展开/收起按钮',
          type: 'Boolean',
          must: 'false',
          OptionalValues: '——',
          Default: 'true'
        },
        {
          parameter: 'rows',
          explain: '收起状态显示行数',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'disabled',
          explain: '是否禁用搜索按钮',
          type: 'Number',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'isSubmitBtn',
          explain: '是否显示搜索/重置按钮',
          type: 'Number',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
      ],
      ListAttributesData: [
        {
          parameter: 'type',
          explain: '类型',
          type: 'String',
          must: 'true',
          OptionalValues: 'INPUT/INPUT_NUMBER/RANGE_INPUT_NUMBER/INPUT_TREE/SELECT/MULTIPLE_SELECT/CHECKBOX/MULTIPLE_CHECKBOX/DATE/RANGE_DATE/SEARCH_HELPER/SEARCH_HELPER_WEB/TEXT_AREA/INPUT_CASCADER/RADIO',
          Default: '——'
        },
        {
          parameter: 'label',
          explain: '标题，最好不超过 6 个字',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'labelWidth',
          explain: '表单域标签的的宽度，字符串类型，需要加单位(px)',
          type: 'String',
          must: 'fasle',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fieldName',
          explain: '字段名称',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'placeholder',
          explain: '提示文字',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'initialValue',
          explain: '默认值',
          type: 'String/Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'style',
          explain: '表单元素的 style',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'hidden',
          explain: '是否隐藏该表单项',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / fasle',
          Default: 'fasle'
        },
        {
          parameter: 'filterable',
          explain: '是否开启下拉框的拼音头快速检索功能',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / fasle',
          Default: 'fasle'
        },
        {
          parameter: 'unitRender',
          explain: '输入框的后置单位的渲染方法, 返回值是 JSX 节点，只对 INPUT 有效',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'readonly',
          explain: '是否只读',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'disabled',
          explain: '禁用',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'defaultExpandAll',
          explain: '是否默认展开所有节点',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'limit',
          explain: '最多可以选择的项目数，只对 MULTIPLE_SELECT/MULTIPLE_CHECKBOX 有效',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'clearable',
          explain: '是否启用右侧清除按钮，只对 SELECT/MULTIPLE_SELECT 有效',
          type: 'Boolean',
          must: 'false',
          OptionalValues: '——',
          Default: 'true'
        },
        {
          parameter: 'onFocus',
          explain: '输入框获得焦点的事件',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'rows',
          explain: '输入框行数，只对 TEXT_AREA 有效',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '2'
        },
        {
          parameter: 'maxlength',
          explain: '大输入长度，只对 TEXT_AREA 有效',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '100'
        },
        {
          parameter: 'dateType',
          explain: '日期控件的类型，只对 DATE 和 RANGE_DATE 生效',
          type: 'String',
          must: 'false',
          OptionalValues: 'date/datetime/exactdate/week/quarter/month/daterange/datetimerange/exactdaterange/monthrange',
          Default: '——'
        },
        {
          parameter: 'minDateTime',
          explain: '最小日期，小于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maxDateTime',
          explain: '最大日期，大于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maxDateTime',
          explain: '最大日期，大于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'change',
          explain: 'checkbox 或 select 值变化的回调',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'onInput',
          explain: 'INPUT 类型的对应的 input 事件',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'itemList',
          explain: '下拉框(SELECT/MULTIPLE_SELECT)的数据',
          type: 'Array',
          must: 'true',
          OptionalValues: "[{text: '', value: ''}]",
          Default: '——'
        },
        {
          parameter: 'rules',
          explain: '表单验证规则',
          type: 'Array',
          must: 'false',
          OptionalValues: "{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]",
          Default: '——'
        },
        {
          parameter: 'render',
          explain: '表单元素的渲染函数，返回值是 JSX 类型节点',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ],
      ListOptionsAttributesData: [
        {
          parameter: 'trueValue',
          explain: 'CHECKBOX 选中后的值',
          type: 'String/Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'falseValue',
          explain: 'CHECKBOX 消选中后的值',
          type: 'String/Number',
          must: 'false',
          OptionalValues: '——',
          Default: '0'
        },
        {
          parameter: 'titles',
          explain: '级联选择器的标题，数组元素为字符串类型',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '0'
        },
      ],
      ListLabelOptionsAttributesData: [
        {
          parameter: 'fieldName',
          explain: '字段名称 key',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'initialValue',
          explain: '默认值',
          type: 'String/Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'itemList',
          explain: '下拉框(SELECT)的数据',
          type: 'Array',
          must: 'false',
          OptionalValues: "[{text: '', value: ''}]",
          Default: '——'
        },
        {
          parameter: 'style',
          explain: '单元素的 style',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'disabled',
          explain: '禁用',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'change',
          explain: 'heckbox 或 select 值变化的回调',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ],
      ListDescOptionsAttributesData: [
        {
          parameter: 'isTooltip',
          explain: '是否以 Tooltip 形式显示描述信息',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / fasle',
          Default: 'fasle'
        },
        {
          parameter: 'style',
          explain: '描述信息容器的 style',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'content',
          explain: '描述信息内容',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ],
      peizhiAttributesData: [
        {
          parameter: 'fetchApi',
          explain: '搜索帮助的接口函数',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'params',
          explain: '接口的默认参数',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'datakey',
          explain: "服务端响应数据的数组列表的 key，支持路径操作('step1.step2.items')，不指定表示 res.data 就是数组数据",
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'valueKey',
          explain: '数据值的字段名',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'textKey',
          explain: '数据文本的字段名',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ],
      EventsData: [
        {
          EventName: 'filterChange',
          explain: '点击搜索按钮触发的事件',
          Callback: '搜索条件对象'
        },
        {
          EventName: 'resetChange',
          explain: '点击重置按钮触发的事件',
          Callback: '搜索条件对象'
        },
        {
          EventName: 'onCollapse',
          explain: '展开-收起时的回调函数,状态变化时触发',
          Callback: '当前状态'
        },
        {
          EventName: 'SUBMIT_FORM',
          explain: '获取所有表单控件数据的集合',
          Callback: '表单数据'
        },
        {
          EventName: 'RESET_FORM',
          explain: '重置表单控件',
          Callback: '——'
        },
        {
          EventName: 'GET_FORM_DATA',
          explain: '异步函数，获取表单数据',
          Callback: '数组 [err, formData]'
        },
      ]
    };
  },
  methods: {
    createTopFilters() {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'title',
          placeholder: '请输入标题名称...',
          initialValue: '',
          filterable: false,
          style: { width: '200px' },
          rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
        },
        {
          type: 'SELECT',
          label: '所属分类',
          fieldName: 'cid',
          placeholder: '所属分类',
          itemList: [{ text: '热点', value: '1' }, { text: '资讯', value: '2' }],
          rules: [{ required: true, message: '请选择所属分类', trigger: 'change' }]
        }
      ];
    },
    changeHandle(val){
      console.log('搜索的参数：', val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
