import { defineStore } from "pinia";
export const useUserStore=defineStore('UserStore',{
  state:()=>({
    user:'jang wan'
  })
})