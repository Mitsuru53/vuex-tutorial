<template>
  <div>
    <h2>total</h2>
    <p>{{sum}}</p>
  </div>
</template>

<script>
export default {
  props: {
    sum: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
