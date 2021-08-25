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
    span.pr-4(@click="")
      v-btn
        <v-icon>mdi-plus-thick</v-icon> Add Contact
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
 * Vue
 */
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
