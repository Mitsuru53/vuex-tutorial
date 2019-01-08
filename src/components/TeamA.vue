<template>
  <div>
    team A
    <TeamAPoints
      :points="points"
    />
    <button
      type="button"
      @click="addOnePoint"
    >
      increase
    </button>
  </div>
</template>

<script>
import TeamAPoints from './TeamAPoints.vue';

export default {
  data() {
    return {
      points: 0,
    };
  },
  components: {
    TeamAPoints,
  },
  methods: {
    addOnePoint() {
      this.points += 1;
      this.$emit('addPointToTotal', 1);
    },
  },
};
</script>
