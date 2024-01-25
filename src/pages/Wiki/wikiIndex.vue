<template>
  <el-input
    v-model="textareaValue"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { throttle } from 'lodash';
import { updateWiki, getWiki } from '@/api/wiki.ts';

const wikiIndex = 'aabbcc';

export default {
  setup() {
    const textareaValue = ref('');
    const throttleUpdateAPI = throttle(updateWiki, 1000);

    watch(
      textareaValue,
      (_, oldVal) => {
        if (oldVal !== '') {
          throttleUpdateAPI(wikiIndex, textareaValue.value);
        }
      },
      { flush: 'post' }
    );
    onMounted(async () => {
      getWiki(wikiIndex).then((response) => {
        textareaValue.value = response.data.data.wikiContent;
      });
    });

    return {
      textareaValue,
    };
  },
};
</script>
