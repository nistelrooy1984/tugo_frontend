<docs>
  # Contacts List View Search

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row>
    <v-col class="max-with-button">
      span(@click="")
        <v-btn color="primary">
          <v-icon>mdi-magnify</v-icon>Search
        </v-btn>
    </v-col>
    <v-col>
      <v-text-field dense outlined hide-details placeholder="Search for first name"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field dense outlined hide-details placeholder="Search for last name"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field dense outlined hide-details placeholder="Search for title"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field dense outlined hide-details placeholder="Search for email"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field dense outlined hide-details placeholder="Search for phone"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field dense outlined hide-details placeholder="Search for assigned to"></v-text-field>
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
}
.max-with-button {
  max-width: 130px;
}
</style>
