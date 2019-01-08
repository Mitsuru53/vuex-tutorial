<template>
  <div>
    <h2>total</h2>
    <p>{{sum}}</p>
  </div>
</template>

<script>
import CounterEvent from '../CounterEvent';

export default {
  data() {
    return {
      total: 0,
    };
  },
  created() {
    CounterEvent.$on('AddCountToTotal', () => {
      this.total += 1;
    });
  },
};
</script>
