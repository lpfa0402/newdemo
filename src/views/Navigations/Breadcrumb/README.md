```bash
<template>
  <Breadcrumb
    :separator="separator"
    :separatorClass="separatorClass"
    :replace="replace"
  />
</template>
<script>
export default {
  data () {
    separator: '/',
    separatorClass: '',
    replace: false
  }
}
</script>
```