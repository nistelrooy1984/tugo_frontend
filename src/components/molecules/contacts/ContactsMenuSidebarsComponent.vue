<docs>
  # Contacts Menu Sidebars

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-card
  v-container
    v-toolbar(
      dense
    )
      v-toolbar-title Lists
      v-spacer
      v-btn(
        icon
      )
        v-icon mdi-plus-thick
  v-divider
  v-container
    v-text-field(
      outlined
      hide-details
      placeholder="Search for list"
    )
  v-container
    v-card-text MY LIST
</template>

<script></script>

<style lang="scss" scoped></style>
