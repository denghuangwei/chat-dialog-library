import ChatDialog from './src/chat-dialog.vue'

ChatDialog.install = function (Vue) {
    Vue.component(ChatDialog.name, ChatDialog)
}

export default ChatDialog
