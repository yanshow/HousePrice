<template>
  <div id="header-wrap">
    <div @click="navMenuState" class="pull-left header-icon">
      <svg-icon iconClass="menu" className="menu" />
    </div>
    <div class="pull-left">
      二手房量化投资助手系统
    </div>
    <div class="pull-right" v-if="data.loginStatus">
      <div class="user-info pull-left">{{ username }}</div>
      <div class="header-icon pull-left" @click="exit">
        <svg-icon iconClass="exit" className="exit" />
      </div>
    </div>
    <div class="pull-right loginBtn" v-if="!data.loginStatus" @click="gotoLogin">
      <el-button type="danger">登录</el-button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {reactive} from "@vue/reactivity";
import {getToken} from "@/utils/app";
export default {
  name: "layoutHeader",
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const username = computed(() => store.state.app.username);
    const data=reactive({
      loginStatus:getToken()
    })
    const navMenuState = () => {
      store.commit("app/SET_COLLAPSE");
      //root.$store.dispatch("app/setMenuStatus");
    };
    const gotoLogin=()=> {
        router.push({
          name: "Login",
        });

    }
    const exit = () => {
      store
        .dispatch("app/exit")
        .then(() => {
          router.push({
            name: "Login",
          });
        })
        .catch(() => {});
    };
    return {
      navMenuState,
      username,
      exit,
      data,
      gotoLogin
    };
  },
};
</script>

<style lang="scss" scoped>
#header-wrap {
  position: fixed;
  top: 0;
  left: $navMenu;
  right: 0;
  height: 75px;
  background-color: white;
  //-webkit-兼容老版本
  @include webkit(transition, all 0.3s ease 0s);
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));

  line-height: 75px;
}
.loginBtn{
  margin-right: 40px;
}
.header-icon {
  padding: 0 32px;
  svg {
    font-size: 25px;
    margin-bottom: -5px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  + .header-icon {
    padding: 0 28px;
  } //+ 选择同一层级元素
}
.open {
  #header-wrap {
    left: $navMenu;
  }
}
.close {
  #header-wrap {
    left: $navMenuMin;
  }
}
</style>
