<template>
  <el-input
    v-model="textareaValue"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { debounce } from 'lodash';
import { updateWiki, getWiki } from '@/api/wiki.ts';

const wikiIndex = 'aabbcc';

export default {
  setup() {
    const textareaValue = ref('');
    const debouncedUpdateAPI = debounce(updateWiki, 1000);

    watch(
      textareaValue,
      (_, oldVal) => {
        if (oldVal !== '') {
          debouncedUpdateAPI(wikiIndex, textareaValue.value); // 当textareaValue有变化时 调用debounced函数
        }
      },
      { flush: 'post' }
    );
    onMounted(async () => {
      // 初始化时，调用get函数
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
