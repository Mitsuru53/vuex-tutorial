<template>
  <div>
    team B
    <TeamBPoints
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
import TeamBPoints from './TeamBPoints.vue';

export default {
  data() {
    return {
      points: 0,
    };
  },
  components: {
    TeamBPoints,
  },
  methods: {
    addOnePoint() {
      this.points += 1;
      this.$emit('addPointToTotal', 1);
    },
  },
};
</script>
