<template>
  <el-container class="layout-container">
    <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <template v-for="item in routers.filter((v) => v.title)" :key="item.path">
          <el-menu-item v-if="!item.children" :index="item.path">{{ item.title }}</el-menu-item>
          <el-sub-menu v-else class="ai-person" :index="item.path">
            <template #title>{{ item.title }}</template>
            <template v-for="child in item.children" :key="child.path">
              <el-menu-item :index="`${item.path}/${child.path}`">{{ child.title }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@/routes';

const routers = ref(routes);
const activeIndex = ref('/');

const router = useRouter();
onMounted(() => {
  activeIndex.value = router.currentRoute.value.path;
});
// 监听当前路由变化
watch(
  () => router.currentRoute.value,
  (val) => {
    activeIndex.value = val.path;
  }
);
</script>
<style lang="scss" scoped>
.layout {
  &-container {
    height: 100%;
  }
}
</style>
