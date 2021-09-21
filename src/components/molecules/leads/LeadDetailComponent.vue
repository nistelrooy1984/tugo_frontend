<template>
  <v-dialog
    v-model="value"
    fullscreen
    hide-overlay
    persistent
    transition="dialog-bottom-transition"
    scrollable
    content-class="d-pc d-full"
  >
    <v-card tile>
      <div class="d-header">
        <h2>Lead Detail</h2>
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="d-main t-no-footer">
        <lead-basic-information-detail-component :lead="lead" />
        <address-detail-component :object="lead" />
        <description-detail-component :description="lead.description" />
      </div> </v-card
  ></v-dialog>
</template>

<script>
/**
 * import
 */
import LeadBasicInformationDetailComponent from "@/components/atoms/leads/LeadBasicInformationDetailComponent.vue";
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
    LeadBasicInformationDetailComponent,
    AddressDetailComponent,
    DescriptionDetailComponent,
  },

  /**
   * props
   */
  props: {
    value: Boolean,
    lead: Object,
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
