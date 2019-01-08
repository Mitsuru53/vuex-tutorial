<template>
  <header>
    <h1>Vuex Study</h1>
    <TotalPoints
      :sum="sum"
    />
  </header>
</template>

<script>
import TotalPoints from './TotalPoints.vue';

export default {
  props: {
    sum: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  components: {
    TotalPoints,
  },
};
</script>
