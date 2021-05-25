<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center> 
        <div>个人中心</div> 
      </template>
    </nav-bar>
    <login></login>
    <money></money>
    <profile-info></profile-info>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Login from "./childComps/Login.vue";
import Money from "./childComps/Money.vue";
import ProfileInfo from "./childComps/ProfileInfo.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    Login,
    Money,
    ProfileInfo,
  },
};
</script>
  
     

<style scoped>
.profile .nav-bar {
  color: #fff;
  box-shadow: 0 0 transparent;
  background-color: var(--color-tint);
}
</style>