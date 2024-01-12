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
                <p class="creator-time">{{ card.createdTime }}</p>
              </div>
              <div class="likes-info">
                <p class="likes-count">{{ card.likeCount }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted } from 'vue';
import { getLastestCards } from '@/api/whatsnew';

const cardNum = 2;

export default {
  setup() {
    const state = reactive<{
      cards: any[];
      error: Error | null;
    }>({
      cards: [],
      error: null,
    });

    onMounted(async () => {
      try {
        const response = await getLastestCards(cardNum);
        state.cards = response.data.cards;
      } catch (error) {
        state.error = error as Error;
      }
    });

    return state;
  },
};
</script>

<style>
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
