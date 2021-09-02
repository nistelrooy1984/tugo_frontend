<docs>
  # Contacts List View Results

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-container(
  fluid
)
  v-row
    v-col(
      cols="1"
    )
    v-col(
      cols="11"
    )
      div
        v-row(
          v-for="contact in this.get_contacts_data"
        )
          v-col(
            cols="2"
          ) {{ contact.first_name }}
          v-col(
            cols="2"
          ) {{ contact.last_name }}
          v-col(
            cols="2"
          ) {{ contact.title }}
          v-col(
            cols="2"
          ) {{ contact.email }}
          v-col(
            cols="2"
          ) {{ contact.phone }}
          v-col(
            cols="2"
          ) {{ full_name_by_id(users_data, contact.owner_id) }}
</template>

<script>
/**
 * import
 */
import { mapGetters } from "vuex";

/**
 * Vue
 */
export default {
  /**
   * computed
   */
  computed: {
    ...mapGetters("contacts", ["get_contacts_data"]),
    ...mapGetters("common", ["get_users_data"]),

    users_data() {
      return this.get_users_data;
    }
  }
};
</script>

<style lang="scss" scoped></style>
