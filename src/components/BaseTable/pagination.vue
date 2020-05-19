<script>
export default {
  name: 'Pagination',
  props: {
    pagination: {
      type: Object,
      required: true
    },
    onPageChange: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    handleCurrentChange(val) {
      const { pageSize } = this.pagination;
      this.pagination.current = val;
      this.onPageChange({ pageNum: val, pageSize });
    },
    handleSizeChange(val) {
      const { pageNum } = this.pagination;
      this.pagination.pageSize = val;
      this.onPageChange({ pageNum, pageSize: val });
    }
  },
  render() {
    const {
      pagination: { current, pageSize, total }
    } = this;
    return (
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next, sizes, jumper"
        current-page={current}
        page-size={pageSize}
        page-sizes={[10, 20, 30, 40]}
        total={total}
        on-size-change={this.handleSizeChange}
        on-current-change={this.handleCurrentChange}
      />
    );
  }
};
</script>

<style lang="less" scoped>
.pagination {
  padding: @modulePadding 0;
  text-align: right;
  /deep/ .el-pagination__jump {
    margin-left: 0;
  }
}
</style>
