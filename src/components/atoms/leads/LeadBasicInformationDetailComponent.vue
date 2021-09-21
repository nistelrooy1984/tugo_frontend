<template>
  <v-container>
    <v-row class="field-block-header">
      <v-card-title>Basic Information</v-card-title>
    </v-row>
    <v-row>
      <v-col>
        <v-card-title>First Name</v-card-title>
      </v-col>
      <v-col style="display: flex">
        <span>{{ lead.salutation }} {{ lead.first_name }}</span>
      </v-col>
      <v-col></v-col>
      <v-col>
        <v-card-title>Last Name</v-card-title>
      </v-col>
      <v-col>
        <span>{{ lead.last_name }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-title>Email</v-card-title>
      </v-col>
      <v-col>
        <span>{{ lead.email }}</span>
      </v-col>
      <v-col></v-col>
      <v-col>
        <v-card-title>Phone</v-card-title>
      </v-col>
      <v-col>
        <span>{{ lead.phone }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-title>Lead Source</v-card-title>
      </v-col>
      <v-col>
        <span>{{
          name_by_id(
            this.get_masters_data.master_lead_sources,
            lead.master_lead_source_id
          )
        }}</span>
      </v-col>
      <v-col></v-col>
      <v-col>
        <v-card-title>Assigned to</v-card-title>
      </v-col>
      <v-col>
        <span>{{ full_name_by_id(users_data, lead.owner_id) }}</span>
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
    lead: Object,
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", ["get_users_data"]),
    ...mapGetters("leads", ["get_masters_data"]),

    users_data() {
      return this.get_users_data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
