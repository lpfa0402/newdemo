<script>
import _ from 'lodash';
import { Notification } from 'element-ui';
import JsonToExcel from '@/components/JsonToExcel/JsonToExcel.vue';

export default {
  name: 'ExportExcel',
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    fileName: {
      type: String,
      default: '表格数据.xlsx'
    },
    fetch: {
      type: Object,
      default: () => ({})
    },
    onCalcExportData: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    filterColumns() {
      return this.columns.filter(x => x.dataIndex && x.dataIndex !== 'column-action').filter(x => !x.hidden);
    },
    fields() {
      const target = {};
      this.filterColumns.forEach(x => {
        target[x.title] = x.dataIndex;
      });
      return target;
    }
  },
  methods: {
    createDataList(list) {
      return list.map((x, i) => {
        let item = { ...x };
        this.filterColumns.forEach(x => {
          // const { dataIndex, dictItems, editItems, editType } = x;
          const { dataIndex, dictItems, editItems } = x;
          const val = _.get(item, dataIndex);
          const dicts = dictItems || editItems || [];
          const target = dicts.find(x => x.value == val);
          let res = target ? target.text : val;
          // 数据是数组的情况
          if (Array.isArray(val)) {
            res = val
              .map(x => {
                let target = dicts.find(k => k.value == x);
                return target ? target.text : x;
              })
              .join(',');
          }
          _.set(item, dataIndex, res);
        });
        // 设置 index 序号
        _.set(item, 'index', i + 1);
        // 处理计算导出数据
        this.onCalcExportData(item);
        return item;
      });
    },
    createFetchParams(fetch) {
      if (!fetch.api) return null;
      // const { api, datakey, total } = fetch;
      const { api, total } = fetch;
      const params = { ...fetch.params };
      // 移除 xhrAbort 属性
      delete params.xhrAbort;
      // 处理 fetch api
      let apiFetch = api;
      if (total <= 0) {
        apiFetch = async () => {
          Notification({ title: '提示信息', message: '请先执行搜索并结果不为空，再进行导出！', type: 'warning' });
          return null;
        };
      }
      return {
        fetch: {
          api: apiFetch,
          params: {
            ...params,
            currentPage: 1,
            pageSize: total, // 必须
            pageNum: 1,
            limit: total,
            current: 1, // 必须
            size: total
          },
          datakey: fetch.datakey
        }
      };
    }
  },
  render() {
    const { data, fields, fileName, fetch } = this;
    const wrapProps = {
      props: {
        initialValue: data,
        fields,
        fileName,
        ...this.createFetchParams(fetch),
        formatHandle: this.createDataList
      }
    };
    return (
      <div class="export-wrap">
        <JsonToExcel size="small" type="text" {...wrapProps}>
          导出
        </JsonToExcel>
      </div>
    );
  }
};
</script>

<style lang="less" scoped>
.export-wrap {
  display: inline-block;
  margin-right: @moduleMargin;
  /deep/ .el-button--text {
    font-size: 14px;
  }
}
</style>
