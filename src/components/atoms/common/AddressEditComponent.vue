<docs>
  # Address Input

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
      v-select(
        dense,
        outlined,
        :items='this.get_master_countries_data',
        :value='master_country_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_country_id", $event)',
      )
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Province</v-card-title>
    </v-col>
    <v-col>
      v-select(
        dense,
        outlined,
        :items='this.get_master_provinces_data',
        :value='master_province_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_province_id", $event); $emit("update:master_district_id", null); $emit("update:master_ward_id", null)',
      )
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>District</v-card-title>
    </v-col>
    <v-col>
      v-select(
        dense,
        outlined,
        :items='get_master_districts_data_filter',
        :value='master_district_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_district_id", $event); $emit("update:master_ward_id", null); get_wards_by_district_id($event);',
      )
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Ward</v-card-title>
    </v-col>
    <v-col>
      v-select(
        dense,
        outlined,
        :items='this.get_master_wards_data',
        :value='master_ward_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_ward_id", $event)',
      )
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Street</v-card-title>
    </v-col>
    <v-col>
      <v-textarea outlined :value='street' @change='$emit("update:street", $event)'></v-textarea>
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
    master_country_id: {
      type: Number,
      required: false
    },
    master_province_id: {
      type: Number,
      required: false
    },
    master_district_id: {
      type: Number,
      required: false
    },
    master_ward_id: {
      type: Number,
      required: false
    },
    street: {
      type: String,
      required: false
    }
  },

  /**
   * methods
   */
  methods: {
    ...mapActions("common", ["get_countries_provinces_districts", "get_wards"]),

    get_wards_by_district_id: function(master_district_id) {
      let params = {
        district_id: master_district_id
      };
      this.get_wards(params);
    }
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
    ]),

    get_master_districts_data_filter: function() {
      return this.get_master_districts_data.filter(master_district => {
        return (
          master_district.master_province_id ==
            this.$props.master_province_id ||
          master_district.master_province_id == 0
        );
      });
    }
  },

  /**
   * beforeMount
   */
  beforeMount: function() {
    this.get_countries_provinces_districts();
  }
};
</script>

<style lang="scss" scoped></style>
