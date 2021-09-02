<docs>
  # Address Input

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-container
  v-row
    v-col
      v-card Country
    v-col
      v-combobox(
        :items='this.get_master_countries_data',
        :value='master_country_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_country_id", $event)',
      )
    v-col
      v-card Province
    v-col
      v-combobox(
        :items='this.get_master_provinces_data',
        :value='master_province_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_province_id", $event)',
      )
  v-row
    v-col
      v-card District
    v-col
      v-combobox(
        :items='get_master_districts_data_filter',
        :value='master_district_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_district_id", $event)',
      )
    v-col
      v-card Ward
    v-col
      v-combobox(
        :items='this.get_master_wards_data',
        :value='master_ward_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_ward_id", $event)',
      )
  v-row
    v-col
      v-card Street
    v-col
      v-textarea(
        :value='street',
        @change='$emit("update:street", $event)',
      )
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
    ...mapActions("common", ["get_countries_provinces_districts"])
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
