<script>
export default {
  name: 'UploadImg',
  props: {
    actionUrl: {
      type: String,
      required: true
    },
    fileTypes: {
      type: Array,
      default: () => ['jpg', 'png']
    },
  },
  data() {
    return {
      radio: '3',
      nextQ: 0.2, //压缩比例
      maxQ: 1,
      minQ: 0,
      maxSize: 2 * 1024 * 1024,
      minSize: 1 * 1024 * 1024,
    };
  },
  methods: {
    // 上传前处理图片
    beforeUploadHandle(file) {
      console.log('处理前大小', file.size / 1024 / 1024);
      const that = this;
      // let ndata;
      // 判断图片格式
      const isType = that.fileTypes.includes(file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase());
      if (!isType) {
        that.$notify({ title: '提示信息', message: `上传的文件只能是 ${that.fileTypes.join(',')} 格式！`, type: 'warning' });
      }
      // 根据选择的压缩范围对图片进行压缩
      // 判断图片尺寸，如果小于选择的压缩范围直接上传
      if(file.size <= Number(that.radio) * 1024 * 1024) {
        return file;
      } else {
        // if (file.size <= Number(that.radio) * 1024 * 1024) {

        // }
        // let newImg = that.compress(file);
        console.log('压缩后大小：' + that.compress(file));
      }
    },
    aaa() {
      console.log('aaaa')
    },
    /**
     * 将base64转换为文件
     * @param base64Codes base64编码
     * @param fileName 文件名称
     * @returns {*}
     */
    dataUrlToFile(base64Codes, fileName){
      var arr = base64Codes.split(',');
      var mime = arr[0].match(/:(.*?);/)[1];
      var bStr = atob(arr[1]);
      var n = bStr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bStr.charCodeAt(n);
      }
      return new File([u8arr], fileName, {type: mime});
    },
    /**
     * 图片压缩
     * @param file 文件
     * @param callback 回调函数
     */
    compress(file, callback) {
      let that = this;
      that.imgBase64(file, function (image, canvas) {
        var base64Codes = canvas.toDataURL(file.type, that.nextQ); // 对图片进行压缩
        var compressFile = that.dataUrlToFile(base64Codes, file.name.split('.')[0]); // 转成file文件
        var compressFileSize = compressFile.size; // 压缩后文件大小 k
        console.log('图片质量：' + that.nextQ);
        console.log('压缩后文件大小：' + compressFileSize / 1024);
        if (compressFileSize > that.maxSize) { // 压缩后文件大于最大值
          that.maxQ = that.nextQ;
          that.nextQ = (that.nextQ + that.minQ) / 2; // 质量降低
          that.compress(file);
        } else if (compressFileSize < that.minSize) { // 压缩以后文件小于最小值
          that.minQ = that.nextQ;
          that.nextQ = (that.nextQ + that.maxQ) / 2; // 质量提高
          that.compress(file);
        } else {
          console.log('压缩后大小：' , compressFile.size / 1024 / 1024);
          return compressFile;
        }
      });
    },
    /**
     * 将图片转化为base64
     * @param file 文件
     * @param callback 回调函数
     */
    imgBase64(file, callback) {
      let that = this;
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;
      var image = new Image();
      // 绑定 load 事件处理器，加载完成后执行
      image.onload = function () {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = image.width * that.nextQ;
          canvas.height = image.height * that.nextQ;
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          callback(image, canvas);
      };
      if (/^image/.test(file.type)) {
        // 创建一个reader
        var reader = new FileReader();
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onload = function () {
          // self.imgUrls.push(this.result);
          // 设置src属性，浏览器会自动加载。
          // 记住必须先绑定事件，才能设置src属性，否则会出同步问题。
          image.src = this.result;
        };
      }
    },
  },
  render() {
    const wrapProps = {
      props: {
        action: 'action',
        listType: 'picture-card',
        beforeUpload: this.beforeUploadHandle
      }
    };
    return (
      <div class="upload-btn">
        <div class="l_title">
          <span class="l_title_span">请选择上传的图片压缩范围</span>
          <el-radio v-model={this.radio} label="3">3M以内</el-radio>
          <el-radio v-model={this.radio} label="5">5M以内</el-radio>
        </div>
        <el-upload {...wrapProps}>
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
    );
  }
};
</script>
<style scoped>
.l_title{
  margin-top: 10px;
  margin-bottom: 10px;
}
.l_title_span{
  font-size: 14px;
  margin-right: 10px;
}
</style>