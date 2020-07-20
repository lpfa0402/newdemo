<template>
  <div>
    <table cellspacing="0" border="1" cellpadding="6" style="margin-top:0px;font-size:12px; border:1;width:90%;margin-left:5%">
        <tr style="height:1px;border: 0.5px solid black; font-size:5px">
          <td align="center" style="width:6%;font-size:12px;" rowspan="5">
            <p style="
              width: 20px;
              display: inline-block;
              writing-mode: vertical-rl;
              -webkit-writing-mode: vertical-rl;
              -ms-writing-mode: vertical-rl;">拖修方</p>
          </td>
          <td align="center" style="width:13%;font-size:12px;">单位名称</td>
          <td align="center" style="font-size:12px;" colspan="6"></td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black; font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">选修人</td>
          <td align="center" style="width:40%;font-size:12px;"></td>
          <td align="center" style="width:13%;font-size:12px;">底盘号</td>
          <td align="center" style="width:28%;font-size:12px;"></td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black; font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">车牌号码</td>
          <td align="center" style="width:40%;font-size:12px;">
            <div style="display:inline-block;width:100%;font-size:12px;">
              <span style="display:inline-block; width:55%;"></span>
              <span style="display:inline-block; width:15%;">厂牌型号</span>
              <span style="display:inline-block; width:35%;"></span>
            </div>
          </td>
          <td align="center" style="width:13%;font-size:12px;">维修类别</td>
          <td align="center" style="width:28%;font-size:12px;"></td>
        </tr>
        <!-- <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">联系人</td>
          <td align="center" style="width:37%;font-size:12px;">{{data.DELIVERER}}</td>
          <td align="center" style="width:10%;font-size:12px;">电&emsp;&emsp;话</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.DELIVERER_PHONE}}</td>
          <td align="center" style="width:10%;font-size:12px;">移动电话</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.DELIVERER_MOBILE}}</td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">地&emsp;&emsp;址</td>
          <td align="center" style="width:37%;font-size:12px;"  >{{data.ADDRESS}}</td>
          <td align="center" style="width:10%;font-size:12px;">使用单位</td>
          <td align="center" style="width:15%;font-size:12px;"  colspan="3">{{data. USE_UNIT_NAME}}</td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">底盘号</td>
          <td align="center" style="width:37%;font-size:12px;">{{ data.VIN }}</td>
          <td align="center" style="width:10%;font-size:12px;">进厂日期</td>
          <td align="center" style="width:15%;font-size:12px;">{{ data.RO_CREATE_DATE}}</td>
          <td align="center" style="width:10%;font-size:12px;">发票号</td>
          <td align="center" style="width:15%;font-size:12px;"></td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">车&emsp;&emsp;型</td>
          <td align="center" style="width:37%;font-size:12px;"> {{ data.MODEL }}</td>
          <td align="center" style="width:10%;font-size:12px;">行驶里程</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.IN_MILEAGE}}公里</td>
          <td align="center" style="width:10%;font-size:12px;">发动机号</td>
          <td align="center" style="width:15%;font-size:12px;">{{data.ENGINE_NO}}</td>
        </tr>
        <tr style="height:1px;border: 0.5px solid black font-size:5px">
          <td align="center" style="width:13%;font-size:12px;">预计下次保养</td>
          <td align="center" style="width:37%;font-size:12px;">日期：{{data.NEXT_MAINTAIN_DATE}}~{{data.NEXT_MAINTAIN_DATE_END}} &emsp;&emsp; 里程：{{data.NEXT_MAINTAIN_MILEAGE}}~{{data.NEXT_MAINTAIN_MILEAGE_END}} </td>
          <td align="center" style="width:13%;font-size:12px;">希望联系方式</td>
          <td align="center" style="width:12%;font-size:12px;">{{data.BEST_CONCAT_TYPE}}</td>
          <td align="center" style="width:13%; font-size:12px;">方便联系时间</td>
          <td align="center" style="width:12%;font-size:12px;">{{data.CONCAT_TIME}}</td>
        </tr> -->
      </table>
  </div>
</template>
<script>
export default {
  name: 'homeA',
  data() {
    return {
      options: {
        startVal: 1,
        decimals: 2
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
