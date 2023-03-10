import { defineStore } from "pinia";
import type { Event } from "@/types/Event";
import EventService from "@/services/EventService";
export const useEventStore=defineStore('EventStore',{
  state:()=>({
    events:[] as Event[],
    event: Event
  }),
  actions:{
    createEvent(event:Event){
      return EventService.postEvent(event)
      .then(()=>{
        this.events.push(event)
      })
      .catch(error=>{
        throw error
      })
    },
    fetchEvents(){
      return EventService.getEvents()
      .then(response=>{
        this.events=response.data
      })
      .catch(error=>{
        throw error
      })
    },
    fetchEvent(id:number){
      // const existingEvent=this.events.find(event=>event.id===id)
      // if(existingEvent){
        // this.event=existingEvent
      // }else{
        return EventService.getEvent(id)
        .then(response=>{
          this.event=response.data
        })
        .catch(error=>{
          throw error
        })
      }
    }
})