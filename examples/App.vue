<template>
  <div id="app">
    <div id="userA">
      <chat-dialog
        id="id1"
        name="userA"
        :messages="messageList"
        @submit-message-item="messageList.push($event)"
      ></chat-dialog>
    </div>
    <div id="userB">
      <chat-dialog
        id="id2"
        name="userB"
        :messages="messageList"
        @submit-message-item="messageList.push($event)"
      ></chat-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      messageList: [{
        name: 'userA',
        id: 'id1',
        message: 'Hi userB, I am userA, nice to meet you.',
        type: 'text'
      }, {
        name: 'userB',
        id: 'id2',
        message: 'Hi userA, nice to meet you too.',
        type: 'text'
      }, {
        name: 'userA',
        id: 'id1',
        message: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYlCR5jeqry7FnelkF4LVjVjQuV_NHAFTqUINttdbHntCH17OxcBcBkUm8Q',
        type: 'image'
      }]
    }
  }
}
</script>

<style scoped>
#app {
  width: 70%;
}
#app > div {
  overflow-y: scroll;
}
#userA {
  float: left;
  position: relative;
  width: 400px;
  height: 600px;
  border: 1px solid red;
  padding: 10px;
}
#userB {
  float: right;
  position: relative;
  width: 400px;
  height: 600px;
  border: 1px solid red;
  padding: 10px;
}
</style>

