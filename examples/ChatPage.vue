<template>
  <div class="user-container">
    <chat-dialog
      :id="userId"
      :name="userName"
      :group-name="groupName"
      :messages="messageList"
      @submit-message-item="submitMessageItem"
    ></chat-dialog>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      messageList: [
      {
        name: 'system',
        id: 'recall',
        message: 'userA recalled a message',
        type: 'system',
        createdTime: (new Date(2018,3,5)).getTime()
      }
      ]
    }
  },
  computed: {
      userId() {
          return this.$route.query.userid
      },
      userName() {
          return this.$route.query.username
      },
      groupName() {
          return this.$route.query.groupname
      }
  },
  created() {
      setInterval(() => {
          let list = localStorage.getItem('messageList')
          if (list) {
             list = JSON.parse(list)
             if (this.messageList.length !== list.length) {
                 this.messageList = list 
             }
          }
      }, 300);
  },
  methods: {
        submitMessageItem(item) {
            this.messageList.push(item)
        }
  },
  watch: {
      messageList: {
          deep: true,
          handler(val) {
              localStorage.setItem('messageList', JSON.stringify(val))
          }
      }
  }
}
</script>

