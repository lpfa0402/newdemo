<template>
  <div style="padding-bottom: 60px;">
    <h2>table 表格</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FilterTable
          :tablekey="tablekey"
          :columns="columns"
          :dataSource="dataSource"
          :onColumnsChange="columns => this.columns = columns"
          :height="height"
          :maxHeight="maxHeight"
          :isSelectColumn="isSelectColumn"
          :selectionType="selectionType"
          :isToperInfo="isToperInfo"
          :isColumnFilter="isColumnFilter"
          :isExportExcel="isExportExcel"
          :isMemoryPagination="isMemoryPagination"
          exportFileName="导出文件名"
          :mergeCellMethod="mergeCellMethod"
          :onEnterEvent="onEnterEvent"
          :onRowSelectChange="onRowSelectChange"
          :onPageChange="onPageChange"
          :onSyncTableData="onSyncTableData"
          :onCalcExportData="onCalcExportData"
        >
          <template slot="controls">
            <el-button>controls插槽</el-button>
          </template>
        </FilterTable>
        <el-button @click="RefreshTable">刷新数据</el-button>
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
import '@/mock/tableData.js';
import { getTableDataList } from '@/api/Table.js';
import md from './README.md';
export default {
  name: 'SpinTest',
  components: {
    md
  },
  data() {
    return {
      show: false,
      columns: this.createTableColumns(),
      dataSource: [],
      height: 200,
      maxHeight: 300,
      isSelectColumn: true,
      selectionType: 'multiple',
      isToperInfo: true,
      isColumnFilter: true,
      isExportExcel: true,
      isMemoryPagination: true,
      tablekey: '',
      AttributesData: [
        {
          parameter: 'columns',
          explain: '表格的表头项',
          type: 'Array',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'dataSource',
          explain: '表格的内容,与fetchapi至少存在一个',
          type: 'Array',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fetchapi',
          explain: '表格的内容ajax请求数据接口，参数是筛选条件及分页信息组成的 json 对象',
          type: 'Function',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'onColumnsChange',
          explain: '数据变化时的回调，参数是 columns 数组',
          type: 'Function',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'isSelectColumn',
          explain: '是否显示可选择的列',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'selectionType',
          explain: 'table 行选中类型,多选或单选',
          type: 'String',
          must: 'false',
          OptionalValues: 'multiple / single',
          Default: 'multiple'
        },
        {
          parameter: 'isToperInfo',
          explain: '是否显示组件的基础信息',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'isColumnFilter',
          explain: '是否显示组件的列筛选排序',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'isPagination',
          explain: '是否显示分页，在 dataSource 的模式下不显示分页',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'isMemoryPagination',
          explain: 'dataSource模式的内存分页',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'isExportExcel',
          explain: '是否显示组件的导出功能',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'mergeCellMethod',
          explain: '合并行或列',
          type: 'Function',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'exportFileName',
          explain: '导出文件名',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '表格数据'
        },
      ],
      EventsData: [
        {
          EventName: 'onEnterEvent',
          explain: '单元格双击事件的监听函数',
          Callback: '当前单元格对应的行数据'
        },
        {
          EventName: 'onRowSelectChange',
          explain: '行选中状态变化时的回调',
          Callback: '当前选中行的数据数组'
        },
        {
          EventName: 'onPageChange',
          explain: '分页变化时的回调',
          Callback: '分页信息对象'
        },
        {
          EventName: 'onSyncTableData',
          explain: '同步 table 组件列表数据',
          Callback: '列表数据 / 是否为首次同步的新数据'
        },
        {
          EventName: 'onCalcExportData',
          explain: '计算处理导出数据的额外方法',
          Callback: '每一行的数据'
        },
      ]
    };
  },
  mounted(){
    this.reqdata();
  },
  methods: {
    createTableColumns() {
      return [
        {
          title: '序号',
          dataIndex: 'index',
          width: 70,
          hidden: true,
          sorter: true,
          render: props => {
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
          sorter: true,
          filter: true,
          filterType: 'input'
        },
        {
          title: '表头B',
          dataIndex: 'DISCOUNT_MODE_NAME',
          sorter: true,
          filter: true,
          filterType: 'input'
        }
      ];
    },
    delHandle(val){
      let that = this;
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.dataSource.splice(val.index, 1);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });        
      });
    },
    async reqdata () {
      let data = await getTableDataList();
      this.dataSource = data.list;
    },
    // row:当前行 column:当前列 rowIndex:当前行号 columnIndex:当前列号
    mergeCellMethod({ row, column, rowIndex, columnIndex }) {
      // 合并列
      // if (columnIndex % 2 === 0) {
      //   if (rowIndex % 2 === 0) {
      //     return {
      //       rowspan: 2,
      //       colspan: 1
      //     };
      //   } else {
      //     return {
      //       rowspan: 0,
      //       colspan: 0
      //     };
      //   }
      // }
      // 合并行
      // if (rowIndex % 2 === 0) {
      //   if (columnIndex === 0) {
      //     return [1, 2];
      //   } else if (columnIndex === 1) {
      //     return [0, 0];
      //   }
      // }
    },
    onEnterEvent(val){
      console.log('当前行信息', val);
    },
    onRowSelectChange(val){
      console.log('当前选中项的信息', val);
    },
    async RefreshTable () {
      let data = await getTableDataList();
      this.dataSource = data.list;
    },
    onPageChange(val){
      console.log(val);
    },
    onSyncTableData (val, valt) {
      console.log('组件列表数据', val);
      console.log('是否为首次同步的新数据', valt);
    },
    onCalcExportData (val) {
      console.log('导出的数据', val);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
