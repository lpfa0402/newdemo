```bash
<template>
  <div style="height: calc(100vh - 260px);"> // 包裹器需要给一个高度
    <Anchor :labelList="labels">
      <div class="line" id="row-01">
        第一行
      </div>
      <div class="line" id="row-02">
        第二行
      </div>
      <div class="line" id="row-03">
        第三行
      </div>
    </Anchor>
  </div>
</template>
<script>
export default {
  name: 'AnchorTest',
  data() {
    return {
      labels: [
        { title: '选项卡1', id: 'row-01' },
        { title: '选项卡2', id: 'row-02' },
        { title: '选项卡3', id: 'row-03' }
      ]
    };
  },
  methods: {}
}
```