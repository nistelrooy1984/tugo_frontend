<docs>
  # Contacts List View Search

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
v-container(
  fluid
)
  v-row
    v-col(
      cols="1"
    )
      span(@click="")
        v-btn(
          color="primary"
        )
          <v-icon>mdi-magnify</v-icon> Search
    v-col(
      cols="11"
    )
      div
        v-row
          v-col(
            cols="2"
          )
            v-text-field(
              outlined
              hide-details
              placeholder="Search for first name"
            )
          v-col(
            cols="2"
          )
            v-text-field(
              outlined
              hide-details
              placeholder="Search for last name"
            )
          v-col(
            cols="2"
          )
            v-text-field(
              outlined
              hide-details
              placeholder="Search for title"
            )
          v-col(
            cols="2"
          )
            v-text-field(
              outlined
              hide-details
              placeholder="Search for email"
            )
          v-col(
            cols="2"
          )
            v-text-field(
              outlined
              hide-details
              placeholder="Search for phone"
            )
          v-col(
            cols="2"
          )
            v-text-field(
              outlined
              hide-details
              placeholder="Search for assigned to"
            )
</template>

<script></script>

<style lang="scss" scoped>
$text-field-filled-full-width-outlined-slot-min-height: 36px;
</style>
