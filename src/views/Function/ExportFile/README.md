```bash
<template>
  <JsonToExcel
    :fileType="fileType"
    @onError="onError"
    @onFinish="onFinish"
    :formatHandle="formatHandle"
    :initialValue="json_data"
    :fields="json_fields"
    :fileName="fileName"
    :disabled="disabled"
  />
</template>
<script>
export default {
  data () {
    disabled: false,
    fileType: 'xlsx',
    fileName: '导出文件',
    json_fields: {
      'Complete name': 'name',
      City: 'city',
      Telephone: 'phone.mobile',
      'Telephone 2': {
        field: 'phone.landline',
        callback: value => {
          return `Landline Phone - ${value}`;
        }
      }
    },
    json_data: [
      {
        name: 'Tony Peña',
        city: 'New York',
        country: 'United States',
        birthdate: '1978-03-15',
        phone: {
          mobile: '15417543010',
          landline: '(541) 754-3010'
        }
      },
      {
        name: 'Thessaloniki',
        city: 'Athens',
        country: 'Greece',
        birthdate: '1987-11-23',
        phone: {
          mobile: '18552755071',
          landline: '(2741) 2621-244'
        }
      }
    ]
  },
  methods: {
    formatHandle(val) {
      console.log(val);
      return val;
    },
    onFinish () {
      console.log('导出成功触发');
    },
    onError () {
      console.log('导出失败触发');
    }
  }
}
</script>
```