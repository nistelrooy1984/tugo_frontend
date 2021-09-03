<docs>
  # Contacts List View Results

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row>
    <v-col class="max-with-button">
      <v-card-title>
        <v-checkbox hide-details></v-checkbox>
      </v-card-title>
    </v-col>
    <v-col>
      <v-card-title>First name</v-card-title>
    </v-col>
    <v-col>
      <v-card-title>Last name</v-card-title>
    </v-col>
    <v-col>
      <v-card-title>Title</v-card-title>
    </v-col>
    <v-col>
      <v-card-title>Email</v-card-title>
    </v-col>
    <v-col>
      <v-card-title>Phone</v-card-title>
    </v-col>
    <v-col>
      <v-card-title>Assigned to</v-card-title>
    </v-col>
  </v-row>
</v-container>
</template>

<script></script>

<style lang="scss" scoped>
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 0px 8px;
}
.container {
  max-width: calc(100vw - 20% - 12px - 12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.v-input--selection-controls {
  margin-top: 0px;
}
.max-with-button {
  max-width: 130px;
}
</style>
