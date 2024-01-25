<template>
  <quill-editor
    ref="QuillEditor"
    v-model:content="wikiContent"
    contentType="html"
  />
  <button v-on:click="printContent">Print Content In Console</button>
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { throttle } from 'lodash';
import { updateWiki, getWiki } from '@/api/wiki.ts';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const wikiIndex = 'aabbcc';

export default {
  components: {
    QuillEditor,
  },
  methods: {
    printContent() {
      // eslint-disable-next-line
      console.log(this.wikiContent);
    },
  },
  setup() {
    const wikiContent = ref('');
    const throttleUpdateAPI = throttle(updateWiki, 3000);
    watch(
      wikiContent,
      (_, oldVal) => {
        if (oldVal !== '') {
          throttleUpdateAPI(wikiIndex, wikiContent.value);
        }
      },
      { flush: 'post' }
    );
    onMounted(async () => {
      getWiki(wikiIndex).then((response) => {
        wikiContent.value = response.data.data.wikiContent;
      });
    });

    return {
      wikiContent,
    };
  },
};
</script>
