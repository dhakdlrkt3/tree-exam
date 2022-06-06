<template>
  <div ref="rowRoot"  class="row-root" @click.stop="onClickRow">

    <div class="row-box">depth: {{node.depth}}, text: {{node.text}}</div>

    <transition name="fade">
      <div v-if="onDisplay">
        <TreeRow
          :class="`tree-child tree-depth-${node.depth + 1}`"
          v-for="nd in node.children"
          :node="nd"
          :key="nd.id"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { CuriTree } from '../types';

export default defineComponent({
  name: 'tree-name',
  props: {
    node: {
      type: Object as PropType<CuriTree>,
      required: true,
    },
  },

  setup(prop) {
    const rowRoot = ref<HTMLElement | null>(null)
    const onDisplay = ref(true)
    console.log('child =>', prop.node.children?.length)
    const hasChild = !!prop.node.children?.length
    const onClickRow = () => {
      if(hasChild) {
        console.log('haschild => ', rowRoot.value)
        console.log(rowRoot.value?.offsetHeight)
        onDisplay.value = !onDisplay.value
        // const expanded = prop.node.state.expanded
        // console.logtreeRow

      }
    };

    return {
      rowRoot,
      onDisplay,
      onClickRow,
    };
  },

});
</script>

<style scoped lang="scss">
 .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

.row-root {
  padding-left: 20px;
}

div:not(.tree-child) > .row-box{
  border: 1px solid blue;
  border-radius: 10px;
  margin-bottom: 1px;
}

.row-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid red;
  opacity: 1;
  height: 35px;
  border-radius: 10px;
  padding: 0 10px;
}
</style>
