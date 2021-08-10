<template>
  <div>
    <h1>Leads</h1>
    <v-data-table
      :headers="headers"
      :items="this.get_leads_data"
      :items-per-page="5"
      single-select
      @click:row="openPopup"
    >
      <template #[`item.owner_id`]="{ item }">
        {{ getFullNameAssignedTo(item.owner_id) }}
      </template>
    </v-data-table>
    <lead-detail v-model="is_popup" :lead_data="this.lead_data" />
  </div>
</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from "vuex";

import LeadDetail from "../atoms/LeadDetailComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * methods
   */
  methods: {
    ...mapActions("leads", ["get_leads"]),
    ...mapActions("common", [
      "get_users",
      "get_countries_provinces_districts",
      "get_wards_by_district_id",
    ]),

    getFullNameAssignedTo(owner_id) {
      const user = this.get_users_data.find((user) => {
        return user.id == owner_id;
      });

      const fullName = user.first_name
        ? user.first_name + " " + user.last_name
        : user.last_name;
      return fullName;
    },

    getCountryName(country_id) {
      return this.get_common_master_name("master_countries", country_id);
    },

    getProvinceName(province_id) {
      return this.get_common_master_name("master_provinces", province_id);
    },

    getDistrictName(district_id) {
      return this.get_common_master_name("master_districts", district_id);
    },

    getWardNameByDistrictId(ward_id) {
      return this.get_common_master_name("master_wards", ward_id);
    },

    openPopup(item) {
      this.initializeInfoLead(item);
      this.is_popup = true;
    },

    async initializeInfoLead(lead) {
      await this.get_wards_by_district_id(lead.master_district_id);

      this.lead_data = lead;
      this.lead_data.assigned_to = this.getFullNameAssignedTo(lead.owner_id);
      this.lead_data.country = this.getCountryName(lead.master_country_id);
      this.lead_data.province = this.getProvinceName(lead.master_province_id);
      this.lead_data.district = this.getDistrictName(lead.master_district_id);
      this.lead_data.ward = this.getWardNameByDistrictId(lead.master_ward_id);
    },
  },

  /**
   * beforeMount
   */
  beforeMount: function () {
    this.get_leads();
    this.get_users();
    this.get_countries_provinces_districts();
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("leads", ["get_leads_data"]),
    ...mapGetters("common", ["get_users_data", "get_common_master_name"]),

    headers() {
      return [
        { text: "First name", value: "first_name" },
        { text: "Last name", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Assigned to", value: "owner_id" },
      ];
    },
  },

  /**
   * component
   */
  components: {
    LeadDetail,
  },

  /**
   * data
   */
  data() {
    return {
      is_popup: false,
      lead_data: {},
    };
  },
};
</script>

<style></style>
