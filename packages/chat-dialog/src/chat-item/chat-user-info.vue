<template>
  <div
    v-if="messageItem"
    :class="{ owner: isOwner }"
    class="chat-flex-item"
  >
    <div class="profile">{{messageItem.name}}</div>
    <div
      v-if="messageItem.type==='text'"
      :class="{ 'message-right': isOwner, 'message-left': !isOwner }"
    >{{messageItem.message}}</div>
    <div
      v-else
      class="image-container"
    >
      <img
        :src="messageItem.message"
        alt="not found"
      >
    </div>
  </div>
</template>

<script>
export default {
    name: 'chat-user-info',
    computed: {
        messageItem() {
          return this.$attrs.messageItem || {}
        },
        isOwner() {
            return this.$attrs.id === this.messageItem.id
        }
    }
}
</script>

<style>
.chat-item {
  margin-bottom: 10px;
}
.chat-flex-item {
  display: flex;
}
.owner {
  flex-direction: row-reverse;
  text-align: right;
}
.profile {
  width: 15%;
  flex-shrink: 0;
}
.message-left {
  max-width: 70%;
  background-color: sandybrown;
  border-radius: 5px;
  position: relative;
  text-align: left;
  padding: 3px 8px;
}
.message-left::after {
  display: block;
  content: "";
  position: absolute;
  top: 6px;
  left: -3px;
  width: 10px;
  height: 10px;
  background-color: sandybrown;
  transform: rotate(45deg);
  z-index: -1;
}
.message-right {
  max-width: 70%;
  background-color: green;
  border-radius: 5px;
  position: relative;
  text-align: left;
  padding: 3px 8px;
}
.message-right::after {
  display: block;
  content: "";
  position: absolute;
  top: 6px;
  right: -3px;
  width: 10px;
  height: 10px;
  background-color: green;
  transform: rotate(45deg);
  z-index: -1;
}
.image-container img {
  max-width: 200px;
  max-height: 200px;
}
</style>