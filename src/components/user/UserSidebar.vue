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

        <router-link :to="{name: 'userManager'}">
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>用户管理</span>
          </el-menu-item>
        </router-link>

        <router-link :to="{name: 'userAnalyse'}">
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>用户分析</span>
          </el-menu-item>
        </router-link>

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
