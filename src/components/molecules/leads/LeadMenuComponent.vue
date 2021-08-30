<template>
  <v-navigation-drawer :height="getHeightBrower">
    <v-row class="pa-1 ma-0">
      <span class="d-inline font-weight-light">LISTS</span>
      <v-spacer></v-spacer>
      <v-btn class="together pa-0 mr-2" x-small elevation="0">
        <v-icon> mdi-plus-box-outline </v-icon>
      </v-btn>
    </v-row>

    <v-divider class="ml-1 mr-2"></v-divider>

    <v-text-field
      class="mt-3 mb-1 ml-1 mr-2"
      label="Search for List"
      color="black"
      dense
      outlined
    >
    </v-text-field>

    <v-card elevation="0">
      <v-card-title class="pa-1 ml-1 mr-2 font-weight-light" style="font-size: 16px">
        MY LIST
      </v-card-title>
      <v-card-text class="pb-0"> Hot Leads </v-card-text>
      <v-card-text class="px-4 py-2"> This Month Leads </v-card-text>

      <v-card-title class="pa-1 ml-1 mr-2 font-weight-light" style="font-size: 16px">
        SHARED LIST
      </v-card-title>
      <v-card-text class="pb-0"> All </v-card-text>
    </v-card>

    <v-row class="pa-1 mx-0 my-3">
      <span class="d-inline font-weight-light">TAGS</span>
    </v-row>
    <v-divider class="ml-1 mr-2"></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    getHeightBrower() {
      return window.innerHeight - 72;
    },
  },
};
</script>

<style></style>
