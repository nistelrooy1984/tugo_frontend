<docs>
  # Signup

  # Overview

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
      v-toolbar-title User Sign Up
    v-card-text
      v-form
        v-text-field(
          :error-messages='v_error("user_name")'
          label="Username"
          v-model="user_info.user_name"
        )
        v-text-field(
          :error-messages='v_error("password")'
          label="Password"
          v-model="user_info.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        )
        v-text-field(
          :error-messages='v_error("first_name")'
          label="First Name"
          v-model="user_info.first_name"
        )
        v-text-field(
          :error-messages='v_error("last_name")'
          label="Last Name"
          v-model="user_info.last_name"
        )
        v-text-field(
          :error-messages='v_error("email")'
          label="Email"
          v-model="user_info.email"
        )
        v-text-field(
          :error-messages='v_error("phone")'
          label="Phone"
          v-model="user_info.phone"
        )
        v-text-field(
          :error-messages='v_error("department_id")'
          label="Department Id"
          v-model="user_info.department_id"
        )
        v-text-field(
          :error-messages='v_error("role_id")'
          label="Role Id"
          v-model="user_info.role_id"
        )
        v-text-field(
          label="Reports To Id"
          :error-messages='v_error("reports_to_id")'
          v-model="user_info.reports_to_id"
        )
        v-text-field(
          :error-messages='v_error("description")'
          label="Description"
          v-model="user_info.description"
        )
    v-divider
    v-card-actions
      v-btn(
        @click='signup'
        color="primary"
      ) Signup
      v-spacer
      v-btn(
        @click="close"
      ) Close

</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from 'vuex'

/**
 * Vue
 */
export default {
  /**
   * data
   */
  data () {
    return {
      show: false,
      user_info: {
        user_name: null,
        password: null,
      },
    }
  },

  /**
   * props
   */
  props: {
    value: Boolean,
  },

  /**
   * methods
   */
  methods: {
    ...mapActions('common', ['post_user']),

    async signup() {
      try {
        let params = {
          params: {
            user_name: this.user_info.user_name,
            password: this.user_info.password,
          }
        };

        await this.post_user(params);

        this.close();
      } catch (error) {
        console.log(error);
      }
    },

    // Close Dialog
    close() {
      this.dialog = false;
    },
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters('global', ['v_error']),

    dialog: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit('input', newValue);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
