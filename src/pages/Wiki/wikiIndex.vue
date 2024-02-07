<template>
  <el-container style="height: 100vh">
    <el-aside width="200px">
      <el-button type="primary" @click="createWiki">New</el-button>
      <el-menu>
        <el-menu-item-group>
          <el-menu-item
            v-for="(wiki, index) in wikiList"
            :key="index"
            :index="`${index + 1}-1`"
            @click="loadWikiContent(wiki.UUID)"
          >
            {{ wiki.Title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-main>
      <quill-editor
        ref="QuillEditor"
        v-model:content="curWikiContent"
        contentType="html"
      />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { throttle } from 'lodash';
import { updateWiki, getWiki, getWikis, createWiki } from '@/api/wiki';
import { QuillEditor } from '@vueup/vue-quill';
import type { WikiTitle } from '@/types/wiki.d';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const onlyCreator = '1';
const curWikiContent = ref('');
const wikiList = ref<WikiTitle[]>([]);
const throttleUpdateAPI = throttle(updateWiki, 3000);
const curUUID = ref('');

export default {
  components: {
    QuillEditor,
  },
  methods: {
    createWiki() {
      createWiki(onlyCreator);
    },
    async loadWikiContent(uuid: string) {
      const response = await getWiki(uuid);
      curWikiContent.value = response.data.data.Content;
      curUUID.value = response.data.data.Uuid;
    },
  },
  setup() {
    watch(
      curWikiContent,
      (_, oldVal) => {
        if (oldVal !== '') {
          throttleUpdateAPI(curUUID.value, curWikiContent.value);
        }
      },
      { flush: 'post' }
    );
    onMounted(async () => {
      await getWikis().then((response) => {
        wikiList.value = response.data.data;
      });
      await getWiki(wikiList.value[0].UUID).then((response) => {
        curWikiContent.value = response.data.data.Content;
        curUUID.value = response.data.data.Uuid;
      });
    });

    return {
      wikiList,
      curWikiContent,
    };
  },
};
</script>
