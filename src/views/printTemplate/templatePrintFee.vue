<template>
  <!-- 打印委托书 -->
  <div v-show="isPreview" ref="print" style="width:100%; margin: 0 auto;">
    <div>
      <!-- <img src="@/assets/img/Lodop_logo.png" alt="" style="display: block; width: 400px; height: 100px;float: right;"> -->
      <div
        class="repair_contentbox"
        style="width:100%;float:left;margin-top:0px;text-align:center;margin-bottom:20px"
      >
        <p style="line-height:28px;margin:0;font-size:28px">{{ data.companyNameCn }}</p>
        <p style="line-height:28px;margin:0;margin-top:5px;font-size:28px">任务委托书</p>
      </div>
    </div>

    <!-- <div style="width:20%;height:120px;margin:0;margin-left:5%">
      <img src="@/assets/img/wechat.jpg" width="85px" style="margin-top:15px;margin-left:10px" />
    </div>-->

    <div>
      <table
        cellspacing="0"
        style="border-collapse: collapse; border-spacing: 0;border:none;box-sizing:border;margin-top:100px;font-size:12px;"
      >
        <tr style="height:15px;">
          <td width="8%"></td>
          <td align="left">
            <span style="font-weight:700;">车主姓名：</span>
            <span>{{ data.repairOrderMainInfo.OWNER_NAME }}</span>
          </td>
          <td width="20%"></td>
          <td align="left" width="13%">
            <span style="font-weight:700;">任务委托书号：</span>
            <span>{{ data.repairOrderMainInfo.RO_NO }}</span>
          </td>
        </tr>
        <tr style="height:15px">
          <td width="5%"></td>
          <td align="left" width="40%">
            <span style="font-weight:700;">联系人：</span>
            <span>{{ data.repairOrderMainInfo.DELIVERER }}</span>
          </td>
          <td width="20%"></td>
          <td align="left" width="40%">
            <span style="font-weight:700;">进厂时间：</span>
            <span>{{ data.repairOrderMainInfo.RO_CREATE_DATE }}</span>
          </td>
        </tr>
        <tr style="height:15px">
          <td width="8%"></td>
          <td align="left">
            <span style="font-weight:700;">移动电话：</span>
            <span>{{ data.repairOrderMainInfo.DELIVERER_MOBILE }}</span>
          </td>
          <td width="20%"></td>
          <td align="left" width="40%">
            <span style="font-weight:700;">预定交车时间：</span>
            <span>{{ data.repairOrderMainInfo.END_TIME_SUPPOSED }}</span>
          </td>
        </tr>
        <tr style="height:15px">
          <td width="5%"></td>
          <td align="left">
            <!-- <span style="font-weight:700;">电话：</span> <span>{{ data.repairOrderMainInfo.DELIVERER_PHONE }}</span> -->
            <span style="font-weight:700;">客户地址：</span>
            <span>{{ data.repairOrderMainInfo.ADDRESS }}</span>
          </td>
          <td width="20%"></td>
          <td align="left"></td>
          <td width="40%"></td>
        </tr>
      </table>

      <table
        cellspacing="0"
        border="1"
        cellpadding="8"
        style="margin-top:10px;font-size:3px; border:1;width:90%;margin-left:5%"
      >
        <tr style="height:1px;border: 1px solid black">
          <td align="center">底盘号</td>
          <td align="center">{{ data.repairOrderMainInfo.VIN }}</td>
          <td align="center">车系</td>
          <td align="center">{{ data.repairOrderMainInfo.SERIES_NAME }}</td>
          <td align="center">颜色</td>
          <td align="center">{{ data.repairOrderMainInfo.COLOR_NAME }}</td>
        </tr>
        <tr style="height:1px;border: 1px solid black">
          <td align="center">车牌号</td>
          <td align="center">{{ data.repairOrderMainInfo.LICENSE }}</td>
          <td align="center">车型</td>
          <td align="center">{{ data.repairOrderMainInfo.MODEL_NAME }}</td>
          <td align="center">行驶公里</td>
          <td align="center">{{ data.repairOrderMainInfo.IN_MILEAGE }}</td>
        </tr>
        <tr>
          <td align="center">发动机号</td>
          <td align="center">{{ data.repairOrderMainInfo.ENGINE_NO }}</td>
          <td align="center">生产日期</td>
          <td align="center">{{ data.repairOrderMainInfo.PRODUCT_DATE }}</td>
          <td align="center">购车日期</td>
          <td align="center">{{ data.repairOrderMainInfo.SALES_DATE }}</td>
        </tr>
        <tr>
          <td align="center">车辆用途</td>
          <td align="center">{{ data.repairOrderMainInfo.VEHICLE_PURPOSE_NAME }}</td>
          <td align="center">排放标准</td>
          <td align="center">{{ data.repairOrderMainInfo.DISCHARGE_STANDARD_NAME }}</td>
          <td align="center">洗车方式</td>
          <td align="center">{{ data.repairOrderMainInfo.WASH_TYPE_NAME }}</td>
        </tr>
        <tr style="height:1px;border: 1px solid black">
          <td align="center">省份</td>
          <td align="center">{{ data.repairOrderMainInfo.PROVINCE_NAME }}</td>
          <td align="center">城市</td>
          <td align="center">{{ data.repairOrderMainInfo.CITY_NAME }}</td>
          <td align="center">区县</td>
          <td align="center">{{ data.repairOrderMainInfo.DISTRICT_NAME }}</td>
        </tr>
        <tr style="height:1px;border: 1px solid black">
          <td align="center" colspan="1" style="font-weight:700;">客户描述</td>
          <td align="center" colspan="5">{{ data.repairOrderMainInfo.CUSTOMER_DESC }}</td>
        </tr>
      </table>
    </div>
    <!-- 维修项目 -->
    <div v-if="this.data.repairLabour.length > 0">
      <table
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
      >
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目代码</p>
            </th>
            <th style="font-size:12px;width:40%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目名称</p>
            </th>
            <th style="font-size:12px;width:8%;border-bottom:1px solid #000;">
              <p style="margin:0;">工时费</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">主修人</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">套餐名称</p>
            </th>
            <!-- <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目备注</p>
            </th>-->
          </tr>
        </thead>
        <tbody>
          <!-- -->
          <tr
            v-for="(item, index) in this.data.repairLabour"
            :key="index"
            style="font-size:12px;height:30px;line-height:26px;"
          >
            <div
              v-if="item.IS_ADDITION == 10041002 && item.NEEDLESS_REPAIR == 10041002 && item.NEEDLESS_REPAIR != 10041001"
            >
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_CODEF }}</td>
              <td
                style="text-align:center;line-height:26px;"
              >{{ item.LABOUR_NAME }}{{ item.SERVICE_PKG_CODE_STATUS == 0 ? "":"(第"+data.repairOrderMainInfo.MAINTAIN_TIMES+"次)"}}</td>
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_AMOUNT }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.CHARGE_PARTITION_NAME }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.TECHNICIAN_NAME }}</td>
              <td
                style="text-align:center;line-height:26px;"
              >{{ item.SERVICE_PKG_CODE != '' ? item.SERVICE_PKG_CODE : '' }}{{ item.PACKAGE_CODE != '' ? item.PACKAGE_CODE : '' }}{{ item.ACTIVITY_CODE != '' ? item.ACTIVITY_CODE : '' }}</td>

              <!-- <td style="text-align:center;line-height:26px;">{{ item.REMARK }}</td> -->
            </div>
          </tr>
          <tr style="font-size:12px;height:30px;line-height:26px;border-top:1px solid #000;">
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="2"
            >小计</td>
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="1"
            >{{ this.labourAmount }}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;" colspan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="this.isRepairLabour">
      <table
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
      >
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="7" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">维修增项</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目代码</p>
            </th>
            <th style="font-size:12px;width:40%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目名称</p>
            </th>
            <th style="font-size:12px;width:8%;border-bottom:1px solid #000;">
              <p style="margin:0;">工时费</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">主修人</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">套餐名称</p>
            </th>
            <!-- <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目备注</p>
            </th>-->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in this.data.repairLabour"
            :key="index"
            style="font-size:12px;height:30px;line-height:26px;"
          >
            <div
              v-if="item.IS_ADDITION == 10041001 && item.NEEDLESS_REPAIR == 10041002 && item.NEEDLESS_REPAIR != 10041001"
            >
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_CODEF }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_NAME }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_AMOUNT }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.CHARGE_PARTITION_NAME }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.TECHNICIAN_NAME }}</td>
              <td
                style="text-align:center;line-height:26px;"
              >{{ item.SERVICE_PKG_CODE != '' ? item.SERVICE_PKG_CODE : '' }}{{ item.PACKAGE_CODE != '' ? item.PACKAGE_CODE : '' }}{{ item.ACTIVITY_CODE != '' ? item.ACTIVITY_CODE : '' }}</td>
              <!-- <td style="text-align:center;line-height:26px;">{{ item.REMARK }}</td> -->
            </div>
          </tr>
          <tr style="font-size:12px;height:30px;line-height:26px; border:1px solid #000;">
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="2"
            >小计</td>
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="1"
            >{{ this.labourIncrementAmount }}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;" colspan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>

     <!-- <div>
      <table
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
      >
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="7" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">建议维修项目</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目代码</p>
            </th>
            <th style="font-size:12px;width:40%;border-bottom:1px solid #000;">
              <p style="margin:0;">项目名称</p>
            </th>
            <th style="font-size:12px;width:8%;border-bottom:1px solid #000;">
              <p style="margin:0;">工时费</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
            <th style="font-size:12px;width:12%;border-bottom:1px solid #000;">
              <p style="margin:0;">主修人</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">套餐名称</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in this.data.repairLabour"
            :key="index"
            style="font-size:12px;height:30px;line-height:26px;"
          >
            <div
              v-if="item.IS_ADDITION != 10041001 && item.NEEDLESS_REPAIR != 10041002 && item.NEEDLESS_REPAIR == 10041001"
            >
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_CODEF }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_NAME }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.LABOUR_AMOUNT }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.CHARGE_PARTITION_NAME }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.TECHNICIAN_NAME }}</td>
              <td
                style="text-align:center;line-height:26px;"
              >{{ item.SERVICE_PKG_CODE != '' ? item.SERVICE_PKG_CODE : '' }}{{ item.PACKAGE_CODE != '' ? item.PACKAGE_CODE : '' }}{{ item.ACTIVITY_CODE != '' ? item.ACTIVITY_CODE : '' }}</td>
            </div>
          </tr>
        </tbody>
      </table>
    </div> -->
    <!-- 附加项目-->
    <!-- <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="7" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">附加项目</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">附加项目代码</p>
            </th>
            <th style="font-size:12px;width:40%;border-bottom:1px solid #000;">
              <p style="margin:0;">附加项目名称</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">附加项目收费</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">附加项目备注</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.data.addItem" :key="index" style="font-size:12px;height:30px;line-height:26px;">
            <div>
              <td style="text-align:center;line-height:26px;">{{ item.ADD_ITEM_CODE }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.ADD_ITEM_NAME }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.ADD_ITEM_PRICE }}</td>
              <td style="text-align:center;line-height:26px;">{{ item.CHARGE_PARTITION_CODE }}</td>
              <td style="text-align:center;line-height:26px;">{{ data.REMARK }}</td>
            </div>
          </tr>
          <tr style="font-size:12px;height:30px;line-height:26px;border-top:1px solid #000;">
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;" colspan="3">小计</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;" colspan="2">{{ this.other }}</td>
          </tr>
        </tbody>
      </table>
    </div>-->

    <!-- 预估备件 -->

    <div v-if="this.data.repairPart.length > 0">
      <table
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;"
      >
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="7" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">备件</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:17%;border-bottom:1px solid #000;">
              <p style="margin:0;">备件代码</p>
            </th>
            <th style="font-size:12px;width:35%;border-bottom:1px solid #000;">
              <p style="margin:0;">备件名称</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">性质</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">备件数量</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">出库单价</p>
            </th>
            <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;">合计金额</p>
            </th>
            <th style="font-size:12px;width:18%;border-bottom:1px solid #000;">
              <p style="margin:0;">渠道</p>
            </th>
            <!-- <th style="font-size:12px;width:10%;border-bottom:1px solid #000;">
              <p style="margin:0;"></p>
            </th>-->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in this.data.repairPart"
            :key="index"
            style="font-size:12px;height:30px;line-height:26px;"
          >
            <td style="text-align:center;line-height:26px;">{{ item.PART_NO }}</td>
            <td style="text-align:center;line-height:26px;">{{ item.PART_NAME }}</td>
            <td style="text-align:center;line-height:26px;">{{ item.CHARGE_PARTITION_NAME }}</td>
            <td style="text-align:center;line-height:26px;">{{ item.PART_QUANTITY }}</td>
            <td style="text-align:center;line-height:26px;">{{ item.PART_SALES_PRICE }}</td>
            <td style="text-align:center;line-height:26px;">{{ item.RECEIVE_AMOUNT }}</td>
            <td
              style="text-align:center;line-height:26px;"
            >{{ item.OEM_TAG == 10451002 ? '原厂' : '副厂' }}</td>
            <!-- <td style="text-align:center;line-height:26px;"></td> -->
          </tr>
          <tr style="font-size:12px;height:30px;line-height:26px;">
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="3"
            >小计</td>
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="1"
            >{{ this.repairPartNum }}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;" colspan="1"></td>
            <td
              style="text-align:center;line-height:26px; border-top:1px solid #000;"
              colspan="1"
            >{{ this.repairPart }}</td>
            <td style="text-align:center;line-height:26px; border-top:1px solid #000;" colspan="1"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 专用工具-->
    <!-- <div>
      <table cellspacing="0" style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th colspan="6" style="font-size:13px;width:100%;border-bottom:1px solid #000;">
              <p style="margin:0;">专用工具</p>
            </th>
          </tr>
        </thead>
        <thead style>
          <tr style="height:30px;border-bottom:1px solid #000;">
            <th style="font-size:12px;width:30%;border-bottom:1px solid #000;border-right:1px solid #000;">
              <p style="margin:0;">工具代码</p>
            </th>
            <th style="font-size:12px;width:70%;border-bottom:1px solid #000;">
              <p style="margin:0;">工具名称</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.data.repairTool" :key="index" style="font-size:12px;height:30px;line-height:26px;">
            <td style="text-align:center;line-height:26px;border-right:1px solid #000;">{{ item.TOOL_CODE }}</td>
            <td style="text-align:center;line-height:26px;">{{ item.TOOL_NAME }}</td>
          </tr>
        </tbody>
      </table>
    </div>-->
    <!--文字描述 -->
    <div>
      <table
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;"
      >
        <tbody>
          <tr style="height:15px;">
            <td
              style="text-align:left;font-size:13px; width:15%;font-weight:700;"
              colspan="2"
            >预估费用合计：</td>
            <td style="text-align:left; width:45%" colspan="2">{{ amount }}</td>
            <td style="text-align:left; width:50%;font-weight:700;" colspan="4"></td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left; width:14%;font-weight:700;">终检(质检员)：</td>
            <td style="text-align:left;width:12%;border-bottom:1px solid #000;">机修</td>
            <td style="text-align:left;width:12%;border-bottom:1px solid #000;">钣金</td>
            <td style="text-align:left;width:12%;border-bottom:1px solid #000;">喷漆</td>
            <td style="text-align:left; width:14%;font-weight:700;">终检(质检员)：</td>
            <td style="text-align:left;width:12%;border-bottom:1px solid #000;">机修</td>
            <td style="text-align:left;width:12%;border-bottom:1px solid #000;">钣金</td>
            <td style="text-align:left;width:12%;border-bottom:1px solid #000;">喷漆</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:right; width:14%;font-weight:700;">服务总监：</td>
            <td style="text-align:left; width:45%" colspan="7">{{ data.employeeName }}</td>
          </tr>

          <tr style="height:15px;">
            <td style="text-align:right; width:14%;font-weight:700;">地&emsp;&emsp;&emsp;&emsp;址：</td>
            <td style="text-align:left; width:45%" colspan="3">{{ data.addressZh }}</td>
            <td style="text-align:right; width:14%;font-weight:700;">服务顾问：</td>
            <td
              style="text-align:left; width:45%"
              colspan="3"
            >{{ data.repairOrderMainInfo.SERVICE_ADVISOR_NAME }}</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:right; width:14%;font-weight:700;">电&emsp;&emsp;&emsp;&emsp;话：</td>
            <td style="text-align:left; width:45%" colspan="3">{{ data.phone }}</td>
            <td style="text-align:right; width:14%;font-weight:700;">制&emsp;&emsp;&emsp;&emsp;单：</td>
            <td style="text-align:left; width:45%" colspan="3">{{ data.user }}</td>
          </tr>
          <tr style="height:15px;">
            <td
              style="text-align:right; width:14%;font-weight:700"
              colspan="1"
            >说&emsp;&emsp;&emsp;&emsp;明：</td>
            <td style="text-align:left; width:45%" colspan="7">{{ data.user }}</td>
          </tr>

          <tr style="height:15px;" v-for="(item, index) in this.data.repairExplain" :key="index">
            <!-- <td style="text-align:right;margin-top:0px;width:14%;vertical-align:top;font-weight:700;">说&emsp;&emsp;&emsp;&emsp;明：</td> -->
            <td
              style="width:45% ;font-weight:700"
              colspan="7"
            >&emsp;&emsp; &emsp;&emsp;{{index+1}}.{{item.DEFAULT_VALUE}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 客户签字 -->
    <div>
      <table
        cellspacing="0"
        style="margin-top:10px;width:90%;margin-left:5%;border-collapse: collapse; border-spacing: 0;box-sizing:border;"
      >
        <tbody>
          <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <!-- <td style="text-align:left;font-size:13px; width:13%;" colspan="1">
              <div style="width:5%;height:120px;margin:0;float:left;">
                <img src="@/assets/img/wechat.jpg" width="85px" style="margin-top:15px;margin-left:10px" />
              </div>
            </td>-->
            <td
              style="text-align:left;font-size:13px; width:10%;font-weight:700;vertical-align:bottom;"
              colspan="1"
            >客户签字：</td>
            <td
              style="text-align:left;font-size:13px;border-bottom:1px solid #000; width:10%"
              colspan="1"
            ></td>
          </tr>
          <!-- <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <td style="text-align:left;font-size:13px; width:10%;" colspan="3">欢迎使用“奥迪小程序”</td>
          </tr>
          <tr style="height:15px;">
            <td style="text-align:left;font-size:13px; width:45%" colspan="1"></td>
            <td style="text-align:left;font-size:13px; width:10%;" colspan="3">以告知客户维修所使用备件/附件的渠道来源</td>
          </tr>-->
        </tbody>
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
/**
 * @Author: 焦质晔
 * @Date: 2019/4/22
 * @Last Modified by: 焦质晔
 * @Last Modified time: 2019-12-03 15:52:21
 **/
import moment from 'moment';
import { getUser } from '@/assets/js/auth';
// import { searchRoleByCode } from '@/api/common/empSelect/index';
// import dictCode from '@/utils/dictCode';

export default {
  name: 'templatePrintFee',
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
      isRepairLabour: false,
      isRepairLabour2: false,
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      labourAmount: 0.0, // 项目工时费工时费
      labourIncrementAmount: 0.0, // 项目增项工时费工时费
      repairPart: 0.0, // 维修零件费
      repairPartNum: 0, // 维修零件个数
      other: 0.0, // 附加费
      amount: 0.0, // 合计金额
      discountAmount: 0.0, // 优惠金额
      receivedAmount: 0.0 // 付费金额
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
    this.sumMoney();
  },
  mounted() {
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    },
    // 计算费用金额
    sumMoney() {
      // 实收金额
      let Due = {
        labourAmount: 0.0,
        labourIncrementAmount: 0.0,
        repairPart: 0.0,
        other: 0.0
      };

      let amountNum = 0;
      // 项目工时费工时费
      for (const item of this.data.repairLabour) {
        if (item.IS_ADDITION == 10041002 && item.NEEDLESS_REPAIR == 10041002 && item.NEEDLESS_REPAIR != 10041001) {
          this.labourAmount += item.LABOUR_AMOUNT;
          Due.labourAmount += item.RECEIVE_AMOUNT;
          if (item.CHARGE_PARTITION_CODE != 'S') {
           // amountNum += item.RECEIVE_AMOUNT;

            amountNum=parseFloat(amountNum)+parseFloat(item.LABOUR_AMOUNT);
          }
          this.isRepairLabour2 = true;
        }
      }
      console.log('++++++++++++++++++++++++++++++++',amountNum);
      // 项目增项工时费工时费
      for (const item of this.data.repairLabour) {
        if (item.IS_ADDITION == 10041001 && item.NEEDLESS_REPAIR == 10041002 && item.NEEDLESS_REPAIR != 10041001) {
          this.labourIncrementAmount += item.LABOUR_AMOUNT;
          Due.labourIncrementAmount += item.RECEIVE_AMOUNT;
          this.isRepairLabour = true;
        }
      }

      for (const item of this.data.repairPart) {
        if (item.RECEIVE_AMOUNT != '' && item.RECEIVE_AMOUNT != null) {
          this.repairPart += item.RECEIVE_AMOUNT; // q钱
          Due.repairPart += item.RECEIVE_AMOUNT;

          if (item.CHARGE_PARTITION_CODE != 'S') {
           // amountNum += item.RECEIVE_AMOUNT;
            amountNum=parseFloat(amountNum)+parseFloat(item.RECEIVE_AMOUNT);
          }
        }

        this.repairPartNum += item.PART_QUANTITY; // 数量
      }
      for (const item of this.data.addItem) {
        this.other += item.ADD_ITEM_PRICE;
        Due.other += item.ADD_ITEM_AMOUNT;
      }
      // this.amount = (this.labourAmount + this.repairPart + this.other + this.labourIncrementAmount).toFixed(2);
      this.amount = amountNum.toFixed(2);
      this.labourAmount = this.labourAmount.toFixed(2);
      this.repairPart = this.repairPart.toFixed(2);
      this.other = this.other.toFixed(2);
      this.receivedAmount = (Due.labourAmount + Due.repairPart + Due.other).toFixed(2);
      this.discountAmount = (this.amount - this.receivedAmount).toFixed(2);
      this.data.repairOrderMainInfo.RO_CREATE_DATE = moment(this.data.repairOrderMainInfo.RO_CREATE_DATE).format('YYYY-MM-DD HH:mm:ss');
      this.data.repairOrderMainInfo.END_TIME_SUPPOSED = moment(this.data.repairOrderMainInfo.END_TIME_SUPPOSED).format('YYYY-MM-DD HH:mm:ss');
      for (let i = 0; i < this.data.repairLabour.length; i++) {
        for (let j = 0; j < this.data.technicians.length; j++) {
          if (this.data.repairLabour[i].TECHNICIAN == this.data.technicians[j].userId) {
            this.data.repairLabour[i].TECHNICIAN_NAME = this.data.technicians[j].employeeName;
            break;
          }
        }
      }
    }
  }
};
</script>
