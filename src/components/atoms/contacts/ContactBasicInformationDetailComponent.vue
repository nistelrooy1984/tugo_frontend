<docs>
  # Contact Basic Information Detail

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row class="field-block-header">
    <v-card-title>Basic Information</v-card-title>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>First Name</v-card-title>
    </v-col>
    <v-col style="display: flex;;">
      span {{ contact.salutation }} {{ contact.first_name }}
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Last Name</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.last_name }}
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Email</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.email }}
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Phone</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.phone }}
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Lead Source</v-card-title>
    </v-col>
    <v-col>
      span {{ name_by_id(this.get_masters_data.master_lead_sources, contact.master_lead_source_id) }}
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Title</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.title }}
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Birthday</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.birthday }}
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Do Not Call</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.is_do_not_call }}
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Assigned to</v-card-title>
    </v-col>
    <v-col>
      span {{ full_name_by_id(users_data, contact.owner_id) }}
    </v-col>
    <v-col></v-col>
    <v-col>
    </v-col>
    <v-col>
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
   * props
   */
  props: {
    contact: Object
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", ["get_users_data"]),
    ...mapGetters("contacts", ["get_masters_data"]),

    users_data() {
      return this.get_users_data;
    }
  }
};
</script>

<style lang="scss" scoped></style>
