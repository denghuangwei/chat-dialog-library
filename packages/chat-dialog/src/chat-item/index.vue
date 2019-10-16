<template>
  <div class="chat-item">
    <chat-time-info v-bind="$attrs"></chat-time-info>
    <component
      v-bind="$attrs"
      v-on="$listeners"
      :is="messageView"
    ></component>
  </div>
</template>

<script>
import ChatTimeInfo from './chat-time-info'
import ChatSystemInfo from './chat-system-info'
import ChatUserInfo from './chat-user-info'
export default {
  name: 'chat-item',
  components: {
    ChatTimeInfo,
    ChatSystemInfo,
    ChatUserInfo
  },
  computed: {
    messageView() {
      const type = this.$attrs.messageItem.type
      switch(type) {
        case 'system':
          return 'chat-system-info'
        case 'text':
        case 'image':
          return 'chat-user-info'
        default:
          return 'chat-user-info'
      }
    }
  }
}
</script>

<style scoped>
.chat-item {
  margin-bottom: 10px;
}
</style>