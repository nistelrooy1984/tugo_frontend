<docs>
  # Contacts

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
main#ContactsComponent
  contacts-menu-actions-component
  .l-column-15
    contacts-menu-sidebars-component
  v-divider(
    vertical
  )
  .l-column-85
    contacts-list-view-component
</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from "vuex";
import ContactsMenuActionsComponent from "@/components/atoms/contacts/ContactsMenuActionsComponent.vue";
import ContactsMenuSidebarsComponent from "@/components/molecules/contacts/ContactsMenuSidebarsComponent.vue";
import ContactsListViewComponent from "@/components/molecules/contacts/ContactsListViewComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    ContactsMenuActionsComponent,
    ContactsMenuSidebarsComponent,
    ContactsListViewComponent
  },

  /**
   * methods
   */
  methods: {
    ...mapActions("common", ["get_roles", "get_users"]),
    ...mapActions("contacts", ["get_contacts"])
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("contacts", ["get_contacts_data"])
  },

  /**
   * beforeMount
   */
  beforeMount: function() {
    this.get_contacts();
    this.get_roles();
    this.get_users();
  }
};
</script>

<style lang="scss" scoped></style>
