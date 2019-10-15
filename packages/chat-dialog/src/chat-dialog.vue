<template>
  <div>
    <chat-dialog-header :name="name"></chat-dialog-header>
    <div class="message-container">
      <chat-item
        :id="id"
        v-for="(item, index) in messages"
        :key="index"
        :message-item="item"
      ></chat-item>
    </div>

    <chat-dialog-footer @submit-message="addMessage"></chat-dialog-footer>
  </div>
</template>

<script>
import ChatItem from './chat-item.vue'
import ChatDialogHeader from './chat-dialog-header'
import ChatDialogFooter from './chat-dialog-footer'
export default {
    name: 'chat-dialog',
    components: {
        ChatItem,
        ChatDialogFooter,
        ChatDialogHeader
    },
    props: {
        id: {
            type: String,
            required: true,
            validator(v) {
                return v && v.trim() !== ''
            }
        },
        name: {
            type: String
        },
        messages: {
            type: Array,
            required: true,
            default() {
                return [{
                    name: '',
                    id: '',
                    message: '',
                    type: ''
                }]
            }
        }
    },
    methods: {
        addMessage(message) {
            this.$emit('submit-message-item', {
                id: this.id,
                name: this.name,
                message: message,
                type: 'text'
            })
        }
    }
}
</script>

<style>
.message-container {
  margin-top: 30px;
}
</style>