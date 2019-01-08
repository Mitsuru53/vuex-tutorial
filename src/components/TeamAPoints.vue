<template>
  <div>
    {{points}}
  </div>
</template>

<script>
export default {
  props: {
    points: {
      type: Number,
      required: true,
    },
  },
};
</script>
