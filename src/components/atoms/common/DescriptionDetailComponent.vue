<docs>
  # Description Detail

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row class="field-block-header">
    <v-card-title>Description Details</v-card-title>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Description</v-card-title>
    </v-col>
    <v-col>
      span {{ $props.description }}
    </v-col>
    <v-col></v-col>
    <v-col></v-col>
    <v-col></v-col>
  </v-row>
</v-container>
</template>

<script>
/**
 * Vue
 */
export default {
  /**
   * props
   */
  props: {
    description: String
  }
};
</script>

<style lang="scss" scoped></style>
