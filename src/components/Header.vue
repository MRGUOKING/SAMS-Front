<template>
  <div class="navigation">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/ticket">门票管理</el-menu-item>
      <el-menu-item index="/user">用户管理</el-menu-item>
      <el-menu-item index="/order">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "Header",
  components: {Sidebar}
}
</script>

<style scoped>

.navigation {
  margin-bottom: 5px;
}

</style>
