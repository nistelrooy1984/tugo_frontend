<template>
  <div>
    <h1>Leads</h1>
    {{ this.get_leads_data }}
    {{ this.get_roles_data }}
  </div>
</template>

<script>
/**
 * import
 */
import { mapActions, mapGetters } from "vuex";

/**
 * Vue
 */
export default {
  /**
   * methods
   */
  methods: {
    ...mapActions("common", ["get_roles"]),
    ...mapActions("leads", ["get_leads"])
  },

  /**
   * beforeMount
   */
  beforeMount: function() {
    this.get_leads();
    this.get_roles();
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("leads", ["get_leads_data"]),
    ...mapGetters("common", ["get_roles_data"])
  }
};
</script>

<style></style>
