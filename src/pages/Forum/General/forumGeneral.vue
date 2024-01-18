<template>
  <div
    id="app"
    v-infinite-scroll="handleScroll"
    style="overflow: auto; height: 100vh"
  >
    <div class="post" v-for="(post, index) in posts" :key="index">
      <el-container>
        <el-aside class="post-header-container">
          <div class="creator-info">
            <img :src="post.avatar" alt="" class="creator-avatar" />
            <p>{{ post.creator }}</p>
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
              <div>{{ post.likes }}</div>
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
              <div>{{ post.views }}</div>
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
              {{ post.createdAt }}
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<!-- <script lang="ts">
export default {
  data() {
    return {
      posts: [
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator1',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-01',
          likes: 10,
          views: 10,
          content: 'content1',
          title: 'Title1',
          pics: [
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
          ],
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator2',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-02',
          likes: 20,
          views: 10,
          content: 'content1',
          title: 'Title2',
          pics: [
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
          ],
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator3',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-03',
          likes: 30,
          views: 10,
          content: 'content1',
          title: 'Title3',
          pics: [
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
          ],
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator4',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-04',
          likes: 40,
          views: 10,
          content: 'content1',
          title: 'Title4',
          pics: [
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
          ],
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator5',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-05',
          likes: 50,
          views: 10,
          content: 'content1',
          title: 'Title5',
          pics: [
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
          ],
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator6',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-06',
          likes: 60,
          views: 10,
          content: 'content1',
          title: 'Title6',
          pics: [
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
            {
              url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            },
          ],
        },
      ],
    };
  },
};
</script> -->

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import getPosts from '@/api/forums.ts';
import type { Posts } from '@/types/forum.d.ts';

const channelId = 0; // 请替换为你的channelId
let pageIndex = 1;
const posts = ref<Posts[]>([]);
const loading = ref(false);

const fetchPosts = async () => {
  loading.value = true;
  const res = (await getPosts(channelId, pageIndex)).data;
  // console.log(response);
  posts.value = [...posts.value, ...res.data];
  loading.value = false;
  pageIndex += 1;
};

const handleScroll = () => {
  fetchPosts();
};

onMounted(() => {
  fetchPosts();
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
