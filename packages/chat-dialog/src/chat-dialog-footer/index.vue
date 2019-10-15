<template>
  <div class="chat-dialog-footer">
    <input
      type="text"
      name="message-box"
      v-model="message"
      @keyup.enter="submit"
    >
  </div>
</template>

<script>
export default {
    name: 'chat-dialog-footer',
    data() {
        return {
            message: ''
        }
    },
    methods: {
        submit() {
            this.$emit('submit-message', this.message)
            this.message= ''
        }
    }
}
</script>

<style>
.chat-dialog-footer {
  position: absolute;
  bottom: 0px;
  height: 30px;
  background-color: cornsilk;
  width: 95%;
  display: flex;
}
input[name="message-box"] {
  width: 80%;
}
</style>