<template>
  <TreeRow  v-for="node in tree" :key="node.id" :node="node" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CuriTree } from '../types';
import TreeRow from './TreeRow.vue';

export default defineComponent({
  name: 'tree-name',
  components: {
    TreeRow,
  },

  props: {
    tree: {
      type: Object as PropType<CuriTree[]>,
      default: undefined,
    },
  },
});
</script>

<style scoped lang="scss">

</style>
