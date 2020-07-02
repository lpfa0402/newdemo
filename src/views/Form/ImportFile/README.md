```bash
<template>
  <div>
    <importFile
      title="导入aaa"
      actionUrl="/api/cluecenter/jk/clue/excelImportCheck"
      @close="closeHandler"
    />
  </div>
</template>
<script>
export default {
  name: 'importFileTest',
  data() {
    return {
  },
  methods: {
    closeHandler(val) {
      this.form.fileList = val;
    }
  }
}
```