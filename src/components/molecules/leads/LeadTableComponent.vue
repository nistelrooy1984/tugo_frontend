<template>
  <div>
    <v-card elevation="1">
      <v-card-title>
        Data leads
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="this.get_leads_data"
        :items-per-page="5"
        :search="search"
        single-select
        @click:row="openPopup"
      >
        <template #[`item.owner_id`]="{ item }">
          {{ full_name_by_id(users_data, item.owner_id) }}
        </template>
      </v-data-table>
    </v-card>

    <lead-detail
      v-model="is_popup"
      :users_data="users_data"
      :lead_data="this.lead_data"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import LeadDetail from "./LeadDetailComponent.vue";

export default {
  methods: {
    ...mapActions("leads", ["get_leads"]),
    ...mapActions("common", [
      "get_users",
      "get_countries_provinces_districts",
      "get_wards_by_district_id",
    ]),

    openPopup(item) {
      this.initializeInfoLead(item);
      this.is_popup = true;
    },

    async initializeInfoLead(lead) {
      await this.get_wards_by_district_id(lead.master_district_id);

      this.lead_data = lead;
      this.lead_data.country = this.get_common_master_name(
        "master_countries",
        lead.master_country_id
      );
      this.lead_data.province = this.get_common_master_name(
        "master_provinces",
        lead.master_province_id
      );
      this.lead_data.district = this.get_common_master_name(
        "master_districts",
        lead.master_district_id
      );
      this.lead_data.ward = this.get_common_master_name(
        "master_wards",
        lead.master_ward_id
      );
    },
  },

  beforeMount: function () {
    this.get_leads();
    this.get_users();
    this.get_countries_provinces_districts();
  },

  computed: {
    ...mapGetters("common", ["get_users_data", "get_common_master_name"]),
    ...mapGetters("leads", ["get_leads_data"]),

    headers() {
      return [
        { text: "First name", value: "first_name" },
        { text: "Last name", value: "last_name" },
        { text: "Company", value: "" },
        { text: "Primary Phone", value: "phone" },
        { text: "Website", value: "" },
        { text: "Primary Email", value: "email" },
        { text: "Assigned to", value: "owner_id" },
      ];
    },

    users_data() {
      return this.get_users_data;
    },
  },

  data() {
    return {
      is_popup: false,
      lead_data: {},
      search: "",
    };
  },

  components: {
    LeadDetail,
  },
};
</script>

<style></style>
