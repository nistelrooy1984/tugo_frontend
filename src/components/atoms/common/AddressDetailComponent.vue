<docs>
  # Address Detail

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row class="field-block-header">
    <v-card-title>Address Details</v-card-title>
  </v-row>
    <v-row>
    <v-col>
      <v-card-title>Country</v-card-title>
    </v-col>
    <v-col>
      span {{ name_by_id(this.get_master_countries_data, contact.master_country_id) }}
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Province</v-card-title>
    </v-col>
    <v-col>
      span {{ name_by_id(this.get_master_provinces_data, contact.master_province_id) }}
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>District</v-card-title>
    </v-col>
    <v-col>
      span {{ name_by_id(this.get_master_districts_data, contact.master_district_id) }}
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Ward</v-card-title>
    </v-col>
    <v-col>
      span {{ name_by_id(this.get_master_wards_data, contact.master_ward_id) }}
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Street</v-card-title>
    </v-col>
    <v-col>
      span {{ contact.street }}
    </v-col>
    <v-col></v-col>
    <v-col></v-col>
    <v-col></v-col>
  </v-row>
</v-container>
</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from "vuex";

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
   * methods
   */
  methods: {
    ...mapActions("common", ["get_countries_provinces_districts", "get_wards"])
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", [
      "get_master_countries_data",
      "get_master_provinces_data",
      "get_master_districts_data",
      "get_master_wards_data"
    ])
  },

  /**
   * beforeMount
   */
  beforeMount: function() {
    // Get Master Data Countries Provinces Districts
    this.get_countries_provinces_districts();

    // Get Master Data Wards
    let params = {
      district_id: this.$props.contact.master_district_id
    };
    this.get_wards(params);
  }
};
</script>

<style lang="scss" scoped></style>
