<script>
// import { getConfigHeaders } from '@/api/fetch';
import axios from 'axios';
export default {
  name: 'UploadFile',
  props: {
    actionUrl: {
      type: String,
      required: true
    },
    initialValue: {
      type: Array,
      default: () => []
    },
    fileTypes: {
      type: Array,
      default: () => ['jpg', 'png', 'pdf', 'xls', 'xlsx', 'doc', 'docx', 'mp4', 'rmvb']
    },
    isOnlyButton: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1
    },
    fileSize: {
      type: Number,
      default: 30
    },
    params: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    autoUploadDisplay: {
      type: Boolean,
      default: true
    },
    fileTypeVerification: {
      type: Boolean,
      default: false
    },
    isFilesize: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      file: [],
      length: 0,
      fileList: this.initialValue
    };
  },
  watch: {
    initialValue(val) {
      this.fileList = this.initialValue;
    },
    fileList(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    beforeUploadHandle(file) {
      console.log(file, 'fileeee');
      const isLt5M = file.size / 1024 / 1024 < this.fileSize;
      if (this.fileTypeVerification) {
        if (!isLt5M) {
          this.$notify({ title: '提示信息', message: `上传文件大小不能超过 ${this.fileSize}M！`, type: 'warning' });
          this.file = [];
          return false;
        }
        return isLt5M;
      } else {
        const isType = this.fileTypes.includes(file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase());
        if (!isType) {
          this.$notify({ title: '提示信息', message: `上传的文件只能是 ${this.fileTypes.join(',')} 格式！`, type: 'warning' });
          this.file = [];
          return false;
        }
        if (!isLt5M) {
          this.$notify({ title: '提示信息', message: `上传文件大小不能超过 ${this.fileSize}M！`, type: 'warning' });
          this.file = [];
          return false;
        }
        return isType && isLt5M;
      }
    },
    uploadFileFun() {
      let formData = new FormData();
      if (this.file.length > 0) {
        // let arr = [];
        this.file.forEach(file => {
          formData.append('file', file);
        });

        if (this.length > 0) {
          //	走接口
          console.log(formData.getAll('file'));
          let _url = this.actionUrl; //上传文件接口地址
          axios({
            url: _url,
            method: 'post',
            data: formData
          }).then(
            res => {
              this.file = [];
              //此处重置文件中间存储变量是为了相同文件能够重复传递
              if (200 === res.data.resultCode) {
                console.log(res, 'ressss');
                this.$message.success('成功');
                this.fileList = res.data.data;
              } else {
                this.$message.success('失败');
              }
            },
            err => {
              this.file = [];
              this.$message.success('失败');
            }
          );
        }
      }
    },
    filesChange(file) {
      console.log(file, 'fileeee');
      const isLt5M = file.size / 1024 / 1024 < this.fileSize;
      if (this.fileTypeVerification) {
        if (!isLt5M) {
          this.$notify({ title: '提示信息', message: `上传文件大小不能超过 ${this.fileSize}M！`, type: 'warning' });
          return false;
        }
        return isLt5M;
      } else {
        const isType = this.fileTypes.includes(file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase());
        if (!isType) {
          this.$notify({ title: '提示信息', message: `上传的文件只能是 ${this.fileTypes.join(',')} 格式！`, type: 'warning' });
          return false;
        }
        if (!isLt5M) {
          this.$notify({ title: '提示信息', message: `上传文件大小不能超过 ${this.fileSize}M！`, type: 'warning' });
          return false;
        }
        return isType && isLt5M;
      }
    },
    change() {
      //判断上传文件数量
      this.length = document.querySelector('input[type=file]').files.length;
      if (this.length > 0) {
        Array.from(document.querySelector('input[type=file]').files).forEach(file => {
          let is = this.filesChange(file);
          if (is) {
            if (this.file.indexOf(file) == -1) {
              this.file.push(file);
            }
          }
        });
        console.log(this.file, 'fileList');
      }
      return false;
    },

    // async downLoadByUrl(url, params = {}) {
    //   const { data } = await axios({ url, params, responseType: 'blob', withCredentials: !0 });
    //   return data;
    // },
    // // 执行下载动作
    // async downloadFile({ url, name }, params) {
    //   if(!url) {return !1};
    //   return window.open(url);
    //   const blob = await this.downLoadByUrl(url, params);
    //   const fileName = !name ? url.slice(url.lastIndexOf('/') + 1) : name;
    //   // ie10+
    //   if (navigator.msSaveBlob) {
    //     navigator.msSaveBlob(blob, decodeURI(fileName));
    //   } else {
    //     const downloadUrl = window.URL.createObjectURL(blob);
    //     let a = document.createElement('a');
    //     a.href = downloadUrl;
    //     a.download = decodeURI(fileName);
    //     a.click();
    //     a = null;
    //   }
    // },
    submitUpload() {
      this.$refs.upload.submit();
    }
  },

  render() {
    const { $props, $attrs, $slots, $listeners, fileList, fileTypes, fileSize, containerStyle } = this;
    const wrapProps = {
      props: {
        action: $props.actionUrl,
        // headers: getConfigHeaders(),
        data: $props.params,
        fileList,
        limit: $props.limit,
        showFileList: $props.isFilesize ? true : !$props.isOnlyButton,
        withCredentials: true,
        disabled: $props.disabled,
        // beforeUpload: this.beforeUploadHandle,
        autoUpload: $props.autoUpload,
        autoUploadDisplay: $props.autoUploadDisplay,
        multiple: $props.multiple,
        httpRequest: this.uploadFileFun,
        onChange: this.change
      },
      on: $listeners
    };
    const btnProps = {
      attrs: {
        type: 'primary',
        disabled: $props.disabled,
        ...$attrs
      }
    };
    return (
      <div class="upload-btn" style={containerStyle}>
        <el-upload ref="upload" {...wrapProps}>
          <el-button slot="trigger" {...btnProps}>
            {$slots['default']}
          </el-button>
          {!$props.autoUpload && $props.autoUploadDisplay && (
            <el-button style="margin-left: 10px;" size="small" type="primary" disabled={$props.disabled} onClick={this.submitUpload}>
              上传到服务器
            </el-button>
          )}
          {!$props.isOnlyButton ? (
            <div slot="tip" class="el-upload__tip">
              {`只能上传 ${fileTypes.join(',')} 格式，文件大小不超过${fileSize}M`}
            </div>
          ) : null}
        </el-upload>
      </div>
    );
  }
};
</script>

<style lang="less" scoped>
.upload-btn {
  display: inline-block;
}
</style>
