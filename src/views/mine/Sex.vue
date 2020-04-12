<template>
  <div class="sex">
    <van-picker show-toolbar title="性别" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
  </div>
</template>
<script>
import Vue from 'vue'
import { Picker, Toast } from 'vant'

Vue.use(Picker)
export default {
  data () {
    return {
      columns: ['男', '女', '保密']
    }
  },
  methods: {
    onConfirm (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.value = value
    },
    onCancel () {
      this.sexShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
.van-picker {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
