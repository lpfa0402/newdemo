<template>
  <!-- 打印索赔单 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <!-- <p style="text-align:; line-height:10px;margin:0;margin-top:10px;font-size:10px">&emsp;&emsp;</p> -->
    <!-- {{data.barcode}} -->
    <div>

   
      <!-- <span id="dataList"></span> -->
      <!--
         <table
        v-for="(x,index) in this.data"
        :key="x.$index"
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;"
      > -->
      <table id="abc" cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;">
        <!-- <tbody id="dataList"> -->
          <!-- <tr><td style="text-align:center;width:100%;font-size:20px" colspan="3">装箱标签</td></tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:35%;">登记单号:{{this.data[0].DELIVERY_NO}}</td>
            <td style="text-align:right;width:35%;">第{{index+1}}箱/共{{this.data[0].DELIVERY_COUNT}}箱</td>
            <td style="text-align:left;width:30%;"></td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:100%;" colspan="3" >服务站名:{{this.data[0].OWNER_CODE}} {{data.companyNameCn}}</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:35%;">维修起始日期:{{this.data[0].REPAIR_BEGIN_DATE}}</td>
            <td style="text-align:left;width:35%;">维修结束日期:{{this.data[0].REPAIR_COMPLETE_DATE}}</td>
            <td style="text-align:left;width:30%;"></td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:35%;">起始索赔单号:{{this.data[0].MIN_CLAIM_NO}}</td>
            <td style="text-align:left;width:35%;">终止索赔单号:{{this.data[0].MAX_CLAIM_NO}}</td>
            <td style="text-align:left;width:30%;"></td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:35%;">收获仓库:{{this.data[0].WAREHOUSE_NAME}}</td>
            <td style="text-align:left;width:35%;">运输方式:{{this.data[0].TRANSPORTATION_MODE}}</td>
            <td style="text-align:left;width:30%;"></td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;width:35%;">发货日期:{{this.data[0].DELIVERY_DATE}}</td>
            <td style="text-align:left;width:35%;">发货人:{{this.data[0].SHIPPER_NAME}}</td>
            <td style="text-align:left;width:30%;"></td>
          </tr>
          <tr style="height:11px;"></tr> -->
        <!-- </tbody> -->
      </table>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
<script>
import moment from 'moment';
// import QRcode from 'qrcode';

