<docs>
  # Contact Basic Information

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-container>
  <v-row class="field-block-header">
    <v-card-title>Basic Information</v-card-title>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>First Name</v-card-title>
    </v-col>
    <v-col style="display: flex;">
      v-select(
        dense,
        outlined,
        :value='salutation',
        :items="this.salutations",
        item-text='name',
        item-value='value',
        style="width: 30%",
        @change='$emit("update:salutation", $event)',
      ) 
      v-text-field(
        dense,
        outlined,
        :value='first_name',
        @change='$emit("update:first_name", $event)',
      )
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Last Name</v-card-title>
    </v-col>
    <v-col>
      v-text-field(
        dense,
        outlined,
        :value='last_name',
        @change='$emit("update:last_name", $event)',
        :error-messages='v_error("last_name")'
      )
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Email</v-card-title>
    </v-col>
    <v-col>
      v-text-field(
        dense,
        outlined,
        :value='email',
        @change='$emit("update:email", $event)',
      )
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Phone</v-card-title>
    </v-col>
    <v-col>
      v-text-field(
        dense,
        outlined,
        :value='phone',
        @change='$emit("update:phone", $event)',
      )
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Lead Source</v-card-title>
    </v-col>
    <v-col>
      v-select(
        dense,
        outlined,
        :items='master_lead_sources',
        :value='master_lead_source_id',
        item-text='name',
        item-value='id',
        @change='$emit("update:master_lead_source_id", $event)',
      )
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Title</v-card-title>
    </v-col>
    <v-col>
      v-text-field(
        dense,
        outlined,
        :value='title',
        @change='$emit("update:title", $event)',
      )
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Birthday</v-card-title>
    </v-col>
    <v-col>
      v-menu(
        v-model="is_show_date_picker_birthday"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      )
        <template v-slot:activator="{ on, attrs }">
          v-text-field(
            dense
            outlined
            readonly
            v-bind="attrs"
            v-on="on"
            prepend-inner-icon="mdi-calendar"
            :value='set_birthday'
          )
        </template>
        v-date-picker(
          v-model="set_birthday"
          @input="is_show_date_picker_birthday = false"
          @change='$emit("update:birthday", $event)'
        )
    </v-col>
    <v-col></v-col>
    <v-col>
      <v-card-title>Do Not Call</v-card-title>
    </v-col>
    <v-col>
      v-checkbox(
        dense,
        outlined,
        :value='is_do_not_call',
        @change='$emit("update:is_do_not_call", $event)',
      )
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card-title>Assigned to</v-card-title>
    </v-col>
    <v-col>
      v-select(
        dense,
        outlined,
        :items='this.get_users_data',
        :value='set_owner_id',
        item-text='last_name',
        item-value='id',
        @change='$emit("update:owner_id", $event)',
        :error-messages='v_error("owner_id")'
      )
    </v-col>
    <v-col></v-col>
    <v-col>
    </v-col>
    <v-col>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
/**
 * import
 */
import { mapGetters } from "vuex";

/**
 * Vue
 */
export default {
  /**
   * data
   */
  data: () => {
    return {
      salutations: [
        { value: null, name: "None" },
        { value: "Mr.", name: "Mr." },
        { value: "Ms.", name: "Ms." },
        { value: "Mrs.", name: "Mrs." },
        { value: "Dr.", name: "Dr." },
        { value: "Prof.", name: "Prof." }
      ],
      is_show_date_picker_birthday: false
    };
  },

  /**
   * props
   */
  props: {
    salutation: {
      type: String,
      required: false
    },
    first_name: {
      type: String,
      required: false
    },
    last_name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    master_lead_source_id: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    birthday: {
      type: String,
      required: false
    },
    is_do_not_call: {
      type: Boolean,
      required: false
    },
    owner_id: {
      type: Number,
      required: false
    }
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", ["get_users_data", "get_current_user"]),
    ...mapGetters("contacts", ["get_masters_data"]),

    set_birthday: {
      get: function() {
        return (
          this.$props.birthday ||
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        );
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    },

    set_owner_id: {
      get: function() {
        return this.$props.owner_id || this.get_current_user.id;
      }
    },

    master_lead_sources: {
      get: function() {
        const list = [];
        for (const lead_source of this.get_masters_data.master_lead_sources) {
          list.push(lead_source);
        }
        return list;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-menu__content--fixed {
  margin-top: -24px;
}
</style>
