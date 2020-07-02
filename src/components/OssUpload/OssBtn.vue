
<template>
  <div>
    <div v-if="!disabled">
      <label :for="inputId" v-if='(value.length+valueAll) < limit' class="upBtn" >点击上传</label>
      <ul class="el-upload-list el-upload-list--text">
        <li class="el-upload-list__item is-success" v-for="(data,index) in value" :key="index+'up'">
          <a class="el-upload-list__item-name"  target="_blank" :download="data.name" :href="data.url">{{data.name}}</a>
          <label class='el-upload-list__item-status-label'><i class="el-icon-upload-success el-icon-circle-check"  ></i></label>
          <i class="el-icon-close"    @click="deleteOneFile(data.name,0)"></i>
        </li>
      </ul>
      <div style="line-height:25px" v-for="(data,index) in fileValue" :key="index">
        <upload-file v-model="data.file" :partSize='init.partSize' :root="init.root||''" />
      </div>
      <input style="display: none" :id="inputId" v-if="fileAccept==='*'" ref="input"  type="file"  @change="handleFileChange" />
      <input style="display: none" :id="inputId" v-else :accept="fileAccept"  ref="input"  type="file"  @change="handleFileChange" />
    </div>
    <div style="line-height:25px"  v-else  v-for="(data,index) in value" :key="index">
      <span>{{data.name}}</span>
      <a class="el-icon-download" style="color:#1890ff; cursor: pointer;"  target="_blank"  :href="data.url"></a>
    </div> 
  </div>
