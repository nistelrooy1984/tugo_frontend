<docs>
  # Contacts List View

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-card
  contacts-list-view-title-component
  contacts-list-view-search-component
  contacts-list-view-results-component
</template>

<script>
/**
 * import
 */
import ContactsListViewTitleComponent from "@/components/molecules/contacts/ContactsListViewTitleComponent.vue";
import ContactsListViewSearchComponent from "@/components/molecules/contacts/ContactsListViewSearchComponent.vue";
import ContactsListViewResultsComponent from "@/components/molecules/contacts/ContactsListViewResultsComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    ContactsListViewTitleComponent,
    ContactsListViewSearchComponent,
    ContactsListViewResultsComponent
  }
};
</script>

<style lang="scss" scoped></style>
