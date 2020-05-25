```bash
<template>
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
  />
</template>
<script>
import { getTableDataList } from '@/api/Table.js'
export default {
  name: 'SpinTest',
  data() {
    return {
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
    };
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
}
```