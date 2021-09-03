<docs>
  # Contact Edit Full Screen

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-dialog(
  v-model="value",
  fullscreen,
  hide-overlay,
  persistent,
  transition="dialog-bottom-transition",
  scrollable,
  content-class='d-pc d-full'
)
  <v-card tile>
    .d-header
      h2 Creating New Contact
      <v-btn icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    .d-main
      contact-basic-information-component
      address-edit-component(
        :master_country_id.sync='contact.master_country_id',
        :master_province_id.sync='contact.master_province_id',
        :master_district_id.sync='contact.master_district_id',
        :master_ward_id.sync='contact.master_ward_id',
        :street.sync='contact.street'
      )
      description-edit-component(
        :description.sync='contact.description'
      )
    .d-footer.t-right-wrap
      span.a-btn.t-middle.t-primary(@click='') Save
  </v-card>
</template>

<script>
/**
 * import
 */
import ContactBasicInformationComponent from "@/components/atoms/contacts/ContactBasicInformationComponent.vue";
import AddressEditComponent from "@/components/atoms/common/AddressEditComponent.vue";
import DescriptionEditComponent from "@/components/atoms/common/DescriptionEditComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    AddressEditComponent,
    ContactBasicInformationComponent,
    DescriptionEditComponent
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
