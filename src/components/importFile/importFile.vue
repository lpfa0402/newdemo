<template>
  <div>
    <!-- :initial-value="form.fileList" -->
    <UploadFile
      ref="UploadFile"
      :autoUpload="false"
      :autoUploadDisplay="false"
      :action-url="actionUrl"
      @change="successHandler"
      @error="errorHandler"
      :fileTypes="['xls','xlsx']"
    >选取附件</UploadFile>
    <div style="text-align: center;margin: 10px;">
      <el-button size="small" @click="saveHandle" type="primary">{{title}}</el-button>
      <el-button size="small" @click="cancle" type>关闭</el-button>
    </div>
    <FilterTable
      ref="table"
      :columns="columns"
      :dataSource="errorList"
      :datakey="'records'"
      :isSelectColumn="false"
      :onColumnsChange="columns => this.columns = columns"
      style="margin-top: 10px"
    ></FilterTable>
  </div>
</template>
<script>
// import axios, { getConfigHeaders } from '@/api/fetch';
import UploadFile from '@/components/UploadFile';

export default {
  name: 'importFile',
  comments: {
    UploadFile
  },
  props: {
    title: {
      type: String,
      required: true
    },
    actionUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // actionUrl:"/api/cluecenter/jk/clue/excelImportCheck",//导入校验
      // importUrl:"/api/cluecenter/jk/clue/importClueByExcel",//导入
      // updateUrl:"/api/cluecenter/jk/clue/excelUpdateCheck",//更新校验
      // actionUrl_upload:"/api/cluecenter/jk/clue/updClues",//更新
      columns: this.createTableColumns(),
      errorList: [],
      isUpload: false,
      fileList: [],
      file: {}
    };
  },
  methods: {
    createTableColumns() {
      return [
        {
          title: 'excel表格行号',
          dataIndex: 'rowNO',
          filterType: 'input'
        },
        {
          title: '信息（错误/成功）',
          dataIndex: 'errorMsg',
          filterType: 'input'
        }
      ];
    },
    successHandler(val) {
      // console.log(val)
      this.fileList = val;
      if (val && val.length > 0) {
        if (val[0].url.errorList && val[0].url.errorList.length > 0) {
          this.errorList = val[0].url.errorList;
        } else {
          this.$message.success(`文件${this.title}成功`);
        }
      } else {
        this.errorList = [];
      }
      if (val[0].url.sucess) {
        this.isUpload = true;
      }
    },
    errorHandler(val) {
      console.log(val);
      this.$message.error('文件下载失败！');
    },

    async saveHandle() {
      this.$refs.UploadFile.submitUpload();
      /*if(this.isUpload){
        let url = this.importUrl;
        let params = {
          clues:this.fileList.clue
        }
        const res = await axios.post(url, params);
        if (res.resultCode === 200) {
          this.$message.success(`文件${this.title}成功`);
          this.cancle()
        } else {
          this.errorHandle(res.errMsg);
        }
      }else{
        this.$message.error('请先上传正确的文件！');
      }*/
    },
    cancle() {
      // this.$emit("close")
      this.$emit('close', this.fileList);
    },
    // async downLoadByUrl(url, params = {}) {
    //   const { data } = await axios({ url, params });
    //   return data;
    // }
  }
};
</script>
