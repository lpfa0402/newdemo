<template>
  <div style="padding-bottom: 60px;">
    <h2>table 表格</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FilterTable
          :columns="columns"
          :dataSource="dataSource"
          :onColumnsChange="columns => this.columns = columns"
          :height="height"
          :maxHeight="maxHeight"
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
          explain: '表格的内容',
          type: 'Array',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'onColumnsChange',
          explain: '变化时的回调，参数是 columns 数组',
          type: 'Function',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
      ],
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
          width: 160,
          render: (props, h) => {
            return (
              <div>
                <el-button size="mini" type="text" disabled={props.row.status != '101' && props.row.status != '105'} onClick={() => this.editHandle(props.row)}>
                  编辑
                </el-button>
                <el-divider direction="vertical" />
                <el-button size="mini" type="text" disabled={props.row.status != '105'} onClick={() => this.delHandle(props.row)}>
                  删除
                </el-button>
                <el-divider direction="vertical" />
                <el-button size="mini" type="text" onClick={() => this.viewLogHandle(props.row.vbillno)}>
                  审核日志
                </el-button>
              </div>
            );
          }
        },
        {
          title: '优惠模式代码',
          dataIndex: 'DISCOUNT_MODE_CODE',
          sorter: true,
          filter: true,
          filterType: 'input'
        },
        {
          title: '优惠模式说明',
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
