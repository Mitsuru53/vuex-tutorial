<template>
  <div>
    {{pointB}}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // props: {
  //   points: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  computed: {
    ...mapState(['pointB']),
  },
};
</script>
