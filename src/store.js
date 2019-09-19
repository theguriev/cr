import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseURL = 'http://www.boredapi.com/'

const saveEvents = (events) => {
  localStorage.setItem('events', JSON.stringify(events))
}

const getEvents = () => {
  return JSON.parse(localStorage.getItem('events')) || []
}

export default new Vuex.Store({
  state: {
    event: {
      activity: '',
      type: '',
      participants: 0,
      price: 0
    },
    events: getEvents()
  },
  mutations: {
    SET_EVENT (state, payload, ...args) {
      state.event = payload
    },
    SET_EVENTS (state, payload) {
      state.events = payload
      saveEvents(state.events)
    }
  },
  actions: {
    async LOAD_RANDOM_EVENT ({ commit }) {
      let response = await fetch(`${baseURL}api/activity/`)
      commit('SET_EVENT', await response.json())
    },
    async ADD_EVENT ({ commit, state }, payload) {
      commit('SET_EVENTS', [...state.events, { ...payload }])
    },
    async REMOVE_EVENTS ({ commit }) {
      commit('SET_EVENTS', [])
    }
  }
})
