<h1 align="center">
  大文件 分片上传
</h1>

#### FormPanel 组件调用

`组件的引用`

```bash
# main.js
import OssUpload from '@/components/OssUpload';
Vue.use(OssUpload);
```

`组件参数API`

- v-model{Array|文件回显，详情/编辑页面显示已经上传文件  格式[{name:'文件名', url:'文件路径'}], 必须}
- init{Object|初始化上传文件配置  参数格式:init="{fileTypes: ['*'], limit:2, minSize:10, maxSize:0.01, partSize:1024 }" , 按需配置}
- disabled{Boolean|文件不可编辑，默认false, 详情页面用}
- @getUrl{Function|返回成功文件数据，格式数组[{name:'文件名', url:'文件路径'}]}

`init 初始化参数配置`

- fileTypes{Array|上传文件类型，支持多个格式 (用，分隔符)
    - ['pdf','jpg','png'] //特定格式
    - ['*'] 所有格式
- limit{Number|限制文件个数，}
- minSize{Number|上传文件最小 ,默认 0}
- maxSize{Number|上传文件最大 ,默认 5242880(5M)}}
- partSize{Number|分片上传 ,设置每片多少分割上传文件， 默认 1024}}
- root{String|上传文件层级目录，支持多层（XXX/XXX/XXX/）)


`示例代码`

```bash
# template
<template>
  <OssUpload v-model="ossUploadvalue"  :init="{fileTypes: ['*'],limit:1, root:'file/tianle/'}"   @getUrl="getUrl" />
</template>

# js
export default {
  data(){
      return {
        ossUploadvalue:[
          {
            name:'文件名称',
            url:'地址'
          }
        ]
      }
  },
  methods: {
    getUrl(val){
      console.log('返回上传成功文件', val);
    }
  }
};
```
