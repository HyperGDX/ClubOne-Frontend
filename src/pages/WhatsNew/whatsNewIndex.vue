<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-button type="primary" @click="refreshPage">Refresh</el-button>
      </el-header>
      <el-main>
        <p>Forum</p>
        <div class="grid-container">
          <el-card
            v-for="(card, index) in forumCards"
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
                <p class="creator-time">{{ card.createdTime }}</p>
              </div>
              <div class="likes-info">
                <img
                  src="../../assets/images/like.png"
                  alt=""
                  class="likes-avatar"
                />
                <div class="likes-count">{{ card.likeCount }}</div>
              </div>
            </div>
          </el-card>
        </div>

        <p>Club</p>
        <div class="grid-container">
          <el-card
            v-for="(card, index) in clubCards"
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
                <p class="creator-time">{{ card.createdTime }}</p>
              </div>
              <div class="likes-info">
                <img
                  src="../../assets/images/like.png"
                  alt=""
                  class="likes-avatar"
                />
                <div class="likes-count">{{ card.likeCount }}</div>
              </div>
            </div>
          </el-card>
        </div>

        <p>EShop</p>
        <div class="grid-container">
          <el-card
            v-for="(card, index) in shopCards"
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
                <p class="creator-time">{{ card.createdTime }}</p>
              </div>
              <div class="likes-info">
                <img
                  src="../../assets/images/like.png"
                  alt=""
                  class="likes-avatar"
                />
                <div class="likes-count">{{ card.likeCount }}</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import getLastestCards from '@/api/whatsnew.ts';
import type { Card } from '@/types/whatsnew.d.ts';

const cardNum = 3;

export default {
  methods: {
    refreshPage() {
      window.location.reload();
    },
  },
  setup() {
    const forumCards = ref<Card[]>([]);
    const clubCards = ref<Card[]>([]);
    const shopCards = ref<Card[]>([]);

    onMounted(async () => {
      try {
        const response = await getLastestCards(cardNum);
        forumCards.value = response.data.forumCards.slice(0, cardNum);
        clubCards.value = response.data.clubCards.slice(0, cardNum);
        shopCards.value = response.data.shopCards.slice(0, cardNum);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    });

    return { forumCards, clubCards, shopCards };
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
  min-height: 100px;
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
  justify-content: flex-start;
  align-items: center;
}

.likes-count {
  margin-left: 10px; /* 可根据需要调整 */
}

.likes-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
