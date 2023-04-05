<template>
  <div class="navbar">
    <el-menu router class="navbar-menu" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/ticket/ticketManager" :class="{'active': $route.path.includes('/ticket')}">门票管理</el-menu-item>
      <el-menu-item index="/user/userManager" :class="{active: $route.path.includes('/user')}">用户管理</el-menu-item>
      <el-menu-item index="/order/orderManager" :class="{active: $route.path.includes('order')}">订单管理</el-menu-item>
    </el-menu>
    <div class="navbar-user">
      <el-dropdown>
        <span class="navbar-avatar">
          <img src="../../public/avatar.png" alt="用户头像" />
        </span>
        <template #dropdown>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="handleEditUserInfo">修改个人信息</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import {useRouter} from "vue-router";
export default {
  name: "Header",
  components: {Sidebar},
  setup() {
    const router = useRouter();

    const handleEditUserInfo = () => {
      // 修改个人信息
    };
    const handleLogout = () => {
      console.log("router")
      console.log(router)
      // 退出登录
      router.push('/login')
    };
    return {
      handleEditUserInfo,
      handleLogout
    };
  },
}
</script>

<style scoped>

.navigation {
  margin-bottom: 5px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: center;
  background-color:#545c64;
  padding: 0 20px;
}
.navbar-menu {
  width: 90%;
  height: 100%;
  line-height: 60px;
  font-size: 18px;
}

.navbar-user {
  display: flex;
  align-items: center;
}
.navbar-avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.navbar-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}





</style>
