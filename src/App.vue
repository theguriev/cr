<template>
  <div id="app">
    <el-tabs type="card">
      <el-tab-pane label="Activities">
        <el-row>
          <el-col :span="16" class="pr3">
            <h2>You should:</h2>
            <div class="mb2">
              <el-input
                type="textarea"
                :rows="9"
                placeholder="Please input"
                v-model="event.activity">
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <h2>Activity details:</h2>

            <div class="flex flex-column mb2">
              <label for="">Type</label>
              <el-select v-model="event.type" placeholder="Type">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="flex flex-column mb2">
              <label for="">Participants</label>
              <el-input placeholder="Please input" v-model="event.participants"></el-input>
            </div>
            <div class="flex flex-column mb2">
              <label for="">Budget</label>
              <div class="flex flex-column pl1 pr3">
                <el-slider
                  v-model="event.price"
                  :marks="marks"
                  :min="0"
                  :max="1"
                  :step="0.01">
                </el-slider>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="mt2">
          <el-col :span="16" class=" pr3 flex flex-column">
            <el-button v-on:click="save(event)" type="danger">Save for later</el-button>
          </el-col>
          <el-col :span="8" class="flex flex-column">
            <el-button v-on:click="loadRandomEvent" type="primary">Hit me a new one!</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="My list">
        <el-table :data="tableData">
          <el-table-column
            prop="order"
            width="40"
            label="#">
          </el-table-column>
          <el-table-column
            prop="activity"
            label="Activity">
          </el-table-column>
          <el-table-column
            prop="participants"
            width="150"
            label="Participants">
          </el-table-column>
          <el-table-column
            prop="price"
            width="150"
            label="Budget">
          </el-table-column>
          <el-table-column
            prop="ok"
            width="30"
            label=""><template><i class="el-icon-circle-check"></i></template>
          </el-table-column>
        </el-table>
        <div class="flex flex-column mt2">
          <el-button v-on:click="remove" type="danger">Clear all</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['event', 'events']),
    tableData () {
      return this.events.map(
        (el, index) => ({
          ...el,
          order: index + 1,
          ok: ''
        })
      )
    }
  },
  data () {
    return {
      options: [
        {
          value: 'education',
          label: 'Education'
        },
        {
          value: 'recreational',
          label: 'Recreational'
        },
        {
          value: 'social',
          label: 'Social'
        },
        {
          value: 'diy',
          label: 'Diy'
        },
        {
          value: 'charity',
          label: 'Charity'
        },
        {
          value: 'cooking',
          label: 'Cooking'
        },
        {
          value: 'relaxation',
          label: 'Relaxation'
        },
        {
          value: 'music',
          label: 'Music'
        },
        {
          value: 'busywork',
          label: 'Busywork'
        }
      ],
      marks: {
        0: 'cheap',
        1: 'expensive'
      }
    }
  },
  methods: {
    ...mapActions({
      loadRandomEvent: 'LOAD_RANDOM_EVENT',
      save: 'ADD_EVENT',
      remove: 'REMOVE_EVENTS'
    })
  },
  created () {
    this.loadRandomEvent()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 900px;
  margin: 200px auto;
}
</style>
