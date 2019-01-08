<template>
  <div>
    <h2>total</h2>
    <p>{{totalPoints}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'totalPoints',
    ]),
  },
};
</script>
