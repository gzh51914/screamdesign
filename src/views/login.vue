<template>
  <div class="login">
    <van-nav-bar title="登录" right-text="快速注册" left-arrow @click-right="onClickRight">
      <van-icon name="home-o" slot="left" size="22" color="#000" @click="goto"/>
    </van-nav-bar>
    <!-- register -->
    <van-cell-group class="reg" v-show="!isShow" :border="border">
      <van-field
        v-model.trim="username"
        required
        clearable
        label="用户名"
        placeholder="请输入手机号/邮箱"
        :error-message="errormsg"
        @blur="verifyuser"
      />
      <van-field
        v-model.trim="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="errorpsw"
        @blur="verifypsw"
      />
      <van-field
        v-model.trim="password1"
        type="password"
        label="确认密码"
        placeholder="请输入密码"
        required
        :error-message="errorpsw1"
        @blur="verifypsw2"
      />
      <van-button color="#FFD444" size="normal" type="primary" @click="freeReg">免费注册</van-button>
    </van-cell-group>
    <!-- login -->
    <van-cell-group class="login" v-show="isShow" :border="border">
      <van-field
        v-model.trim="usernamelogin"
        required
        clearable
        input-class
        label="用户名"
        placeholder="请输入手机号/邮箱"
        :error-message="errormsg1"
        @blur="usernameLogin"
      />
      <van-field
        v-model.trim="passwordlogin"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="errorpsw2"
        @blur="passwordLogin"
      />
      <van-field
        v-model.trim="verify"
        center
        required
        clearable
        label="验证码"
        placeholder="请输入验证码"
        :error-message="errorverify"
        @blur="verifyCodeLogin"
      >
        <template #button>
          <van-button size="small" @click="verifyCode">
            <SIdentify :identifyCode="identifyCode"></SIdentify>
          </van-button>
        </template>
      </van-field>
      <van-button color="#FFD444" size="large" type="primary" @click="userLogin">登录</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Field, CellGroup, NavBar, Toast } from "vant";
import { instance2 } from "@/utils/http";
import SIdentify from "@/components/identify.vue";
Vue.use(SIdentify);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      password: "",
      password1: "",
      errormsg: "",
      errorpsw: "",
      errorpsw1: "",
      errormsg1: "",
      errorpsw2: "",
      errorverify: "",
      usernamelogin: "18269137161",
      passwordlogin: "a123456",
      verify: "",
      identifyCodes: "1234567890",
      identifyCode: "",
      border: false,
      isShow: true
    };
  },
  components: {
    SIdentify
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    onClickRight() {
      this.isShow = !this.isShow;
    },
    goto () {
      this.$router.push('/home')
    },
    // register-verifyuser
    verifyuser() {
      const regPhone = /^1[3-9]\d{9}$/;
      const regEmail = /[\w-]+(\.[\w-]+)*@([\w-]+\.)+\w{2,14}/;
      if (regPhone.test(this.username) || regEmail.test(this.username)) {
        this.errormsg = "";
      } else {
        this.errormsg = "手机号/邮箱格式错误";
      }
    },
    // register- verifypsw
    verifypsw() {
      const regpsw = /^[a-zA-Z]\w{5,10}$/;
      if (regpsw.test(this.password)) {
        this.errorpsw = "";
      } else {
        this.errorpsw = "密码格式错误";
      }
    },
    // register- verifypsw2
    verifypsw2() {
      if (this.password === this.password1) {
        this.errorpsw1 = "";
      } else {
        this.errorpsw1 = "两次密码不一致";
      }
    },
    // freeReg
    freeReg() {
      if (!this.errormsg && !this.errorpsw && !this.errorpsw1) {
        instance2
          .post("http://114.215.128.76:3000/user/reg ", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res.data);
            if (res.data.type === 0) {
              this.errormsg = "用户名已存在";
            } else {
              this.isShow = !this.isShow;
            }
          });
      }
    },
    // login-usernameLogin
    usernameLogin() {
      const loginPhone = /^1[3-9]\d{9}$/;
      const loginEmail = /[\w-]+(\.[\w-]+)*@([\w-]+\.)+\w{2,14}/;
      if (
        loginPhone.test(this.usernamelogin) ||
        loginEmail.test(this.usernamelogin)
      ) {
        this.errormsg1 = "";
      } else {
        this.errormsg1 = "手机号/邮箱输入错误";
      }
    },
    // login-passwordLogin
    passwordLogin() {
      const loginpsw = /^[a-zA-Z]\w{5,10}$/;
      if (loginpsw.test(this.passwordlogin)) {
        this.errorpsw2 = "";
      } else {
        this.errorpsw2 = "密码输入错误";
      }
    },
    // randomNum And verifyCode And makeCode
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    verifyCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    // login-verifyCodeLogin
    verifyCodeLogin() {
      console.log(this.identifyCode);
      if (this.verify === this.identifyCode) {
        this.errorverify = "";
      } else {
        this.errorverify = "验证码错误";
      }
    },
    //  userLogin
    userLogin() {
      // console.log(this.usernamelogin, this.passwordlogin);
      if (!this.errormsg1 && !this.errorpsw2 && !this.errorverify) {
        instance2
          .post("http://114.215.128.76:3000/user/login", {
            username: this.usernamelogin,
            password: this.passwordlogin
          })
          .then(res => {
            console.log(res);
            if (res.data.type === 1) {
              Toast("登录成功");
              localStorage.setItem("token", res.data.authorization);
              localStorage.setItem("uid",res.data.datalist.uid)
              localStorage.setItem("username",res.data.datalist.username)
              this.$router.replace(localStorage.getItem("path"));
            }
          })
      }
    }
  }
}
</script>

<style scoped>
.van-cell-group {
  margin-top: 0.1rem;
}
.van-nav-bar__title {
  color: #000;
  font-weight: 700;
}
.van-nav-bar__text {
  color: #000;
}
.van-button--primary {
  width: 90%;
  margin: 0.3rem 0 0.3rem 0.18rem;
}
.van-button {
  border: 0;
}
.van-button::before {
  -webkit-tap-highlight-color:transparent
}
</style>