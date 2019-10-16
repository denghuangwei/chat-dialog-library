<template>
  <div
    class="time"
    v-if="$attrs.showTime"
  >{{ messageItem.createdTime | formatTime}}
  </div>
</template>

<script>

function fillZeroPrefix(num) {
  if (+num < 10) {
    return `0${num}`
  }

  return num
}
export default {
  name: 'chat-time-info',
  computed: {
    messageItem() {
      return this.$attrs.messageItem || {}
    }
  },
  filters: {
    formatTime(value) {
      if (typeof value !== 'number') {
        return ''
      }
      value = new Date(value)
      const year  = value.getFullYear()
      let month = value.getMonth()
      let day = value.getDate()
      let hour = value.getHours()
      let minute = value.getMinutes()
      let ext = 'AM'
      if (minute > 0 && hour > 12) {
        hour-=12
        ext = 'PM'
      }
      day = fillZeroPrefix(day)
      hour = fillZeroPrefix(hour)
      minute = fillZeroPrefix(minute)
      const mongthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return `${mongthList[month]} ${day}, ${year} ${hour}:${minute} ${ext}`
    }
  }
}
</script>

<style>
.time {
  text-align: center;
  color: gray;
}
</style>