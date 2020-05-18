<template>
  <!-- 打印估价单 -->
  <div v-show="isPreview" ref="print" style="width:95%; margin: 0 auto;">
    <div>
      <div class="repair_contentbox" style="width:50%;float:left;margin-top:20px;">
        <p style="line-height:20px;margin:0;">林肯品牌授权经销商</p>
        <p style="line-height:20px;margin:0;">Lincoln China Authorized Dealer</p>
        <p style="font-weight:bold;line-height:20px;margin:0;font-size:20px;">{{ data.companyNameCn }}</p>
        <p style="line-height:20px;margin:0;">{{ data.companyNameEn }}</p>
        <p style="margin:0;font-size:14px;width:20%;float:left;margin-top:10px;">地址：</p>
        <span style="display:block;float:left;width:80%;margin:0;font-size:14px;">{{ data.addressZh }}</span>
        <p style="clear:both;margin:0;float:left;width:20%;font-size:14px;">Address：</p>
        <span style="display:block;float:left;width:80%;margin:0;font-size:14px;">{{ data.addressEn }}</span>
        <p style="clear:both;float:left;width:50%;font-size:14px;margin:0;margin-top:20px;">
          电话 Tel：
          <span style="font-size:14px;margin:0;">{{ data.phone }}</span>
        </p>
        <p style="float:left;width:50%;font-size:14px;margin:0;margin-top:20px;">
          邮编 Zip Code：
          <span style="font-size:14px;margin:0;">{{ data.zipCode }}</span>
        </p>
        <p style="clear:both;margin:0;font-size:14px;margin-top:10px;">
          传真 Fax：
          <span style="font-size:14px;margin:0;">{{ data.fax }}</span>
        </p>
        <p style="clear:both;margin:0;font-size:16px;margin-top:20px;">{{ data.OWNER_NAME }}</p>
        <p style="clear:both;margin:0;font-size:14px;margin-top:10px;">
          手机 ：
          <span v-if="data.ISPhone == 10041001">{{ data.DELIVERER_MOBILE }}</span>
        </p>
        <p style="clear:both;margin:0;margin-top:20px;font-size:14px;">
          服务工程师：
          <span>{{ data.SERVICE_ADVISOR }}</span>
        </p>
      </div>
      <div class="repair_rightbox" style="width:50%;float:right;box-sizing:border-box;margin-bottom:10px;">
        <h2 style="text-align:center;font-size:22px;font-weight:bold;margin:0;padding:0;line-height:30px;">估价单 /Quotation</h2>
        <div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;">估价单号 Quotation</div>
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">
              报价时间 Quotation Time
            </div>
          </div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;">{{ data.ESTIMATE_NO }}</div>
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">{{ data.RO_CREATE_DATE }}</div>
          </div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;">客户编号 Repair Customer No.</div>
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">
              打印日期 Print Time
            </div>
          </div>
          <div style="border:1px solid #000;height:30px;font-size:12px;">
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;">{{ data.OWNER_NO }}</div>
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">{{ nowTime }}</div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;width:100%;margin:0;margin-top:40px;">
      <div style="clear:both;border-top:1px solid #000;">
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">车架号 VIN</div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">
          车牌号 Plate No.
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">
          发动机 Engine No.
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">车系 Series</div>
        <div
          style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;"
        >
          车型 Model
        </div>
      </div>
      <div style="clear:both;border-top:1px solid #000;">
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.VIN }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.LICENSE }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.ENGINE_NO }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.SERIES }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;">
          {{ data.MODEL }}
        </div>
      </div>
      <div style="clear:both;border-top:1px solid #000;">
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">
          购车日期 Purchase Date
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">
          进/出厂里程 Mileage In/Out
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">
          送修人 Deliverer
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;margin:0;line-height:26px;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">
          送修人手机 Deliverer Mobile
        </div>
        <div
          style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;"
        >
          预约单号 Appointment No.
        </div>
      </div>
      <div style="clear:both;border-top:1px solid #000;borde-bottom:1px solid #000;">
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.SALES_DATE }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.MILEAGE_INOUT }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.DELIVERER }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;">{{ data.DELIVERER_MOBILE }}</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:10px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;">
          {{ data.appointment }}
        </div>
      </div>
      <div style="height:60px;clear:both;border:1px solid #000;">
        <p style="height:30px;line-height:26px;margin:0;margin-left:20px;font-size:10px;">送修问题： {{ data.CUSTOMER_DESC }}</p>
        <p style="height:30px;line-height:26px;margin:0;margin-left:20px;font-size:10px;">检查结果： {{ data.RO_TROUBLE_DESC }}</p>
      </div>
    </div>
    <table id="print-header" cellspacing="0" width="100%" style="border-collapse: collapse;margin-top:10px; border-spacing: 0;border:1px solid #000;box-sizing:border;">
      <thead style>
        <tr style="height:30px;background:#eee;border-bottom:1px solid #000;">
          <th style="font-size:12px;width:5%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">序号</p>
            <p style="margin:0;font-size:12px;">No</p>
          </th>
          <th style="font-size:12px;width:5%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">类别</p>
            <p style="margin:0;font-size:12px;">Type</p>
          </th>
          <th style="font-size:12px;width:10%;border-right:1px solid #000;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">项目</p>
            <p style="margin:0;font-size:12px;">Item</p>
          </th>
          <th style="font-size:12px;width:21%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">描述</p>
            <p style="margin:0;font-size:12px;">Description</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">配件类别</p>
            <p style="margin:0;font-size:12px;">PartType</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">数量</p>
            <p style="margin:0;font-size:12px;">Quantity</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">费用说明</p>
            <p style="margin:0;font-size:12px;">By</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">单价/元</p>
            <p style="margin:0;font-size:12px;">Unit Price</p>
          </th>
          <th style="font-size:12px;width:10%;border-right:1px solid #000;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">折扣率</p>
            <p style="margin:0;font-size:12px;">Disc%</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;font-size:12px;">总价/元</p>
            <p style="margin:0;font-size:12px;">Total Price</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.itemList" :key="index" style="font-size:12px;height:30px;line-height:26px;">
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ index + 1 }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ item.type }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;border-right:1px solid #000;">{{ item.item }}</td>
          <td style="text-align:left;line-height:26px;font-size:12px;">{{ item.description }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ item.partType }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ item.quantity }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ item.by }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ item.unitPrice }}</td>
          <td style="text-align:center;line-height:26px;border-right:1px solid #000;font-size:12px;">{{ item.disc }}</td>
          <td style="text-align:center;line-height:26px;font-size:12px;">{{ item.totalPrice }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div style="page-break-after: always">&nbsp;</div> -->
    <div style="clear:both;margin:0;margin:10px 0;">
      <div style="width:25%;float:left;box-sizing:border-box;border:1px solid #000;border-right:none;margin:0;padding:0 10px;height:90px;">
        <div style="margin:0;margin-top:5px;height:30px;">
          <div style="margin:0;width:80%;float:left;font-size:12px;">
            <p style="margin:0;">带走旧件</p>
            <p style="margin:0;">Take away the used part</p>
          </div>
          <div style="margin:0;width:20%;float:left;text-align:center;">
            <input v-if="data.IS_TAKE_PART_OLD === '是'" type="checkbox" checked />
            <input v-else type="checkbox" />
          </div>
        </div>
      </div>
      <div style="width:40%;float:left;box-sizing:border-box;border:1px solid #000;border-right:none;margin:0;height:90px;">
        <p style="font-size:12px;margin-top:35px">用户在接车时应凭此报价预算单，请妥善保存，在接车时按实际结算付账</p>
      </div>
      <div style="width:35%;float:left;box-sizing:border-box;border:1px solid #000;margin:0;height:90px;">
        <div style="margin:0;padding:0;box-sizing:border-box;padding:0 10px;width:65%;float:left;">
          <div style="line-height:20px;font-size:12px;height:20px;border-right:1px solid #000;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">工时费</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Labour:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;border-right:1px solid #000;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">维修零件费</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Parts:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;border-right:1px solid #000;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">合计金额</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Total:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;border-right:1px solid #000;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">预估金额</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Due:</div>
          </div>
        </div>
        <div style="width:35%;float:left;">
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">{{ data.labour }}</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">{{ data.parts }}</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">{{ data.total }}</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">{{ data.due }}</div>
        </div>
      </div>
    </div>
    <!-- 签字 -->
    <div style="clear:both;margin-top:10px;">
      <div style="width:15%;height:120px;margin:0;float:left;">
        <!-- <img src="@/assets/img/wechat.jpg" width="85px" style="padding-left:20px;padding-top:20px" /> -->
      </div>
      <div style="float:left;width:25%;padding:0 10px;box-sizing:border-box;">
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;"></div>
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:12px;">关注公众号</p>
          <p style="margin:0;line-height:20px;font-size:12px;">Follow US</p>
        </div>
      </div>
      <div style="float:left;width:30%;padding:0 10px;box-sizing:border-box;">
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:12px;">服务工程师签字:</p>
          <p style="margin:0;line-height:20px;font-size:12px;">Craftsman Signature:</p>
        </div>
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:12px;">日期:</p>
          <p style="margin:0;line-height:20px;font-size:12px;">Date:</p>
        </div>
      </div>
      <div style="float:left;width:30%;padding:0 10px;box-sizing:border-box;">
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:12px;">客户签字:</p>
          <p style="margin:0;line-height:20px;font-size:12px;">Customer Signature:</p>
        </div>
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:12px;">日期:</p>
          <p style="margin:0;line-height:20px;font-size:12px;">Date:</p>
        </div>
      </div>
    </div>

    <!-- 维修建议 -->
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
      <tr>
        <td align="center" style="height:40px;line-height:40px;border-bottom:1px solid #000;background:#eee;">备注 Remark</td>
      </tr>
      <tr>
        <td align="center" style="min-height:40px;border-bottom:1px solid #000">{{ data.BALANCE_REMARK }}</td>
      </tr>
    </table>

    <p style="font-size:12px;clear:both;">温馨提示：请不要将贵重物品遗忘在车内。Gentle Reminder: Please do not leave your personal belongings in the vehicle.</p>
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
  name: 'templatePrintEvaluation',
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
      nowTime: moment().format('YYYY-MM-DD hh:mm:ss')
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
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
    console.log(JSON.stringify(this.data), 'data数据-----');
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
