import { defineStore } from "pinia"

export const usePasswordStore = defineStore('password', {
  id: 'password',
  state: () => ({
    password: ''
  }),
  getters: {},
  actions: {
    setPassword(password) {
      this.password = password
    },
    resetPassword() {
      this.password = ''
    }
  }
})