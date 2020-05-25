<template>
  <div style="padding-bottom: 60px;">
    <h2>tableColumns 表头参数</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FilterTable
          ref="table"
          :columns="columns"
          :dataSource="dataSource"
          :onColumnsChange="columns => this.columns = columns"
          height="150"
        >
        </FilterTable>
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
        searchHelper Attributes
      </div>
      <el-table
        :data="SearchAttributesData"
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
import '@/mock/tableData.js';
import { getTableDataList } from '@/api/Table.js';
import md from './README.md';
export default {
  name: 'SpinTest',
  components: {
    md
  },
  data() {
    this.table = null;
    return {
      show: false,
      columns: this.createTableColumns(),
      dataSource: [],
      AttributesData: [
        {
          parameter: 'title',
          explain: '表头文本',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'dataIndex',
          explain: '字段的key值',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'children',
          explain: '表格的多级表头，数组中元素的格式同外层',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'hidden',
          explain: '是否隐藏该列',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'width',
          explain: '列宽度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'minWidth',
          explain: '列最小宽度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fixed',
          explain: '列固定',
          type: 'String',
          must: 'false',
          OptionalValues: 'left/right—',
          Default: '——'
        },
        {
          parameter: 'align',
          explain: '单元格文字对齐方式',
          type: 'String',
          must: 'false',
          OptionalValues: 'left / center / right',
          Default: 'left'
        },
        {
          parameter: 'className',
          explain: '单元格追加的 class，用于修改某单元格列样式',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'showOverflowTooltip',
          explain: '内容过长被隐藏时显示tooltip',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'filter',
          explain: '是否支持表头过滤',
          type: 'Boolean',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'filterType',
          explain: '表头过滤类型,需要开启filter',
          type: 'String',
          must: 'false',
          OptionalValues: 'input/number/checkbox/radio/date-range',
          Default: '——'
        },
        {
          parameter: 'filterItems',
          explain: '过滤类型的列表数据，filterType值为checkbox使用',
          type: 'Array',
          must: 'false',
          OptionalValues: "[{text: '', value: ''}]",
          Default: '——'
        },
        {
          parameter: 'editable',
          explain: '该列单元格是否可编辑',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'editType',
          explain: '单元格的编辑类型,配合editable使用',
          type: 'String',
          must: 'false',
          OptionalValues: 'text / number / select / select-multiple / checkbox / date-picker',
          Default: '——'
        },
        {
          parameter: 'defaultEditable',
          explain: '该列单元格是否处于可编辑状态,配合editable使用',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'editRequired',
          explain: '校验单元格是否必填，表头标题会有红色星号提示',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'maxlength',
          explain: '最大输入长度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'max',
          explain: '最大值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'min',
          explain: '最小值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'editPattern',
          explain: '单元格内容格式校验',
          type: 'RegExp',
          must: 'false',
          OptionalValues: '正则',
          Default: '——'
        },
        {
          parameter: 'editItems',
          explain: 'select 或 select-multiple 类型单元格编辑下拉框的数据',
          type: 'Array',
          must: 'false',
          OptionalValues: "[{text: '', value: ''}]",
          Default: '——'
        },
        {
          parameter: 'disabled',
          explain: '指定可编辑单元格的禁用状态',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'render',
          explain: '单元格作用域插槽渲染函数，参数是当前单元格作用域对象，返回值是 JSX 类型节点',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'editDisableRender',
          explain: '可编辑的单元格在强制指定不可编辑状态下的渲染函数，参数是当前单元格作用域对象，返回值是JSX 类型节点',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'rules',
          explain: '提示文字',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'dictItems',
          explain: '数据字典的列表，用于翻译单元格字段',
          type: 'Array',
          must: 'false',
          OptionalValues: "[{text: 'xxx', value: 1}, ...]",
          Default: '——'
        },
        {
          parameter: 'dateFormat',
          explain: '指定日期格式，具体请参考element-ui date-picker 组件',
          type: 'String',
          must: 'false',
          OptionalValues: 'yyyy / MM / W / d / H / h / m / s / a',
          Default: '——'
        },
        {
          parameter: 'minDateTime',
          explain: ' dataIndex|最小日期，小于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maxDateTime',
          explain: ' dataIndex|最大日期，大于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'numberFormat',
          explain: '指定金融类数值格式，100,000,000',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'summation',
          explain: '当前列合计',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
        {
          parameter: 'precision',
          explain: '单元格或合计的数值精度，保留几位小数',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'summationDataIndex',
          explain: '服务端合计的字段名，通常和 dataIndex 一致，如果设置为服务端合计，那么在对应列单元格数据变化时，合计值不变',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'summationUnit',
          explain: '合计字段的单位',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'stopRowSelection',
          explain: '该列在单击时，是否阻止行选中行为',
          type: 'Boolean',
          must: 'true / false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'sorter',
          explain: '是否支持排序',
          type: 'Boolean',
          must: 'true / false',
          OptionalValues: '——',
          Default: '——'
        },
      ],
      SearchAttributesData: [
         {
          parameter: 'fetchApi',
          explain: '搜索帮助的接口函数',
          type: 'Function',
          must: 'true',
          OptionalValues: 'fetchApi: () => {},',
          Default: '——'
        },
        {
          parameter: 'params',
          explain: '接口的默认参数',
          type: 'Object',
          must: 'false',
          OptionalValues: '{key: val}',
          Default: '——'
        },
        {
          parameter: 'datakey',
          explain: "服务端响应数据的数组列表的key，支持路径操作('step1.step2.items')，不指定表示 res.data 就是数组数据",
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'supportInput',
          explain: '是否支持自定义的输入值',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
      ],
      EventsData: [
        {
          EventName: '',
          explain: '',
          Callback: ''
        },
      ]
    };
  },
  mounted(){
    this.reqdata();
    this.table = this.$refs.table.$refs.pageTable;
  },
  methods: {
    createTableColumns() {
      return [
        {
          title: '序号', // 表头
          dataIndex: 'index', // 字段key
          width: 70, // 表头宽度
          hidden: true, // 是否隐藏当前列
          sorter: true, // 是否支持排序
          render: props => { // 单元格渲染函数， 返回JSX类型节点
            return <span>{props.row.index + 1}</span>;
          }
        },
        {
          title: '操作',
          dataIndex: 'column-action',
          fixed: 'left',
          align: 'center',
          width: 120,
          render: (props, h) => {
            return (
              <div>
                <el-divider direction="vertical" />
                <el-button size="mini" type="text" onClick={() => this.delHandle(props.row)}>
                  删除
                </el-button>
                <el-divider direction="vertical" />
              </div>
            );
          }
        },
        {
          title: '表头A',
          dataIndex: 'DISCOUNT_MODE_CODE',
          align: 'center',
          children: [
            {
              title: '姓名',
              align: 'center',
              dataIndex: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              sorter: true,
              filter: true,
              filterType: 'input'
            }
          ]
        },
        {
          title: '表头B',
          dataIndex: 'DISCOUNT_MODE_NAME',
          sorter: true,
          filter: true,
          filterType: 'input',
          editable: true,
          editRequired: true,
          editPattern: /^[0-9]+$/,
          numberFormat: true,
        },
        {
          title: '附件类型',
          dataIndex: 'fileType',
          editType: 'select',
          editItems: [
            { text: '图片', value: '01' },
            { text: '附件', value: '02' }
          ],
          editDisableRender: props => {
            return <div onClick={() => {}}>{props.row.price}</div>;
          },
          editable: true,
          defaultEditable: true,
          rules: [{ required: true, message: '请选择附件类型', trigger: 'change' }]
        },
      ];
    },
    async reqdata () {
      let data = await getTableDataList();
      this.dataSource = data.list;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
