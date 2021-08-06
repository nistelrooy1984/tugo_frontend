<docs>
  # User Login Profiles

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
      v-toolbar-title User Informations
    v-card-text
      v-form
        v-text-field(
          label="Username"
          v-model="currentUser.user_name"
        )
        v-text-field(
          label="First Name"
          v-model="currentUser.first_name"
        )
        v-text-field(
          label="Last Name"
          v-model="currentUser.last_name"
        )
        v-text-field(
          label="Email"
          v-model="currentUser.email"
        )
        v-text-field(
          label="Phone"
          v-model="currentUser.phone"
        )
        v-text-field(
          label="Department Id"
          v-model="currentUser.department_id"
        )
        v-text-field(
          label="Role Id"
          v-model="currentUser.role_id"
        )
        v-text-field(
          label="Reports To Id"
          v-model="currentUser.reports_to_id"
        )
        v-text-field(
          label="Description"
          v-model="currentUser.description"
        )
    v-divider
    v-card-actions
      v-spacer
      v-btn(
        @click="close"
      ) Close
</template>

<script>
/**
 * import
 */
import { mapGetters } from 'vuex'

/**
 * Vue
 */
export default {
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
    // Close Dialog
    close() {
      this.dialog = false;
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