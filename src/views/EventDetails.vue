<template>
  <div v-if="event">
    <h1>{{event.title}}</h1>
    <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
    <p>{{event.description}}</p>
  </div>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/EventStore';
import type { Event } from '@/types/Event';
import { storeToRefs } from 'pinia';
import {ref,computed} from 'vue'

const props=defineProps<{id:number}>()
const eventStore=useEventStore()
eventStore.fetchEvent(props.id)
const {event}=storeToRefs(eventStore)
</script>

<style scoped>

</style>