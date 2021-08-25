<docs>
  # Contacts List View Results

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
    v-col(
      cols="11"
    )
      div
        v-row
          v-col(
            cols="2"
          )
            v-card-title First name
          v-col(
            cols="2"
          )
            v-card-title Last name
          v-col(
            cols="2"
          )
            v-card-title Title
          v-col(
            cols="2"
          )
            v-card-title Email
          v-col(
            cols="2"
          )
            v-card-title Phone
          v-col(
            cols="2"
          )
            v-card-title Assigned to
</template>

<script></script>

<style lang="scss" scoped>
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 0px 8px;
}
</style>
