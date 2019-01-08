<template>
  <div>
    {{pointA}}
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
    ...mapState(['pointA']),
  },
};
</script>
