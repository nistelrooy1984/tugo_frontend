<template>
  <div class="l-column-100">
    <v-toolbar dense>
      <v-toolbar-title>Leads</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="pr-4">
        <v-btn> <v-icon>mdi-plus-thick</v-icon>Add Lead </v-btn>
      </span>
      <span class="pr-4">
        <v-btn> <v-icon>mdi-import</v-icon>Import </v-btn>
      </span>
      <span>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-icon>mdi-hammer-wrench</v-icon>Customize
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
/**
 * Vue
 */
export default {
  /**
   * data
   */
  data() {
    return {
      items: [
        { title: "Leads Fields & Layout" },
        { title: "Leads Workflows" },
        { title: "Picklists Values" },
        { title: "Leads Numbering" },
        { title: "Setup Webforms" },
        { title: "Lead Conversion Data Mapping" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.l-column-100 {
  background: #fbfbfb;
  padding: 6px 12px;
}
.v-toolbar {
  background: #fbfbfb;
}
</style>
