<template>
  <!-- 索赔件清单 -->
  <div ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
    <table border="1">
       <tr height="20px">
          <td width="25%">
            <p style="text-align:left;font-size:15px;font-wieght:700">经销商名称</p>
          </td>
          <td width="75%">
           {{}}
          </td>
        </tr>
    </table>
    <table>
      <tr height="20px">
        <td width="25%">评估师</td>
        <td width="25%">管理员</td>
        <td width="25%">评估编号</td>
        <td width="25%">201530503344</td>
      </tr>
    </table>
    <div>
    <table border="1">
       <tr height="75px">
        <td>
          <h2>评估车辆基本信息</h2>
        </td>
        <td>
          <table>
                  <tr height="25">
                      <td width="25%">
                        品牌
                      </td>
                      <td width="25%">
                        宝马
                      </td>
                       <td width="25%">
                        车型
                      </td>
                      <td width="25%">
                        x3
                      </td>
                  </tr>
                  <tr height="25">
                      <td width="25%">
                        车牌号码
                      </td>
                      <td width="25%">
                        吉88888888
                      </td>
                      <td width="25%">
                        车辆识别号码
                      </td>
                      <td width="25%">
                        666666
                      </td>
                  </tr>
                  <tr height="25">
                      <td width="25%">
                        发动机号
                      </td>
                      <td width="25%">
                        66666688888888
                      </td>
                      <td width="25%">
                        首次保养日期
                      </td>
                      <td width="25%">
                        2019-12-5
                      </td>
                  </tr>
                </table>
        </td>
      </tr>
     </table>  
  <div style="display:flex; margin-top:5px;width:100%;  ">
    <div style="border:1px solid #000; height:100px;width:35%; margin-right:5px">
        <div style="border-bottom:1px solid #000;height:20%"></div>
        <div></div>
    </div> 
    <div style="border:1px solid #000;height:100px; width:30%;margin-right:5px">
        <div style="border-bottom:1px solid #000;height:20%"></div>
        <div></div>
    </div> 
    <div style="border:1px solid #000; height:100px; width:35%;">
        <div  style="border-bottom:1px solid #000;height:20%"></div>
        <div></div>
    </div> 
</div>
     <div style="text-align:center;border:1px solid #000;width:100% ;height:20px; margin-top:5px" >
      <span>内部件基本信息</span>
    </div>
<div style="width:100%;display:flex;margin-top:5px">
  <div style="border:1px solid #000; height:150px;width:40%; margin-right:5px"></div>
  <div style="border:1px solid #000; height:150px;width:60%;"></div>
</div>
<div style="text-align:center;border:1px solid #000;width:100%;height:20px;margin-top:5px">
 <span>综合研究</span>
</div>
<div style="border:1px solid #000;width:100%;height:200px;margin-top:5px">
</div>
<div style="display:flex;width:100%;height:80px;margin-top:30px">
   <div style="text-align:center;border:1px solid #000;width:20%;">
   <span style="line-height:80px">评估信息</span>
   </div>
   <div style="display:flex;border:1px solid #000;width:80%;">
   <table>
        <tr>
            <td>评估价值</td>
            <td></td>
            <td>二次评估日期</td>
            <td></td>
            <td>三次评估日期</td>
            <td></td>
        </tr>
        <tr>
            <td>评估师</td>
            <td></td>
            <td>评估价值</td>
            <td></td>
            <td>评估价值</td>
            <td></td>
        </tr>
        <tr>
            <td>二手审核</td>
            <td></td>
            <td>二手审核</td>
            <td></td>
            <td>二手审核</td>
            <td></td>
        </tr>
        <tr>
            <td>价格有效期</td>
            <td></td>
            <td>价格有效期</td>
            <td></td>
            <td>价格有效期</td>
            <td></td>
        </tr>
     </table>
   </div>
</div>
<div style="display:flex;width:100%;height:80px;margin-top:10px">
  <div style="text-align:center;border:1px solid #000;width:20%;">
   <span style="line-height:60px">客户申明</span>
   </div>
  <div style="display:flex;border:1px solid #000;width:80%;">
    <span>客户声明：</span>
    <p style="text-indent:2em;">1....................................................</p>
  </div>
</div>

  


</div>


    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.repair_contentbox {
  border: 1px;
}
</style>

<script>
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';
import { getUser } from '@/assets/js/auth';
export default {
  name: 'templateClaimOrder',
  props: {
    data: {
      username: getUser(),
      type: Object,
      required: true,
      default() {
        return {};
      }
    },
    isPreview: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nowTime: moment().format('YYYY-MM-DD')
      // username: getUser()
    };
  },
  computed: {
    totalPrice() {
      return '';
      // return this.data.items.reduce((prev, curr) => {
      //   return curr.ckdj * curr.ckdj + prev;
      // }, 0);
    }
  },
  created() {
    console.log(this.data[0].$index, '打印数据');
  },
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    // if (this.isPreview) {
    //   this.fillInToDom();
    // }
  },
  methods: {
    // fillInToDom() {
    //   // this.isPreview = true;
    // }
  }
};
</script>
