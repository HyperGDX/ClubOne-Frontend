<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-button type="primary">Refresh</el-button>
      </el-header>
      <el-main>
        <div class="grid-container">
          <el-card
            v-for="(card, index) in cards"
            :key="index"
            class="grid-item"
          >
            <div class="image-container">
              <img :src="card.image" alt="card image" class="card-image" />
            </div>
            <div class="card-content">
              <div class="creator-info">
                <img
                  :src="card.avatar"
                  alt="creator avatar"
                  class="creator-avatar"
                />
                <p>{{ card.creator }}</p>
                <p class="creator-time">{{ card.createdAt }}</p>
              </div>
              <div class="likes-info">
                <p class="likes-count">{{ card.likes }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      cards: [
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator1',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-01',
          likes: 10,
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator2',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-02',
          likes: 20,
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator3',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-03',
          likes: 30,
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator4',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-04',
          likes: 40,
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator5',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-05',
          likes: 50,
        },
        {
          image:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          creator: 'Creator6',
          avatar:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          createdAt: '2022-01-06',
          likes: 60,
        },
      ],
    };
  },
};


</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.grid-item {
  width: 100%;
}

.image-container {
  width: 100%;
  text-align: center;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  text-align: center;
}

.creator-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.creator-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.creator-time {
  margin-left: auto;
}

.likes-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.likes-count {
  margin-left: auto;
}
</style>
