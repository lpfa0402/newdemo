<template>
  <!-- 打印委托书 -->
  <div v-show="isPreview" ref="print" style="width: 800px; margin: 0 auto;">
    <div>
      <div class="repaircaption">2019/8/24</div>
      <div class="repair_contentbox" style="width:50%;float:left;margin-top:20px;">
        <p style="line-height:20px;margin:0;">林肯品牌授权经销商</p>
        <p style="line-height:20px;margin:0;">Lincoln China Authorized Dealer</p>
        <p style="font-weight:bold;line-height:20px;margin:0;font-size:22px;">上海绿地盛林汽车销售服务有限公司</p>
        <p style="line-height:20px;margin:0;">Shanghai Greenland Shenglin Automobile Sales & Service Co.,Ltd.</p>
        <p style="margin:0;font-size:14px;width:20%;float:left;margin-top:10px;">地址：</p>
        <span style="display:block;float:left;width:80%;margin:0;font-size:14px;">上海市静安区康宁路956号（近场中路）</span>
        <p style="clear:both;margin:0;float:left;width:20%;font-size:14px;">Address：</p>
        <span style="display:block;float:left;width:80%;margin:0;font-size:14px;">No.956 Kangning Road, Jing'an District,200443, Shanghai</span>
        <p style="clear:both;float:left;width:50%;font-size:14px;margin:0;margin-top:20px;">
          电话 Tel：
          <span style="font-size:14px;margin:0;">029-86128512</span>
        </p>
        <p style="float:left;width:50%;font-size:14px;margin:0;margin-top:20px;">
          邮编 Zip Code：
          <span style="font-size:14px;margin:0;">210000</span>
        </p>
        <p style="clear:both;margin:0;font-size:14px;margin-top:10px;">
          传真 Fax：
          <span style="font-size:14px;margin:0;">0571-86016009</span>
        </p>
        <p style="clear:both;margin:0;font-size:16px;margin-top:20px;">潘寅寅 先生</p>
        <p style="clear:both;margin:0;font-size:14px;margin-top:10px;">
          手机 ：
          <span>18811111111</span>
        </p>
        <p style="clear:both;margin:0;margin-top:20px;font-size:14px;">
          服务工程师：
          <span>陈省省</span>
        </p>
      </div>
      <div class="repair_rightbox" style="width:50%;float:right;box-sizing:border-box;margin-bottom:10px;">
        <!-- <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;">
          <tr>
            <td align="right">
              <img src="@/assets/img/print-logo.jpg" />
            </td>
          </tr>
        </table> -->
        <h2 style="text-align:center;font-size:22px;font-weight:bold;margin:0;padding:0;line-height:30px;">维修委托书 /REPAIR ORDER</h2>
        <div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;">委托书号 Repair Order No.</div>
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">
              开单时间 Order Creation Time
            </div>
          </div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;">RO1908070002</div>
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">2019-08-07 15:53</div>
          </div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;">客户编号 Customer No.</div>
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;margin:0;border-left:1px solid #000;box-sizing:border-box;">
              预交车时间 Estimated Deliver Time
            </div>
          </div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;">OW1904190001</div>
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">2019-08-08 05:15</div>
          </div>
          <div style="border-top:1px solid #000;height:30px;font-size:12px;border-left:1px solid #000;border-right:1px solid #000;">
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;line-height:26px;margin:0;">索赔单号 Claim No.</div>
            <div style="width:50%;float:left;background:#eee;text-align:center;height:30px;text-align:center;border-left:1px solid #000;line-height:26px;margin:0;box-sizing:border-box;">
              打印日期 Print Time
            </div>
          </div>
          <div style="border:1px solid #000;height:30px;font-size:12px;">
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;">J87002</div>
            <div style="width:50%;float:left;height:30px;text-align:center;line-height:26px;margin:0;border-left:1px solid #000;box-sizing:border-box;">2019-08-24 14:26</div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;width:100%;margin:0;margin-top:40px;">
      <div style="clear:both;border-top:1px solid #000;">
        <div style="width:25%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">车架号 VIN</div>
        <div style="width:15%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">
          车牌号 Plate No.
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">
          发动机 Engine No.
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">车系 Series</div>
        <div
          style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;"
        >
          车型 Model
        </div>
      </div>
      <div style="clear:both;border-top:1px solid #000;">
        <div style="width:25%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">1LN6L9R97H5637050</div>
        <div style="width:15%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">沪A10008</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">1234567</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">2019林肯 MKZ</div>
        <div style="width:20%;float:left;height:30px;text-align:center;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;">MKZ H混合动力 尊雅版</div>
      </div>
      <div style="clear:both;border-top:1px solid #000;">
        <div style="width:25%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">
          进/出厂里程 Mileage In/Out
        </div>
        <div style="width:15%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">
          送修人 Deliverer
        </div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">送修人手机 Deliverer Mobile</div>
        <div style="width:20%;float:left;height:30px;text-align:center;background:#eee;margin:0;line-height:26px;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">
          预约单号 Appointment No.
        </div>
        <div
          style="width:20%;float:left;height:30px;text-align:center;background:#eee;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;"
        ></div>
      </div>
      <div style="clear:both;border-top:1px solid #000;borde-bottom:1px solid #000;">
        <div style="width:25%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">10000/10000</div>
        <div style="width:15%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">潘寅寅</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;">18811111111</div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;"></div>
        <div style="width:20%;float:left;height:30px;text-align:center;line-height:26px;margin:0;font-size:12px;box-sizing:border-box;border-left:1px solid #000;border-right:1px solid #000;"></div>
      </div>
      <div style="height:60px;clear:both;border:1px solid #000;">
        <p style="height:30px;line-height:26px;margin:0;margin-left:20px;font-size:12px;">送修问题： 测试客户接待页面查询缓慢</p>
        <p style="height:30px;line-height:26px;margin:0;margin-left:20px;font-size:12px;">检查结果： 测试客户接待页面查询缓慢</p>
      </div>
    </div>
    <h3 style="clear:both;line-height:30px;font-size:14px;font-weight:normal;margin:0;">* 代表增项</h3>
    <table cellspacing="0" width="100%" style="border-collapse: collapse; border-spacing: 0;border:1px solid #000;box-sizing:border;">
      <thead style>
        <tr style="height:30px;background:#eee;border-bottom:1px solid #000;">
          <th style="font-size:12px;width:7%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">序号</p>
            <p style="margin:0;">No</p>
          </th>
          <th style="font-size:12px;width:8%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">类别</p>
            <p style="margin:0;">Type</p>
          </th>
          <th style="font-size:12px;width:10%;border-right:1px solid #000;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">项目</p>
            <p style="margin:0;">Item</p>
          </th>
          <th style="font-size:12px;width:26%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">描述</p>
            <p style="margin:0;">Description</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">数量</p>
            <p style="margin:0;">Quantity</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">费用说明</p>
            <p style="margin:0;">By</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">单价/元</p>
            <p style="margin:0;">Unit Price</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">折扣率</p>
            <p style="margin:0;">Disc%</p>
          </th>
          <th style="font-size:12px;width:10%;background:#eee;border-bottom:1px solid #000;">
            <p style="margin:0;">总价/元</p>
            <p style="margin:0;">Total Price</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style="font-size:12px;height:30px;line-height:26px;">
          <td style="text-align:center;line-height:26px;">1</td>
          <td style="text-align:center;line-height:26px;">L</td>
          <td style="text-align:center;line-height:26px;border-right:1px solid #000;">18B211</td>
          <td style="text-align:center;line-height:26px;">对PCM重新编程和清除故障代码</td>
          <td style="text-align:center;line-height:26px;">0.30</td>
          <td style="text-align:center;line-height:26px;">索赔</td>
          <td style="text-align:center;line-height:26px;">0.00</td>
          <td style="text-align:center;line-height:26px;">1</td>
          <td style="text-align:center;line-height:26px;">0.00</td>
        </tr>
      </tbody>
    </table>
    <div style="clear:both;margin:0;margin:10px 0;">
      <div style="width:25%;float:left;box-sizing:border-box;border:1px solid #000;border-right:none;margin:0;padding:0 10px;height:130px;">
        <div style="margin:0;margin-top:5px;height:30px;">
          <div style="margin:0;width:80%;float:left;font-size:12px;">
            <p style="margin:0;">洗车</p>
            <p style="margin:0;">Car Washing Included</p>
          </div>
          <div style="margin:0;width:20%;float:left;text-align:center;">
            <el-checkbox :value="true"></el-checkbox>
          </div>
        </div>
        <div style="margin:0;margin-top:5px;height:30px;">
          <div style="margin:0;width:80%;float:left;font-size:12px;">
            <p style="margin:0;">带走旧件</p>
            <p style="margin:0;">Take away the used part</p>
          </div>
          <div style="margin:0;width:20%;float:left;text-align:center;">
            <el-checkbox :value="true"></el-checkbox>
          </div>
        </div>
        <div style="margin:0;margin-top:5px;height:30px;">
          <div style="margin:0;width:80%;float:left;font-size:12px;">
            <p style="margin:0;">客户在厂等待</p>
            <p style="margin:0;">Customer waiting at thestore</p>
          </div>
          <div style="margin:0;width:20%;float:left;text-align:center;">
            <el-checkbox :value="true"></el-checkbox>
          </div>
        </div>
      </div>
      <div style="width:40%;float:left;box-sizing:border-box;border:1px solid #000;border-right:none;margin:0;height:130px;"></div>
      <div style="width:35%;float:left;box-sizing:border-box;border:1px solid #000;margin:0;height:130px;">
        <div style="margin:0;padding:0;box-sizing:border-box;padding:0 10px;width:65%;float:left;">
          <div style="line-height:20px;font-size:12px;height:20px;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">工时费</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Labour:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">维修零件费</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Parts:</div>
          </div>
          <div style="line-height:20px;border-bottom:1px dashed #000;font-size:12px;height:20px;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">附加费</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Other:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">合计金额</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Total:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">优惠金额</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Discount:</div>
          </div>
          <div style="line-height:20px;font-size:12px;height:20px;">
            <div style="width:50%;float:left;margin:0;line-height:20px;">付费金额</div>
            <div style="width:50%;float:left;margin:0;line-height:20px;">Due:</div>
          </div>
        </div>
        <div style="width:35%;float:left;">
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">0.00</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">0.00</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;border-bottom:1px dashed #000;">0.00</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">0.00</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">0.00</div>
          <div style="width:100%;line-height:20px;text-align:right;box-sizing:border-box;margin:0;padding:0;font-size:12px;">0.00</div>
        </div>
      </div>
    </div>
    <!-- 签字 -->
    <div style="clear:both;margin-top:10px;">
      <div style="width:20%;height:120px;margin:0;float:left;"></div>
      <div style="float:left;width:25%;padding:0 10px;box-sizing:border-box;">
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;"></div>
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:14px;">关注公众号</p>
          <p style="margin:0;line-height:20px;font-size:14px;">Follow US</p>
        </div>
      </div>
      <div style="float:left;width:30%;padding:0 10px;box-sizing:border-box;">
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:14px;">服务工程师签字:</p>
          <p style="margin:0;line-height:20px;font-size:14px;">Craftsman Signature:</p>
        </div>
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:14px;">日期:</p>
          <p style="margin:0;line-height:20px;font-size:14px;">Date:</p>
        </div>
      </div>
      <div style="float:left;width:25%;padding:0 10px;box-sizing:border-box;">
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:14px;">客户签字:</p>
          <p style="margin:0;line-height:20px;font-size:14px;">Customer Signature:</p>
        </div>
        <div style="margin:0;height:60px;padding:0;box-sizing:border-box;padding-top:10px;">
          <p style="margin:0;line-height:20px;font-size:14px;">日期:</p>
          <p style="margin:0;line-height:20px;font-size:14px;">Date:</p>
        </div>
      </div>
    </div>
    <!-- 维修建议 -->
    <div style="clear:both;margin-top:10px;">
      <div style="width:100%;height:40px;border:1px solid #000;box-sizing:border-box;">
        <div style="width:50%;float:left;box-sizing:border-box;text-align:center;height:40px;line-height:36px;background:#eee;border-right:1px solid #000;">维修建议 Repair Recommendation</div>
        <div style="width:50%;float:left;box-sizing:border-box;text-align:center;height:40px;line-height:36px;background:#eee;">备注 Remark</div>
      </div>
      <div style="width:100%;height:40px;border:1px solid #000;border-top:none;box-sizing:border-box;">
        <div style="width:50%;float:left;box-sizing:border-box;text-align:center;line-height:36px;border-right:1px solid #000;height:40px;"></div>
        <div style="width:50%;float:left;box-sizing:border-box;text-align:center;line-height:36px;height:40px;"></div>
      </div>
    </div>
    <p style="font-size:14px;clear:both;">温馨提示：请不要将贵重物品遗忘在车内。Gentle Reminder: Please do not leave your personal belongings in the vehicle.</p>
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
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-04-22 15:45:09
 **/
import moment from 'moment';

export default {
  name: 'template1',
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
    this.$emit('onPrintTable', this.$refs.print.innerHTML);
    if (this.isPreview) {
      this.fillInToDom();
    }
  },
  methods: {
    fillInToDom() {
      this.isPreview = true;
    }
  }
};
</script>
