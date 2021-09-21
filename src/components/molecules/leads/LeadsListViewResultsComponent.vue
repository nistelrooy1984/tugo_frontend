<template>
  <v-container>
    <v-row
      v-for="lead in this.get_leads_data"
      :key="lead.id"
      @click="show_lead_detail(lead)"
    >
      <v-col class="max-with-button"></v-col>
      <v-col>
        <span>{{ lead.first_name }}</span>
      </v-col>
      <v-col>
        <span>{{ lead.last_name }}</span>
      </v-col>
      <v-col>
        <span>{{ lead.phone }}</span>
      </v-col>
      <v-col>
        <span>{{ lead.email }}</span>
      </v-col>
      <v-col>
        <span>{{ full_name_by_id(users_data, lead.owner_id) }}</span>
      </v-col>
    </v-row>
    <lead-detail-component v-model="is_show_lead_detail" :lead="lead" />
  </v-container>
</template>

<script>
/**
 * import
 */
import { mapGetters } from "vuex";
import LeadDetailComponent from "@/components/molecules/leads/LeadDetailComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    LeadDetailComponent,
  },

  /**
   * data
   */
  data() {
    return {
      lead: {},
      is_show_lead_detail: false,
    };
  },

  /**
   * methods
   */
  methods: {
    // Open dialog lead detail
    show_lead_detail(lead) {
      this.lead = lead;
      this.is_show_lead_detail = true;
    },
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", ["get_users_data"]),
    ...mapGetters("leads", ["get_leads_data"]),

    users_data() {
      return this.get_users_data;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: calc(100vw - 20% - 12px - 12px);
}
.row {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.max-with-button {
  max-width: 130px;
}
</style>
