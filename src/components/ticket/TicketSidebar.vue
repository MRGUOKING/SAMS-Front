<template>
  <el-row class="tac" style="height: 100%">
    <el-col :span="3">
      <el-menu
          style="height: 100%"
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>

          <router-link :to="{name: 'testChildren'}">
            <el-menu-item index="1-1">父子组件测试</el-menu-item>
          </router-link>

          <router-link :to="{name: 'addTicket'}">
          <el-menu-item index="1-2">新增门票</el-menu-item>
          </router-link>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>

      </el-menu>
    </el-col>
    <el-col :span="21">
      <router-view/>
    </el-col>
  </el-row>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
name: "TicketSidebar",
  components: {
    Document,
    IconMenu,
    Location,
    Setting
  }
}
</script>

<style scoped>

</style>
