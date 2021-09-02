<docs>
  # Contacts Menu Actions

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-card(
  width="100%"
)
  v-toolbar(
    dense
  )
    v-toolbar-title Contacts
    v-spacer
    span.pr-4(@click="new_contact")
      v-btn
        <v-icon>mdi-plus-thick</v-icon> Add Contact
        contact-edit-component(
          v-model='is_new_contact'
        )
    span.pr-4(@click="")
      v-btn
        <v-icon>mdi-import</v-icon> Import
    span(@click="")
      v-menu(
        offset-y
      )
        template(
          v-slot:activator="{ on, attrs }"
        )
          v-btn(
            v-bind="attrs"
            v-on="on"
          )
            <v-icon>mdi-hammer-wrench</v-icon> Customize
            <v-icon>mdi-menu-down</v-icon>
        v-list
          v-list-item(
            v-for="(item, index) in items" :key="index"
          )
            v-list-item-title {{ item.title }}
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
    ContactEditComponent,
  },

  data: function() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      is_new_contact: false
    };
  },

  /**
   * methods
   */
  methods: {
    // Open dialog new contact
    new_contact() {
      this.is_new_contact = true;
    }
  }
};
</script>

<style lang="scss" scoped></style>
