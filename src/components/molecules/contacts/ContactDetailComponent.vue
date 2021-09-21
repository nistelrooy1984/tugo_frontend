<docs>
  # Contact Detail

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
      h2 Contact Detail
      <v-btn icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    .d-main.t-no-footer
      contact-basic-information-detail-component(
        :contact='contact',
      )
      address-detail-component(
        :object='contact',
      )
      description-detail-component(
        :description='contact.description',
      )
  </v-card>
</template>

<script>
/**
 * import
 */
import ContactBasicInformationDetailComponent from "@/components/atoms/contacts/ContactBasicInformationDetailComponent.vue";
import AddressDetailComponent from "@/components/atoms/common/AddressDetailComponent.vue";
import DescriptionDetailComponent from "@/components/atoms/common/DescriptionDetailComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    ContactBasicInformationDetailComponent,
    AddressDetailComponent,
    DescriptionDetailComponent,
  },

  /**
   * props
   */
  props: {
    value: Boolean,
    contact: Object,
  },

  /**
   * methods
   */
  methods: {
    // Close Dialog
    close() {
      this.dialog = false;
    },
  },

  /**
   * computed
   */
  computed: {
    dialog: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
