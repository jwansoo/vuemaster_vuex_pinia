<template>
  <h1>Create an event</h1>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category:</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option===event.category"
        >{{option}}</option>
      </select>
      <h3>Name & describe your event</h3>
      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />
      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
      />
      <h3>Where is your event?</h3>
      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" />
      <h3>where is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />
      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {v4} from 'uuid'
import { useEventStore } from '@/stores/EventStore';
import {useUserStore} from '../stores/UserStore'
import {ref,reactive,computed} from 'vue'
import type { Event } from '@/types/Event';
const eventStore=useEventStore()
const userStore=useUserStore()
const categories=reactive([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
])
const event=reactive({
  id: '',
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  organizer: ''
})
const onSubmit=()=>{
   event:{
    id:v4
    organizer:userStore.user
    category:event.category
    title:event.title
    description:event.description
    location: event.location
    date: event.date
    time: event.time
  }
  eventStore
  .createEvent(event)
  .then(()=>{
      $router.push({
      name:'EventDetails',
      params:{id:event.id}
    })
  })
  .catch(error=>{throw error})
}
</script>

<style scoped>

</style>