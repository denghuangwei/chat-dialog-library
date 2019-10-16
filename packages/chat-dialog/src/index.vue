<template>
  <div>
    <chat-dialog-header :name="groupName || name"></chat-dialog-header>
    <div class="message-container">
      <template v-for="(item, index) in messages">
        <chat-item
          :key="index"
          :id="id"
          :messageItem="item"
          :showTime="needShowTime(index)"
        ></chat-item>
      </template>
    </div>
    <chat-dialog-footer @submit-message="addMessage"></chat-dialog-footer>
  </div>
</template>

<script>
import ChatItem from './chat-item'
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
        },
        groupName: {
            type: String
        }
    },
    methods: {
        addMessage(item) {
            this.$emit('submit-message-item', {
                id: this.id,
                name: this.name,
                message: item.message,
                type: item.type,
                createdTime: Date.now()
            })
        },
        needShowTime(i) {
            if (i === 0) {
                return true
            }

            const currentItemTime = this.messages[i].createdTime
            const prevItemTime = this.messages[i-1].createdTime

            if (currentItemTime - prevItemTime > 1000 * 60) {
                return true
            }

            return false
        }
    },
    watch: {
        messages: {
            deep: true,
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    scrollTo(0, document.body.scrollHeight)
                })
            }
        }
    }
}
</script>

<style>
.message-container {
  padding: 45px 8px;
}
</style>