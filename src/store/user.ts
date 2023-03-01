import { defineStore } from 'pinia'

export const userInfoStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {
      userid: '',
      username: ''
    }
  }),
  actions: {
    updateInfo(data: { userid: string; username: string}) {
      this.userInfo = data
    }
  },
  persist: true
})
