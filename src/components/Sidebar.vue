<template>
  <el-row class="tac" style="height: 100%">
    <el-col :span="3">
      <el-menu
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
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
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
  </el-row>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    sidebarData: {
      default: {}
    }
  },
  setup() {
    let isCollapse = false; // 默认展开
    const handleOpen = (index) => {
      console.log(index);
    };
    const handleClose = (index) => {
      console.log(index);
    };
    const handleCollapse = () => {
      isCollapse = !isCollapse;
    };
  }
}
</script>

<style scoped>
.collapse-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px
}
</style>


