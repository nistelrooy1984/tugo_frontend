<template>
  <main id="LeadsComponent">
    <leads-menu-actions-component />
    <div class="l-column-20">
      <leads-menu-sidebars-component />
    </div>
    <v-divider vertical></v-divider>
    <div class="l-column-80">
      <leads-list-view-component />
    </div>
  </main>
</template>

<script>
/**
 * import
 */
import { mapActions } from "vuex";
import LeadsMenuActionsComponent from "@/components/atoms/leads/LeadsMenuActionsComponent.vue";
import LeadsMenuSidebarsComponent from "@/components/molecules/leads/LeadsMenuSidebarsComponent.vue";
import LeadsListViewComponent from "@/components/molecules/leads/LeadsListViewComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    LeadsMenuActionsComponent,
    LeadsMenuSidebarsComponent,
    LeadsListViewComponent,
  },

  /**
   * methods
   */
  methods: {
    ...mapActions("leads", ["get_leads"]),
  },

  /**
   * beforeMount
   */
  beforeMount: function () {
    this.get_leads();
  },
};
</script>

<style lang="scss" scoped>
.v-divider {
  height: calc(100vh - 48px - 6px - 48px - 6px);
}
</style>
