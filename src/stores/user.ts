import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', {
  state: () => {
    return { name: '' }
  },
  actions: {
    upName(str: string) {
      this.name = str
    }
  }
})
