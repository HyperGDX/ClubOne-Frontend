<template>
  <div v-for="(post, index) in posts" :key="index" class="post">
    <el-card class="box-card" shadow="hover">
      <template #header class="card-header">
        <el-container class="card-header-container">
          <div class="creator-info">
            <img
              :src="post.avatar"
              alt="creator avatar"
              class="creator-avatar"
            />
            <p>{{ post.creator }}</p>
          </div>
          <div>{{ post.title }}</div>
          <el-button class="button" text>Delete</el-button>
        </el-container>
      </template>
      <el-container class="card-body-container">
        <div class="text item">{{ post.content }}</div>
        <el-container>
          <div v-for="(pic, index) in post.pics" :key="index">
            <img :src="pic.url" alt="creator avatar" class="body-pic" />
          </div>
        </el-container>
      </el-container>
      <template #footer>
        <el-container class="card-footer-container">
          <div style="margin-left: 8px">likes: {{ post.likes }}</div>
          <div>views: {{ post.views }}</div>
        </el-container>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
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
</script>

<style scoped>
/* .card-header { */
/* display: flex; */
/* flex-direction: column; */
/* justify-content: space-between; */
/* align-items: center; */
/* } */

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: calc(100vw - 280px);
}

.creator-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
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
}

.post {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  width: 100%;
}

.card-header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-body-container {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
}

.card-footer-container {
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: space-between; */
  /* align-items: flex-end; */
  margin-right: 8px;
}
</style>
