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
  position: absolute;
  top: 0px;
  height: 30px;
  background-color: cornsilk;
  width: 95%;
}
</style>