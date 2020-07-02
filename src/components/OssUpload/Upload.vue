
<template>
  <div style="position: relative;">
    {{value.name}}
    <el-button type="text" v-if="value.status===1" @click="stopUpload">暂停</el-button>
    <el-button type="text" v-if="value.status===2" @click="resumeUpload">继续上传</el-button>
    <i
      class="el-icon-close"
      style="position: absolute;right: 5px; top: 14px; cursor: pointer;"
      @click="deleteFile(value.name)"
    ></i>
    <el-progress :percentage="value.progress" v-if="value.status===2" status="warning"></el-progress>
    <el-progress :percentage="value.progress" v-else></el-progress>
  </div>
</template>
<script>
const OSS = require('ali-oss');
const client = new OSS({
  region: 'ap-beijing',
  accessKeyId: 'AKIDZ3sdEUXgYIuMYFmm8II8QcdNQI2fLDkJ',
  accessKeySecret: 'WFm7LPzRjrTuCnFZifSXvEONBzCII7LO',
  bucket: 'dms100-1300211780'
});
const resumeClient = new OSS({
  region: 'ap-beijing',
  accessKeyId: 'AKIDZ3sdEUXgYIuMYFmm8II8QcdNQI2fLDkJ',
  accessKeySecret: 'WFm7LPzRjrTuCnFZifSXvEONBzCII7LO',
  bucket: 'dms100-1300211780'
});
export default {
  name: 'upload-file',
  props: {
    value: {
      required: true,
      default: []
    },
    partSize: {
      type: Number,
      default: 2048
    },
    root: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      fileCheckPoint: {},
      size: 0
    };
  },
  mounted() {
    if (this.value.progress !== 100) {
      this.doUpload();
    }
  },
  methods: {
    //选择文件
    doUpload() {
      this.size = this.value.file[0].size;

      this.multipartUpload(this.value.file[0].name, this.value.file[0]);
    },
    //分页上传
    multipartUpload(upName, upFile) {
      let _this = this;
      const progress = async function(percentage, checkpoint, res) {
        _this.fileCheckPoint = checkpoint;
        _this.value.status = 1;
        //进度
        _this.value.progress = Math.ceil(percentage === 0 ? 0.1 : percentage * 100);
      };
      try {
        let result = client
          .multipartUpload(this.root + upName, upFile, {
            progress: progress,
            headers: {
              Expires: 1000 * 60 * 60
            },
            partSize: _this.partSize * 1024, //设置分片上传
            meta: {
              year: 2019,
              people: 'test'
            }
          })
          .then(res => {
            if (res.res.status === 200) {
              //成功
              _this.successFun(res);
            } else {
              console.log(res);
              _this.value.status = 2;
            }
          })
          .catch(err => {
            _this.value.status = 2;
            console.log('err====>', err);
          });
        console.log(result);
      } catch (e) {
        // 捕获超时异常
        if (e.code === 'ConnectionTimeoutError') {
          console.log('Woops,超时啦!');
        }
        _this.value.status = 2;
        console.log(e);
      }
    },
    //上传成功
    successFun(res) {
      this.value.status = 0;
      if (this.root === '') {
        //上传文件目录
        this.value.name = res.name;
      } else {
        this.value.name = res.name.replace(this.root, '');
      }
      this.value.size = this.size;
      // this.value.url = res.res.requestUrls[0].split('?')[0];
      this.value.url = client.signatureUrl(res.name);
      this.$parent.retrunData(this.value);
      // let head = client.head(upName);
    },
    // 恢复 继续上传
    resumeUpload() {
      let _this = this;
      if (Object.prototype.hasOwnProperty.call(!_this.fileCheckPoint, 'file')) {
        this.$confirm('上传中的文件已经损坏，请重新尝试', '提示', {
          confirmButtonText: '确定',
          type: 'error'
        })
          .then(async () => {
            _this.value.status = 0;
            _this.stopUpload();
            _this.$parent.deleteOneFile(_this.value.file[0].name, 1);
          })
          .catch(() => {});
        return;
      }
      _this.value.status = 1;
      let files = _this.fileCheckPoint;
      // console.log('继续上传文件',this.fileCheckPoint)
      const progress = async function(percentage, checkpoint, res) {
        _this.fileCheckPoint = checkpoint;
        //进度
        _this.value.progress = Math.ceil(percentage === 0 ? 0.1 : percentage * 100);
      };
      try {
        let result = resumeClient
          .multipartUpload(files.name, files, {
            progress: progress,
            checkpoint: _this.fileCheckPoint,
            meta: { year: 2017, people: 'test' }
          })
          .then(res => {
            if (res.res.status === 200) {
              _this.successFun(res);
            } else {
              console.log(res);
              _this.value.status = 2;
            }
          })
          .catch(err => {
            _this.value.status = 2;
            console.log('err====>', err);
          });
        console.log(result);
      } catch (e) {
        console.log(e);
        _this.value.status = 2;
      }
    },
    //暂停
    stopUpload() {
      this.value.status = 2;
      client.cancel();
      resumeClient.cancel();
    },
    //删除文件
    deleteFile(name) {
      this.$confirm('是否确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.value.status = 0;
          this.stopUpload();
          this.$parent.deleteOneFile(name, 1);
          try {
            let result = await client.delete(name);
            console.log(result);
          } catch (e) {
            console.log(e);
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
.el-progress {
  .el-progress-bar {
    padding-right: 3px !important;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-right: -3px !important;
    box-sizing: border-box;
  }
}
.el-progress__text {
  position: absolute;
  top: -18px;
  right: 23px;
  color: #606266;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  line-height: 1;
}
</style>
