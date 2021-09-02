<docs>
  # Contact Input

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-dialog(
  v-model="value",
  :persistent="true",
  transition="dialog-top-transition",
  fullscreen
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
      v-toolbar-title Create new contact
    v-card-text
      v-container
        address-edit-component(
          :master_country_id.sync='contact.master_country_id',
          :master_province_id.sync='contact.master_province_id',
          :master_district_id.sync='contact.master_district_id',
          :master_ward_id.sync='contact.master_ward_id',
          :street.sync='contact.street'
        )
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
import AddressEditComponent from "@/components/atoms/common/AddressEditComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    AddressEditComponent
  },

  /**
   * data
   */
  data: function() {
    return {
      contact: {
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        title: null,
        owner_id: null,
        master_country_id: null,
        master_province_id: null,
        master_district_id: null,
        master_ward_id: null,
        street: null,
        master_leadsource_id: null,
        is_converted_from_lead: null,
        is_do_not_call: null,
        source: null,
        description: null
      }
    };
  },

  /**
   * props
   */
  props: {
    value: Boolean
  },

  /**
   * methods
   */
  methods: {
    // Close Dialog
    close() {
      this.dialog = false;
    }
  },

  /**
   * computed
   */
  computed: {
    dialog: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