export default {
  name: 'templatePrintFaultParts',
  props: {
    data: {
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
      repairLabour: [{ index: 1 }, { index: 1 }],
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss')
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
  mounted() {
    
    this.createTableInfo();

    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
    console.log(JSON.stringify(this.data), 'data数据-----');
    //console.log("this.data",this.data);
    // console.log(JSON.stringify(this.data), 'data数据-----');
    // console.log("this.data[0]",this.data[0]);
    // console.log("this.data[0].DELIVERY_COUNT",this.data[0].DELIVERY_COUNT);
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    },
    //打印获取数据
    createTableInfo() {
      console.log('this.data',this.data);
      console.log('this.data',this.data.companyNameCn);
      // let tableA =  document.getElementById('abc');
      let tableA =  '';
      // let dataList = '';
      for (var i = 0;i < this.data[0].DELIVERY_COUNT;i++) {
        // tableA.innerHTML += "<table cellspacing='0' style='margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;'>";
        // tableA.innerHTML += "<tbody>";
        // tableA.innerHTML += "<tr><td style='text-align:center;width:100%;font-size:20px' colspan='3'>装箱标签</td></tr>";
        // tableA.innerHTML += "<tr style='height:15px;'>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>登记单号:"+this.data[0].DELIVERY_NO+"</td>";
        // tableA.innerHTML += "<td style='text-align:right;width:35%;'>第"+(i+1)+"箱/共"+this.data[0].DELIVERY_COUNT+"箱</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:30%;'></td>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "<tr style='height:15px;'>";
        // tableA.innerHTML += "<td style='text-align:left;width:100%;' colspan='3' >服务站名:"+this.data[0].OWNER_CODE+" "+this.data.companyNameCn+"</td>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "<tr style='height:15px;'>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>维修起始日期:"+this.data[0].REPAIR_BEGIN_DATE+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>维修结束日期:"+this.data[0].REPAIR_COMPLETE_DATE+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:30%;'></td>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "<tr style='height:15px;'>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>起始索赔单号:"+this.data[0].MIN_CLAIM_NO+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>终止索赔单号:"+this.data[0].MAX_CLAIM_NO+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:30%;'></td>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "<tr style='height:15px;'>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>收获仓库:"+this.data[0].WAREHOUSE_NAME+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>运输方式:"+this.data[0].TRANSPORTATION_MODE+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:30%;'></td>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "<tr style='height:15px;'>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>发货日期:"+this.data[0].DELIVERY_DATE+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:35%;'>发货人:"+this.data[0].SHIPPER_NAME+"</td>";
        // tableA.innerHTML += "<td style='text-align:left;width:30%;'></td>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "<tr style='height:11px;'>";
        // tableA.innerHTML += "</tr>";
        // tableA.innerHTML += "</tbody>";
        // tableA.innerHTML += "</table>";
        tableA += '<tbody>';
        tableA += "<tr><td style='text-align:center;width:100%;font-size:20px' colspan='2'>装箱标签</td>";
        tableA += "<td style='text-align:center;width:100%;font-size:20px'></td></tr>";
        tableA += "<tr style='height:15px;'>";
        tableA += "<td style='text-align:left;width:35%;'>登记单号:"+this.data[0].DELIVERY_NO+'</td>';
        tableA += "<td style='text-align:right;width:35%;'>第"+(i+1)+'箱/共'+this.data[0].DELIVERY_COUNT+'箱</td>';
        tableA += "<td style='text-align:left;width:30%;'></td>";
        tableA += '</tr>';
        tableA += "<tr style='height:15px;'>";
        tableA += "<td style='text-align:left;width:100%;' colspan='3' >服务站名:"+this.data[0].OWNER_CODE+' '+this.data.companyNameCn+'</td>';
        tableA += '</tr>';
        tableA += "<tr style='height:15px;'>";
        tableA += "<td style='text-align:left;width:35%;'>维修起始日期:"+this.data[0].REPAIR_BEGIN_DATE+'</td>';
        tableA += "<td style='text-align:left;width:35%;'>维修结束日期:"+this.data[0].REPAIR_COMPLETE_DATE+'</td>';
        tableA += "<td style='text-align:left;width:30%;'></td>";
        tableA += '</tr>';
        tableA += "<tr style='height:15px;'>";
        tableA += "<td style='text-align:left;width:35%;'>起始索赔单号:"+this.data[0].MIN_CLAIM_NO+'</td>';
        tableA += "<td style='text-align:left;width:35%;'>终止索赔单号:"+this.data[0].MAX_CLAIM_NO+'</td>';
        tableA += "<td style='text-align:left;width:30%;'></td>";
        tableA += '</tr>';
        tableA += "<tr style='height:15px;'>";
        tableA += "<td style='text-align:left;width:35%;'>收获仓库:"+this.data[0].WAREHOUSE_NAME+'</td>';
        tableA += "<td style='text-align:left;width:35%;'>运输方式:"+this.data[0].TRANSPORTATION_MODE+'</td>';
        tableA += "<td style='text-align:left;width:30%;'></td>";
        tableA += '</tr>';
        tableA += "<tr style='height:15px;'>";
        tableA += "<td style='text-align:left;width:35%;'>发货日期:"+this.data[0].DELIVERY_DATE+'</td>';
        tableA += "<td style='text-align:left;width:35%;'>发货人:"+this.data[0].SHIPPER_NAME+'</td>';
        tableA += "<td style='text-align:left;width:30%;'></td>";
        tableA += '</tr>';
        tableA += "<tr style='height:11px;'>";
        tableA += '</tr>';
        tableA += '</tbody>';
        
      }

      console.log('=====>',tableA.innerHTML);
      document.getElementById('abc').innerHTML=tableA;
      //console.log("============>",document.getElementById('abc').innerHTML);
    }
  }
};

</script>
