<docs>
  # Login
    Page for user login

  # Overview
    Enter username, email or phone and password for login

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-dialog(
  v-model="value",
  :persistent="true",
  transition="dialog-top-transition",
  max-width="600"
)
  v-card(
    tile
  )
    v-toolbar(
      dark
      color="primary"
    )
      v-btn(
        icon
        dark
        @click="close"
      )
        v-icon mdi-close
      v-toolbar-title User Login
    v-card-text
      v-form
        v-text-field(
          label="Username, Email or Phone"
          outlined
          v-model="login_info.user_info"
          :error-messages='v_error("user_info")'
        )
        v-text-field(
          label="Password"
          outlined
          v-model="login_info.password"
          :error-messages='v_error("password")'
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        )
    v-divider
    v-card-actions
      v-btn(
        @click='login'
        color="primary"
      ) Login
      v-spacer
      v-btn(
        @click="close"
      ) Close

</template>

<script>
/**
 * import
 */
import { mapActions } from "vuex";

/**
 * Vue
 */
export default {
  /**
   * data
   */
  data() {
    return {
      show: false,
      login_info: {
        user_info: null,
        password: null
      }
    };
  },

  /**
   * props
   */
  props: {
    value: Boolean
  },

  /**
   * methods
   */
  methods: {
    ...mapActions("common", [
      "get_login",
      "get_users",
      "get_roles",
      "get_departments"
    ]),

    async login() {
      try {
        await this.get_login(this.login_info);

        // Get Users
        await this.get_users();

        // Get Roles
        await this.get_roles();

        // Get Departments
        await this.get_departments();

        // Close Dialog
        this.close();
      } catch (error) {
        this.$log.debug(error);
      }
    },

    // Close Dialog
    close() {
      this.dialog = false;
      this.clear_error_messages();
    }
  },

  /**
   * computed
   */
  computed: {
    dialog: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-form {
  padding: 24px 0px 0px;
}
</style>
