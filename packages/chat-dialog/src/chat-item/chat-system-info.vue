<template>
  <div
    v-if="messageItem.type==='system'"
    class="system-message"
  >{{ messageItem.message }}</div>
</template>

<script>
export default {
  name: 'chat-system-info',
  computed: {
    messageItem() {
      return this.$attrs.messageItem || {}
    }
  }
}
</script>

<style>
.system-message {
  text-align: center;
  color: gray;
}
</style>