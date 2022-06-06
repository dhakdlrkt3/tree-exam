<template>
  <TreeRoot :tree="data" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TreeRoot from './components/TreeRoot.vue';
import { CuriTree } from './types';

export default defineComponent({
  name: 'App',
  components: {
    TreeRoot,
  },
  setup() {
    const data: CuriTree[] = [{
      id: 0,
      depth: 0,
      text: '동명사',
      state: {
        expanded: false,
        selected: false,
      },
      children: [
        {
          id: 5,
          depth: 1,
          text: '개념',
          state: {
            expanded: false,
            selected: false,
          },
          children: [],
        },
        {
          id: 6,
          depth: 1,
          text: '동사의 목적어',
          state: {
            expanded: false,
            selected: false,
          },
          children: [
            {
              id: 7,
              depth: 2,
              text: 'Only to정사',
              state: {
                expanded: false,
                selected: false,
              },
              children: [],
            },
            {
              id: 8,
              depth: 2,
              text: 'both to부정사 and 동명사',
              state: {
                expanded: false,
                selected: false,
              },
              children: [
                {
                  id: 9,
                  depth: 3,
                  text: 'A',
                  state: {
                    expanded: false,
                    selected: false,
                  },
                  children: [],
                },
                {
                  id: 10,
                  depth: 3,
                  text: 'B',
                  state: {
                    expanded: false,
                    selected: false,
                  },
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      depth: 0,
      text: '분사',
      state: {
        expanded: false,
        selected: false,
      },
      children: [],
    },
    {
      id: 2,
      depth: 0,
      text: '접속사',
      state: {
        expanded: false,
        selected: false,
      },
      children: [],
    },
    {
      id: 3,
      depth: 0,
      text: '관계사',
      state: {
        expanded: false,
        selected: false,
      },
      children: [],
    },
    {
      id: 4,
      depth: 0,
      text: '가정법',
      state: {
        expanded: false,
        selected: false,
      },
      children: [],
    },
    ];
    return {
      data,
    };
  },
});
</script>

<style lang="scss">
.container {
  font-size: 1rem;
}
</style>
