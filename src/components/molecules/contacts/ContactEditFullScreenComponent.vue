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
      contact-basic-information-edit-component(
        :salutation.sync='contact.salutation',
        :first_name.sync='contact.first_name',
        :last_name.sync='contact.last_name',
        :email.sync='contact.email',
        :phone.sync='contact.phone',
        :master_lead_source_id.sync='contact.master_lead_source_id',
        :title.sync='contact.title',
        :birthday.sync='contact.birthday',
        :is_do_not_call.sync='contact.is_do_not_call',
        :owner_id.sync='contact.owner_id'
      )
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
      span.a-btn.t-middle.t-primary(@click='save') Save
  </v-card>
</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from "vuex";
import ContactBasicInformationEditComponent from "@/components/atoms/contacts/ContactBasicInformationEditComponent.vue";
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
    ContactBasicInformationEditComponent,
    DescriptionEditComponent
  },

  /**
   * data
   */
  data: function() {
    return {
      contact: {
        id: null,
        salutation: null,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        title: null,
        creator_id: null,
        owner_id: null,
        modified_by_id: null,
        master_lead_source_id: null,
        is_converted_from_lead: null,
        is_do_not_call: null,
        birthday: null,
        master_country_id: null,
        master_province_id: null,
        master_district_id: null,
        master_ward_id: null,
        street: null,
        description: null,
        delete_flag: null
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
    ...mapActions("contacts", ["get_masters", "get_contacts", "post_contact"]),

    // Save
    async save() {
      try {
        this.contact.creator_id = this.current_user.id;
        this.contact.modified_by_id = this.current_user.id;
        if (this.contact.owner_id == null) {
          this.contact.owner_id = this.current_user.id;
        }

        await this.post_contact(this.contact);

        await this.get_contacts();

        this.clear_data_contact();

        this.close();
      } catch (error) {
        this.$log.debug(error);
      }
    },

    // Clear data after save
    clear_data_contact() {
      this.contact.id = null;
      this.contact.salutation = null;
      this.contact.first_name = null;
      this.contact.last_name = null;
      this.contact.email = null;
      this.contact.phone = null;
      this.contact.title = null;
      this.contact.creator_id = null;
      this.contact.owner_id = null;
      this.contact.modified_by_id = null;
      this.contact.master_lead_source_id = null;
      this.contact.is_converted_from_lead = null;
      this.contact.is_do_not_call = null;
      this.contact.birthday = null;
      this.contact.master_country_id = null;
      this.contact.master_province_id = null;
      this.contact.master_district_id = null;
      this.contact.master_ward_id = null;
      this.contact.street = null;
      this.contact.description = null;
      this.contact.delete_flag = null;
    },

    // Close Dialog
    close() {
      this.dialog = false;
    }
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", ["get_current_user"]),

    current_user() {
      return this.get_current_user;
    },

    dialog: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  },

  /**
   * beforeMount
   */
  beforeMount: function() {
    this.get_masters();
  }
};
</script>

<style lang="scss" scoped></style>
