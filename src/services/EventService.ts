import axios from 'axios'
import type{Event} from '../types/Event'
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id:number) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event:Event) { 
    return apiClient.post('/events', event)
  }
}