</template>
<script>
import uploadFile from './Upload';
export default {
  name: 'OssUpload',
  components:{uploadFile},
  props: {
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    init: Object, // 初始化
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      fileValue:[],
      inputId: '',
      valueAll:0,
      limit:this.init.limit || 10000,
      maxSize: this.init.maxSize || 5 * 1024 * 1024,
      minSize: this.init.minSize || 0,
      fileAccept: this.creatFileTypes(this.init.fileTypes),
    };
  },
  mounted() {
    if(this.value.length > this.init.limit){
      const newValue= JSON.parse(JSON.stringify(this.value));
      const nullValue=[];
      for (let i = 0; i < this.init.limit; i++) {
        nullValue.push(newValue[i]);
      }
      this.value=nullValue;
    }
    // 防止多个组件互相影响
    this.inputId = this.id || Math.round(Math.random() * 100000);
    ['drop', 'dragenter', 'dragover', 'dragleave'].forEach(eventName => {
      this.preventDefaultEvent(eventName);
    });
  },
  computed: {
    // 格式化的文件大小，可读的
    sizeFormatted() {
      let result = 0;
      if (this.maxSize < 1024) {
        result = this.maxSize + 'K';
      } else {
        result =
          (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M';
      }
      return result;
    },
    sizeSmall() {
      let result = 0;
      if (this.minSize < 1024) {
        result = this.minSize + 'K';
      } else {
        result =
          (this.minSize / 1024).toFixed(this.minSize % 1024 > 0 ? 2 : 0) + 'M';
      }
      return result;
    }
  },
  methods: {
    creatFileTypes(type){
     if(type instanceof Array && type.length>0 && type.join(',')!=='*'){
      return type.join(',');
     }else{
       return '*';
     }
    },
    // 手动点击上传
    handleFileChange() {
      const input = this.$refs.input;
      const files = input.files;
      this.doUpload(files);
    },
    //上传
    doUpload(file) {
      if (!this.imgformat(file[0])) {
        return;
      }
      //防止上传重复文件
      for (let i = 0; i < this.value.length; i++) {
        if(this.value[i].name===file[0].name){
          this.$message.warning(file[0].name + '文件已存在');
          return;
        }
      }
      for (let i = 0; i < this.fileValue.length; i++) {
        if(this.fileValue[i].file.name===file[0].name){
          this.$message.warning(file[0].name + '文件已存在');
          return;
        }
      }
      const newFile={
        file:{ file:file, name:file[0].name, url:'',progress: 1, status:1 }
      };
      this.fileValue.push(newFile);
      this.valueAll=this.fileValue.length;
    },
    //删除文件
    deleteOneFile(name, type) {
      if(type===0){
         this.$confirm('是否确定删除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
          for (let i = 0; i < this.value.length; i++) {
            if(this.value[i].name===name){
            this.value.splice(i, 1);
            }
          }
        }).catch(() => {});
      }else{
        for (let i = 0; i < this.fileValue.length; i++) {
            if(this.fileValue[i].file.name===name){
            this.fileValue.splice(i, 1);
            }
          }
      }
      this.valueAll=this.fileValue.length;
      this.$emit('getUrl', this.value);
      this.$refs.input.value = null;// 解决input[type='file']上传相同附件只传一次问题
    },
    retrunData(val){
      const nullFileValue = Object.assign([],this.fileValue);
      for (let i = 0; i < nullFileValue.length; i++) {
        if(nullFileValue[i].file.name===val.name){
         nullFileValue.splice(i, 1);
        }
      }
      this.fileValue=nullFileValue;
      const newObject={
          name:val.name,
          url:val.url
        };
      this.value.push(newObject);
      this.valueAll=this.fileValue.length;
      this.$emit('getUrl', this.value);
    },
    //大小、格式
    imgformat(file) {
        const size = Math.floor(file.size / 1024);
        //最大值
        if (size > this.maxSize) {
          this.$message.error(
            file.name + `文件大小不能超过${this.sizeFormatted}`
          );
          return false;
        }
        //最小
        if (size < this.minSize) {
          this.$message.error(file.name + `文件大小不能小于${this.sizeSmall}`);
          return false;
        }

        if (this.fileAccept === '*') {
          return true;
        }
        if (this.fileAccept === 'image/*') {
          const ttt =
            file.name.lastIndexOf('.jpg') > 0 ||
            file.name.lastIndexOf('.JPG') > 0 ||
            file.name.lastIndexOf('.png') > 0 ||
            file.name.lastIndexOf('.PNG') > 0 ||
            file.name.lastIndexOf('.jpeg') > 0 ||
            file.name.lastIndexOf('.JPEG') > 0 ||
            file.name.lastIndexOf('.gif') > 0 ||
            file.name.lastIndexOf('.svg') > 0;
          if (!ttt && this.fileAccept === 'image/*') {
            this.$message.error('只能上传图片!');
            return false;
          }
        } else {
          const imgTyPe = this.fileAccept.split(',');
          let count = 0;
          for (let i = 0; i < imgTyPe.length; i++) {
            const unTrim = imgTyPe[i].trim();
            if (file.name.lastIndexOf(unTrim) > 0) {
              count = count + 1;
            }
          }
          if (count === 0) {
            this.$message.error('只能上传' + this.fileAccept + '类型文件');
            return false;
          }
        }
        return true;
    },
    preventDefaultEvent(eventName) {
      document.addEventListener(
        eventName,
        function(e) {
          e.preventDefault();
        },
        false
      );
    }
  }
};
</script>
 
<style lang="less" scoped>
.upBtn {
  display:table-cell;
  color: #fff;
  background:@primaryColor;
  border: #fff; margin-bottom: 10px;
  padding: 0px 15px;
  font-size: 12px;
  border-radius: 3px; 
}
.upBtnGray {
  display:table-cell;
  padding: 8px 15px;
  font-size: 12px; margin-bottom: 10px;
  border-radius: 3px;
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border: 1px solid #dcdfe6;
}
.succFlie{line-height:25px; width: 100%; display:block;background: #fff}
.succFlie:hover{background: #ddd}
.succFlie a{float: left;}
.succFlie i{float: right;}
.succFlie .el-icon-upload-success{color: #67c23a}
.el-upload-list{ margin-top: -6px;}

</style>