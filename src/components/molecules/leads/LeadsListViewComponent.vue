<template>
  <v-card>
    <leads-list-view-title-component />
    <leads-list-view-search-component />
    <leads-list-view-results-component />
  </v-card>
</template>

<script>
/**
 * import
 */
import LeadsListViewTitleComponent from "@/components/molecules/leads/LeadsListViewTitleComponent.vue";
import LeadsListViewSearchComponent from "@/components/molecules/leads/LeadsListViewSearchComponent.vue";
import LeadsListViewResultsComponent from "@/components/molecules/leads/LeadsListViewResultsComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    LeadsListViewTitleComponent,
    LeadsListViewSearchComponent,
    LeadsListViewResultsComponent,
  },
};
</script>

<style lang="scss" scoped></style>
