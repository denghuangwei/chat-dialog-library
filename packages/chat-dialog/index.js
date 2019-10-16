import ChatDialog from './src/index.vue'

ChatDialog.install = function (Vue) {
    Vue.component(ChatDialog.name, ChatDialog)
}

export default ChatDialog
