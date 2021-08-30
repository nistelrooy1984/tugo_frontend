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
      v-container(
        class="grey lighten-5"
      )
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Username
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ currentUser.user_name }}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Full Name
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ currentUser.first_name }} {{ currentUser.last_name}}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Email
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ currentUser.email }}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Phone
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ currentUser.phone }}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Department
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ field_name_by_id(departments_data, currentUser.department_id, "department_name") || "-" }}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Role
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ field_name_by_id(roles_data, currentUser.role_id, "role_name") || "-" }}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Reports To
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ full_name_by_id(users_data, currentUser.reports_to_id) || "-" }}
        v-row(
          no-gutters
        )
          v-col(
            cols="3"
          )
            v-card(
              class="pa-2 bg-lightgrey"
              tile
            ) Description
          v-col(
            cols="9"
          )
            v-card(
              class="pa-2"
              tile
            ) {{ currentUser.description || "-" }}
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
    ...mapGetters('common', ['get_current_user', 'get_users_data', 'get_roles_data', 'get_departments_data']),

    currentUser() {
      return this.get_current_user;
    },

    users_data() {
      return this.get_users_data;
    },

    roles_data() {
      return this.get_roles_data;
    },

    departments_data() {
      return this.get_departments_data;
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
.bg-lightgrey {
  background-color: lightgrey;
  font-weight: bold;
}
</style>