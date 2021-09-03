<docs>
  # Contacts Menu Actions

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
.l-column-100
  <v-toolbar dense>
    <v-toolbar-title>Contacts</v-toolbar-title>
    <v-spacer></v-spacer>
    span.pr-4(@click="create_contact")
      <v-btn>
        <v-icon>mdi-plus-thick</v-icon>Add Contact
        contact-edit-component(
          v-model='is_create_contact'
        )
      </v-btn>
    span.pr-4(@click="")
      <v-btn>
        <v-icon>mdi-import</v-icon>Import
      </v-btn>
    span(@click="")
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-icon>mdi-hammer-wrench</v-icon>Customize
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </v-toolbar>
</template>

<script>
/**
 * import
 */
import ContactEditComponent from "@/components/molecules/contacts/ContactEditComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    ContactEditComponent
  },

  /**
   * data
   */
  data: function() {
    return {
      items: [
        { title: "Contacts Fields & Layout" },
        { title: "Contacts Workflows" },
        { title: "Picklists Values" },
        { title: "Contacts Numbering" },
        { title: "Setup Webforms" }
      ],
      is_create_contact: false
    };
  },

  /**
   * methods
   */
  methods: {
    // Open dialog create contact
    create_contact() {
      this.is_create_contact = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.l-column-100 {
  background: #fbfbfb;
  padding: 6px 12px;
}
.v-toolbar {
  background: #fbfbfb;
}
</style>
