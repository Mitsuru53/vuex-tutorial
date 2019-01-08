<template>
  <div>
    team B
    <!--<TeamBPoints-->
      <!--:points="points"-->
    <!--/>-->
    <TeamBPoints />
    <button
      type="button"
      @click="addOnePointToB"
    >
      increase
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TeamBPoints from './TeamBPoints.vue';

export default {
  // data() {
  //   return {
  //     points: 0,
  //   };
  // },
  components: {
    TeamBPoints,
  },
  methods: {
    ...mapActions(['addOnePointToB']),
    // addOnePoint() {
    //   this.points += 1;
    // },
  },
};
</script>
