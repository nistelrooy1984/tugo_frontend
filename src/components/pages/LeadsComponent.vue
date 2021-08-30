<template>
  <div>
    <v-container class="px-2 pt-3" fluid>
      <v-row>
        <v-col class="pa-0" cols="2">
          <lead-menu />
        </v-col>

        <v-col class="pa-0" cols="10">
          <lead-table />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LeadMenu from "../molecules/leads/LeadMenuComponent.vue";
import LeadTable from "../molecules/leads/LeadTableComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * component
   */
  components: {
    LeadMenu,
    LeadTable,
  },
};
</script>

<style></style>
