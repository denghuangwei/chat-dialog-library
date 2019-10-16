<template>
  <div class="chat-dialog-header">
    {{name}}
  </div>
</template>

<script>
export default {
    name: 'chat-dialog-header',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.chat-dialog-header {
  text-align: center;
  position: fixed;
  top: 0px;
  height: 40px;
  background-color: cornsilk;
  width: 100%;
  z-index: 2;
  line-height: 40px;
}
</style>