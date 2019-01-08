<template>
  <div id="app">
    <AppHeader
      :sum="sum"
    />
    <div class="teamBox">
      <TeamA
        @addPointToTotal="addTotal"
      />
      <TeamB
        @addPointToTotal="addTotal"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TeamA from './components/TeamA.vue';
import TeamB from './components/TeamB.vue';

export default {
  data() {
    return {
      sum: 0,
    };
  },
  methods: {
    addTotal(point) {
      this.sum += point;
    },
  },
  components: {
    AppHeader,
    TeamA,
    TeamB,
  },
};
</script>

<style lang="scss">
.teamBox {
  display: flex;
  justify-content: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
