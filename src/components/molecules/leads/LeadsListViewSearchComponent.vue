<template>
  <v-container>
    <v-row>
      <v-col class="max-with-button">
        <span>
          <v-btn color="primary" @click="search">
            <v-icon>mdi-magnify</v-icon>Search
          </v-btn>
        </span>
      </v-col>
      <v-col>
        <v-text-field
          dense
          outlined
          hide-details
          placeholder="Search for first name"
          v-model="search_request_params.first_name"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          dense
          outlined
          hide-details
          placeholder="Search for last name"
          v-model="search_request_params.last_name"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          dense
          outlined
          hide-details
          placeholder="Search for phone"
          v-model="search_request_params.phone"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          dense
          outlined
          hide-details
          placeholder="Search for email"
          v-model="search_request_params.email"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          dense
          outlined
          placeholder="Search for assigned to"
          :error-messages="v_error_ff('owner_id')"
          v-model="search_request_params.owner_id"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/**
 * import
 */
import { mapActions } from "vuex";

/**
 * Vue
 */
export default {
  /**
   * data
   */
  data() {
    return {
      search_request_params: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        owner_id: "",
      },
    };
  },

  /**
   * methods
   */
  methods: {
    ...mapActions("leads", ["search_leads"]),

    async search() {
      try {
        await this.search_leads(this.search_request_params);
      } catch (error) {
        this.$log.debug(error);
      }
    },
  },
};
</script>

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
