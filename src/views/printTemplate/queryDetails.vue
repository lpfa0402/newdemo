<template>
  <!-- 查询结算 -->
  <div  ref="print" style="width:100%; margin: 0 auto;">
    <div
      class="repair_contentbox"
      style="width:100%;float:left;text-align:center;margin-top:50px;border:1px"
    >
      <table border="1">
        <tr height="70px" >

          <td colspan="4"><p style="text-align:center;font-size:25px;font-weight:700">查询结账</P>
            <span>服务站代码：      <p style="position:absolute;left:540px;top:180px">打印日期：{{nowTime}}</p></span>

          </td>
        </tr>

        <tr>
          <td>
            <p align="center">00000</p>
          </td>
          <td>
            <p align="center">1111</p>
          </td>
          <td>
            <p align="center">{{2222}}</p>
          </td>
          <td>
            <p align="center">{{33333}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">00000</p>
          </td>
          <td>
            <p align="center">1111</p>
          </td>
          <td>
            <p align="center">{{2222}}</p>
          </td>
          <td>
            <p align="center">{{33333}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">00000</p>
          </td>
          <td>
            <p align="center">1111</p>
          </td>
          <td>
            <p align="center">{{2222}}</p>
          </td>
          <td>
            <p align="center">{{33333}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">00000</p>
          </td>
          <td>
            <p align="center">1111</p>
          </td>
          <td>
            <p align="center">{{2222}}</p>
          </td>
          <td>
            <p align="center">{{33333}}</p>
          </td>
        </tr>

      </table>
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
    name: 'temlateBusinessOrder',
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
        nowTime: moment().format('YYYY-MM-DD'),
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
