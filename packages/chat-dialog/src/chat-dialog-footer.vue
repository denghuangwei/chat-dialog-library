<template>
  <div class="chat-dialog-footer">
    <input
      type="text"
      name="message-box"
      v-model="message"
      @keyup.enter="submit"
    >
    <select v-model="type">
      <option value="text">text</option>
      <option value="image">image</option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'chat-dialog-footer',
    data() {
        return {
            message: '',
            type: 'text'
        }
    },
    methods: {
        submit() {
            if (!this.message) {
                return
            }
            this.$emit('submit-message', { message: this.message, type: this.type })
            this.message= ''
        }
    }
}
</script>

<style>
.chat-dialog-footer {
  position: fixed;
  bottom: 0px;
  height: 40px;
  background-color: cornsilk;
  width: 100%;
  display: flex;
  padding: 5px 0px;
}
input[name="message-box"] {
  width: 80%;
  height: 30px;
  border-radius: 6px;
  border: 1px solid orange;
  margin: auto 10px;
}
</style>