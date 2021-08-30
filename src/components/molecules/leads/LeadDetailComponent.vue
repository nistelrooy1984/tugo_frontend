<template>
  <v-dialog
    transition="dialog-bottom-transition"
    fullscreen
    v-model="value"
    :persistent="true"
  >
    <v-card color="grey lighten-4" flat tile>
      <!-- Part 1 -->
      <v-toolbar height="40px" outlined elevation="0">
        <v-toolbar-title>LEADS > All {{ "> " + lead_data.last_name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="darken-2--text mr-1 text-capitalize" outlined height="30px"
          ><v-icon left small>mdi-plus</v-icon>Add Lead</v-btn
        >
        <v-btn class="darken-2--text mr-1 text-capitalize" outlined height="30px"
          ><v-icon left small>mdi-download</v-icon>Import</v-btn
        >
        <v-btn class="darken-2--text mr-1 text-capitalize" outlined height="30px"
          ><v-icon class="mdi-flip-h" left small>mdi-wrench</v-icon>Customize ▼</v-btn
        >
      </v-toolbar>

      <!-- Part 2 -->
      <v-toolbar class="mx-3 my-3" height="140px" elevation="1">
        <v-row class="pt-0">
          <v-col cols="6">
            <v-row>
              <v-avatar tile class="d-block ml-3 mb-3" size="85">
                <img
                  src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/cp0/236330358_845910149372794_115983328939663339_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DjYbDXdgHvUAX-SOUPs&_nc_ht=scontent.fhan4-1.fna&oh=f8902819d5b14548c10439d8f0c97ae6&oe=6145E7DF"
                />
              </v-avatar>
              <v-card class="d-block pa-2 bg-lightgrey font-weight-medium" elevation="0"
                ><span style="font-size: 20px">{{ lead_data.last_name }}</span>
                <span class="d-block" style="font-size: 14px"
                  ><v-icon small>mdi-map-marker</v-icon> Show Map</span
                ></v-card
              >
            </v-row>
            <v-btn
              class="grey white--text text-capitalize rounded-pill pl-2 mt-2 ml-1"
              :class="{ addTag: true }"
              height="18px"
              width="70px"
              ><v-icon small>mdi-plus</v-icon> Add Tag</v-btn
            >
          </v-col>

          <v-col cols="6" align="end">
            <v-btn
              class="black--text text-capitalize font-weight-light mr-1 pa-4"
              color="#f2f2f2"
              height="20px"
              elevation="0"
              >Follow</v-btn
            >
            <v-btn
              class="black--text text-capitalize font-weight-light mr-1 pa-4"
              color="#f2f2f2"
              height="20px"
              elevation="0"
              >Edit</v-btn
            >
            <v-btn
              class="black--text text-capitalize font-weight-light mr-1 pa-4"
              color="#f2f2f2"
              height="20px"
              elevation="0"
              >Send Email</v-btn
            >
            <v-btn
              class="black--text text-capitalize font-weight-light mr-1 pa-4"
              color="#f2f2f2"
              height="20px"
              elevation="0"
              >Convert Lead</v-btn
            >
            <v-btn
              class="E0 black--text text-capitalize font-weight-light mr-1 pa-4"
              color="#f2f2f2"
              height="20px"
              elevation="0"
              >More<v-icon class="mdi-24px" right>mdi-menu-down</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-toolbar>

      <!-- Part 3 -->
      <v-tabs class="ma-3" align-with-title centered v-model="tab">
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab class="black--text text-capitalize">Summary</v-tab>
        <v-tab class="black--text text-capitalize">Details</v-tab>
        <v-tab class="black--text text-capitalize">Updates</v-tab>
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-calendar</v-icon></v-tab
        >
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-email-outline</v-icon></v-tab
        >
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-file-document</v-icon></v-tab
        >
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-dropbox</v-icon></v-tab
        >
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-bullhorn</v-icon></v-tab
        >
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-deskphone</v-icon></v-tab
        >
        <v-tab class="black--text text-capitalize"
          ><v-icon class="mdi-dark">mdi-message</v-icon></v-tab
        >
      </v-tabs>

      <!-- Part 4 -->
      <v-tabs-items class="mx-3" v-model="tab">
        <!-- Tab Summary -->
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col class="px-0 py-0" cols="5">
                <v-card class="px-2 py-2" outlined>
                  <v-row>
                    <v-card-title>Key Fields</v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >First Name</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >-</v-card
                      >
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >Last Name</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0">{{
                        lead_data.last_name
                      }}</v-card>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >Company</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >-</v-card
                      >
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >Lead Source</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >-</v-card
                      >
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >Website</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >-</v-card
                      >
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >Assigned To</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0">{{
                        full_name_by_id(users_data, lead_data.owner_id)
                      }}</v-card>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >City</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0">{{
                        lead_data.province
                      }}</v-card>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                        >Country</v-card
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0">{{
                        lead_data.country
                      }}</v-card>
                    </v-col>
                  </v-row>
                </v-card>

                <v-card class="px-2 py-2 mt-3" outlined>
                  <v-row>
                    <v-card-title>Documents</v-card-title>
                  </v-row>
                </v-card>
              </v-col>

              <v-col class="px-0 py-0 ml-3" cols="auto">
                <v-card class="px-2 py-2" outlined width="750">
                  <v-row>
                    <v-card-title>Activities</v-card-title>
                  </v-row>
                </v-card>
                <v-card class="px-2 py-2 mt-3" outlined width="750">
                  <v-row>
                    <v-card-title>Comments</v-card-title>
                  </v-row>
                </v-card>
                <v-card class="px-2 py-2 mt-3" outlined width="750">
                  <v-row>
                    <v-card-title>Recent Comments</v-card-title>
                  </v-row>
                </v-card>
              </v-col>

              <v-col cols="auto"></v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- Tab Details -->
        <v-tab-item>
          <!-- Lead Details -->
          <v-expansion-panels class="mb-3" hover focusable popout>
            <v-expansion-panel>
              <v-expansion-panel-header>Lead Details</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >First Name</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">{{
                      lead_data.first_name || "-"
                    }}</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Lead Number</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Last Name</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">{{
                      lead_data.last_name || "-"
                    }}</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Primary Phone</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Company</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0"> - </v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Mobile Phone</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Designation</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Fax</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Lead Source</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Primary Email</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Industry</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Website</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Annual Revenue</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Lead Status</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Number of Employees</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Rating</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Secondary Email</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Assigned To</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">{{
                      full_name_by_id(users_data, lead_data.owner_id)
                    }}</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Modified Time</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Created Time</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Email Opt Out</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Source</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Address Details -->
          <v-expansion-panels class="mb-3" hover focusable popout>
            <v-expansion-panel>
              <v-expansion-panel-header>Address Details</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Street</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >PO Box</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Postal Code</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >City</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">{{
                      lead_data.province
                    }}</v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Country</v-card
                    >
                  </v-col>
                  <v-col cols="5">
                    <v-card class="pa-2 font-weight-light" elevation="0">{{
                      lead_data.country
                    }}</v-card>
                  </v-col>
                  <v-col cols="3">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >State</v-card
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Description Details -->
          <v-expansion-panels class="mb-3" hover focusable popout>
            <v-expansion-panel>
              <v-expansion-panel-header>Description Details</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-card class="pa-2 bg-lightgrey font-weight-light" elevation="0"
                      >Description</v-card
                    >
                  </v-col>
                  <v-col cols="10">
                    <v-card class="pa-2 font-weight-light" elevation="0">-</v-card>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs-items>

      <v-card-actions class="justify-end">
        <v-btn text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  /**
   * data
   */
  data() {
    return {
      tab: null,
    };
  },

  /**
   * props
   */
  props: ["lead_data", "value", "users_data"],

  /**
   * computed
   */
  methods: {
    // Close Dialog
    close() {
      this.dialog = false;
    },
  },

  /**
   * computed
   */
  computed: {
    dialog: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style scoped>
.selected {
  border-bottom: 3px solid black;
  text-transform: capitalize;
}

.v-dialog {
  position: absolute;
}

.addTag {
  font-size: 10px;
}
</style>
