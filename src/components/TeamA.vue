<template>
  <div>
    team A
    <!--<TeamAPoints-->
      <!--:points="points"-->
    <!--/>-->
    <TeamAPoints />
    <button
      type="button"
      @click="addOnePointToA"
    >
      increase
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TeamAPoints from './TeamAPoints.vue';

export default {
  // data() {
  //   return {
  //     points: 0,
  //   };
  // },
  components: {
    TeamAPoints,
  },
  methods: {
    ...mapActions(['addOnePointToA']),
    // addOnePoint() {
    //   this.points += 1;
    // },
  },
};
</script>
