<template>
  <div class="user-container">
    <chat-dialog
      :personal-info="personalInfo"
      :group-name="groupName"
      :messages="messageList"
      @submit-message-item="submitMessageItem"
    ></chat-dialog>
  </div>
</template>

<script>
const now = Date.now()
export default {
  name: 'app',
  data() {
    return {
      messageList: [
      {
          name: 'system',
          id: 'invite',
          type: 'system',
          message: 'userA invited userC to this chat group',
          createdTime: now - 1000 * 60 * 5
      },
      {
        name: 'system',
        id: 'recall',
        message: 'userA recalled a message',
        type: 'system',
        createdTime: now - 1000 * 60 * 3
      },
      {
          name: this.userName || 'userA',
          id: this.userId || 'id1',
          message: 'hello',
          type: 'text',
          createdTime: now - 1000 * 60 * 2
      },
      {
          name: 'userB',
          id: 'id2',
          type: 'text',
          message: 'hello userA',
          createdTime: now - 1000 * 60 * 1
      },
      {
          name: 'userA',
          id: 'id1',
          type: 'image',
          message: 'https://www.gobear.com/sg/sites/singapore/files/inline-images/bear_partners-1.2aa576c-2.svg',
          createdTime: now - 1000 * 60 * 1
      }
      ]
    }
  },
  computed: {
      personalInfo() {
          return {
              id: this.$route.query.userid,
              name: this.$route.query.username 
          }
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

