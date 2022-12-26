<template>
  <h1>Event s for Good</h1>
  <div class="events">
    <EventCard
    v-for="event in events"
    :key="event.id"
    :event="event"
    />
   </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import {useEventStore} from '../stores/EventStore'
import {ref,computed} from 'vue'
import { storeToRefs } from 'pinia';
const eventStore=useEventStore()
eventStore.fetchEvents().catch(error=>{throw error})
const {events}=storeToRefs(eventStore)
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>