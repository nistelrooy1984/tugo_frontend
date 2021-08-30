<docs>
  # User Informations

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-toolbar-title>
  <div v-if="!currentUser">
    span.pr-4(@click="signup")
      <v-icon>mdi-account-plus</v-icon>Sign Up
      signup-component(
        v-model='is_signup'
      )
    span(@click="login")
      <v-icon>mdi-login</v-icon>Login
      login-component(
        v-model='is_login'
      )
  </div>
  <div v-if="currentUser">
    span.pr-4(@click="profile")
      <v-icon>mdi-account</v-icon>{{ currentUser.first_name }} {{ currentUser.last_name }} ▼
      profile-component(
        v-model='is_profile'
      )
    span(@click="logOut")
      <v-icon>mdi-logout</v-icon>LogOut
  </div>
</v-toolbar-title>
</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from 'vuex';
import SignupComponent from '@/components/atoms/SignupComponent.vue';
import LoginComponent from '@/components/atoms/LoginComponent.vue';
import ProfileComponent from '@/components/atoms/ProfileComponent.vue';

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    SignupComponent,
    LoginComponent,
    ProfileComponent,
  },

  /**
   * data
   */
  data: function () {
    return {
      is_signup: false,
      is_login: false,
      is_profile: false,
    };
  },

  /**
   * methods
   */
  methods: {
    ...mapActions('common', ['get_logout']),

    // User Sign Up
    signup() {
      this.is_signup = true;
    },

    // User Login
    login() {
      this.is_login = true;
    },

    // View Profile User
    profile() {
      this.is_profile = true;
    },

    // User Logout
    logOut() {
      this.$log.info('logOut');
      this.get_logout();
    },
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters('common', ['get_current_user']),

    currentUser() {
      return this.get_current_user;
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  color: #fff;
  width: auto;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
}
</style>
