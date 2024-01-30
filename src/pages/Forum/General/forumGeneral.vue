<template>
  <div
    v-infinite-scroll="handleScroll"
    v-infinite-scroll-disabled="disabled"
    style="overflow: auto; height: 100vh"
  >
    <div class="post" v-for="(post, index) in posts" :key="index">
      <el-container>
        <el-aside class="post-header-container">
          <div class="creator-info">
            <img :src="post.userAvatar" alt="" class="creator-avatar" />
            <p>{{ post.userName }}</p>
          </div>
          <div class="actives">
            <div
              style="
                display: flex;
                margin-top: 140px;
                flex-direction: row;
                align-items: center;
              "
            >
              <img
                src="../../../assets/images/like.png"
                alt=""
                class="likes-avatar"
              />
              <div>{{ post.likeCount }}</div>
            </div>
            <div
              style="
                display: flex;
                margin-top: 15px;
                flex-direction: row;
                align-items: center;
              "
            >
              <img
                src="../../../assets/images/views.png"
                alt=""
                class="views-avatar"
              />
              <div>{{ post.viewCount }}</div>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main class="post-body-container">
            <div class="post-body-title">{{ post.title }}</div>
            <div class=".post-body-content">{{ post.content }}</div>
            <el-container style="margin-top: 16px">
              <div v-for="(pic, index) in post.pics" :key="index">
                <img :src="pic" alt="creator avatar" class="body-pic" />
              </div>
            </el-container>
          </el-main>
          <el-footer class="post-footer-container">
            <div style="margin-left: 8px; margin-bottom: 8px">
              {{ post.createTime }}
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-if="noMore">No more</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import getPosts from '@/api/forums.ts';
import type { Posts } from '@/types/forum.d.ts';

const channelId = 0; // 请替换为你的channelId
const pageIndex = ref(0);
const posts = ref<Posts[]>([]);
const loading = ref(false);

const fetchPosts = async () => {
  loading.value = true;
  // 设置滚动节流时间
  setTimeout(async () => {
    const res: Posts[] = (await getPosts(channelId, pageIndex.value)).data;
    posts.value = [...posts.value, ...res];
    loading.value = false;
  }, 1000);
};

onMounted(() => {
  fetchPosts();
});

const handleScroll = computed(() => {
  return () => {
    if (loading.value) {
      return;
    }
    pageIndex.value += 1;
    fetchPosts();
  };
});

const noMore = computed(() => {
  return pageIndex.value > 5;
});

const disabled = computed(() => {
  return loading.value || noMore.value;
});
</script>

<style scoped>
.post {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  /* width: 100%; */
  /* border: 1px solid var(--el-border-color); */
  border: 1px solid;
  border-radius: 20px;
  overflow: auto;
}

.post-header-container {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  align-items: flex-start;
  width: 120px;
}

.actives {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
}

.creator-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.likes-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.views-avatar {
  width: 26px;
  height: 20px;
  border-radius: 50%;
  margin-right: 14px;
  margin-left: 2px;
}

.body-pic {
  width: 150px;
  height: 150px;
  margin-right: 24px;
}

.creator-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  margin-top: 16px;
}

.post-body-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
}

.post-body-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.post-body-content {
  font-size: 16px;
  margin-bottom: 8px;
}

.post-footer-container {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 8px;
  height: 32px;
}
</style>
