<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    v-model="value"
    :persistent="true"
  >
    <v-card>
      <v-toolbar color="primary" dark>Lead Detail</v-toolbar>
      <v-card-text>
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col cols="3">
              <v-card class="pa-2 bg-lightgrey" tile>First name</v-card>
            </v-col>
            <v-col cols="9">
              <v-card class="pa-2" tile>{{
                lead_data.first_name || "-"
              }}</v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3">
              <v-card class="pa-2 bg-lightgrey" tile>Last name</v-card>
            </v-col>
            <v-col cols="9">
              <v-card class="pa-2" tile>{{
                lead_data.last_name || "-"
              }}</v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3">
              <v-card class="pa-2 bg-lightgrey" tile>Email</v-card>
            </v-col>
            <v-col cols="9">
              <v-card class="pa-2" tile>{{ lead_data.email || "-" }}</v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3">
              <v-card class="pa-2 bg-lightgrey" tile>Phone</v-card>
            </v-col>
            <v-col cols="9">
              <v-card class="pa-2" tile>{{ lead_data.phone || "-" }}</v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3">
              <v-card class="pa-2 bg-lightgrey" tile>Assigned to</v-card>
            </v-col>
            <v-col cols="9">
              <v-card class="pa-2" tile>{{
                lead_data.assigned_to || "-"
              }}</v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3">
              <v-card class="pa-2 bg-lightgrey" tile>Country</v-card>
            </v-col>
            <v-col cols="9">
              <v-card class="pa-2" tile>{{ lead_data.country || "-" }}</v-card>
            </v-col>
            <v-row no-gutters>
              <v-col cols="3">
                <v-card class="pa-2 bg-lightgrey" tile>Province</v-card>
              </v-col>
              <v-col cols="9">
                <v-card class="pa-2" tile>{{
                  lead_data.province || "-"
                }}</v-card>
              </v-col>
              <v-row no-gutters>
                <v-col cols="3">
                  <v-card class="pa-2 bg-lightgrey" tile>District</v-card>
                </v-col>
                <v-col cols="9">
                  <v-card class="pa-2" tile>{{
                    lead_data.district || "-"
                  }}</v-card>
                </v-col>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey" tile>Ward</v-card>
                  </v-col>
                  <v-col cols="9">
                    <v-card class="pa-2" tile>{{
                      lead_data.ward || "-"
                    }}</v-card>
                  </v-col>
                </v-row>
              </v-row>
            </v-row>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  /**
   * props
   */
  props: ["lead_data", "value"],

  /**
   * computed
   */
  methods: {
    // Close Dialog
    close() {
      this.dialog = false;
    }
  },

  /**
   * computed
   */
  computed: {
    dialog: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style></style>
