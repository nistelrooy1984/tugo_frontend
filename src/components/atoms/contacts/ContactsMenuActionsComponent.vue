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
    span.pr-4(@click="show_contact_edit_full_screen")
      <v-btn>
        <v-icon>mdi-plus-thick</v-icon>Add Contact
        contact-edit-full-screen-component(
          v-model='is_show_contact_edit_full_screen'
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
import ContactEditFullScreenComponent from "@/components/molecules/contacts/ContactEditFullScreenComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    ContactEditFullScreenComponent
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
      is_show_contact_edit_full_screen: false
    };
  },

  /**
   * methods
   */
  methods: {
    // Open dialog contact edit full screen
    show_contact_edit_full_screen() {
      this.is_show_contact_edit_full_screen = true;
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
