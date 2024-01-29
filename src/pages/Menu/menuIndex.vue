<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-header style="text-align: right">
      <div class="toolbar">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 1px">
            <setting />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu>
            <router-link to="/whatsNew">
              <el-menu-item index="1">
                <template #title>
                  <el-icon> <Notification /> </el-icon>What's New
                </template>
              </el-menu-item>
            </router-link>

            <el-sub-menu index="2">
              <template #title>
                <el-icon> <ChatLineSquare /> </el-icon>Forum
              </template>
              <router-link to="/forum/general">
                <el-menu-item index="2-1">General</el-menu-item>
              </router-link>
              <el-menu-item index="2-2">Club</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon> <setting /> </el-icon>Club
              </template>
            </el-sub-menu>

            <el-sub-menu index="4">
              <template #title>
                <el-icon> <Present /> </el-icon>Shop
              </template>
            </el-sub-menu>

            <router-link to="/wiki">
              <el-menu-item index="5">
                <template #title>
                  <el-icon> <Notification /> </el-icon>Wiki
                </template>
              </el-menu-item>
            </router-link>

            <el-sub-menu index="6">
              <template #title>
                <el-icon> <User /> </el-icon>My
              </template>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main>
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
