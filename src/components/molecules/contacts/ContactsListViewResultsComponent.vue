<docs>
  # Contacts List View Results

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row v-for="contact in this.get_contacts_data">
    <v-col class="max-with-button"></v-col>
    <v-col>
      span {{ contact.first_name }}
    </v-col>
    <v-col>
      span {{ contact.last_name }}
    </v-col>
    <v-col>
      span {{ contact.title }}
    </v-col>
    <v-col>
      span {{ contact.email }}
    </v-col>
    <v-col>
      span {{ contact.phone }}
    </v-col>
    <v-col>
      span {{ full_name_by_id(users_data, contact.owner_id) }}
    </v-col>
  </v-row>
</v-container>
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

<style lang="scss" scoped>
.container {
  max-width: calc(100vw - 20% - 12px - 12px);
}
.row {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.max-with-button {
  max-width: 130px;
}
</style>
