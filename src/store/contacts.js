import Vue from "vue";

export const contacts = {
  namespaced: true,

  state: () => ({
    api: "contacts/v1/",

    contacts_data: [],

    contact_data: null,

    masters_data: null
  }),

  mutations: {
    set_contacts_data(state, contacts) {
      state.contacts_data = contacts;
    },
    set_master_lead_sources_data(state, master_lead_sources) {
      state.masters_data.master_lead_sources = master_lead_sources;
    },
    set_masters_data(state, masters) {
      state.masters_data = masters;
    }
  },

  getters: {
    get_contacts_data(state) {
      return state.contacts_data;
    },

    get_contact_data(state) {
      return state.contact_data;
    },

    get_masters_data(state) {
      return state.masters_data;
    }
  },

  actions: {
    async get_contacts({ commit, state }) {
      Vue.$log.debug("get_contacts");

      return Vue.http.get(state.api + "contacts").then(
        response => {
          Vue.$log.debug("contacts", response.contacts);
          commit("set_contacts_data", response.contacts);
        },
        error => {
          Vue.$log.debug(error);

          Vue.toasted.global.error({
            message: error.response.data.messages[0]
          });
        }
      );
    },

    async get_masters({ commit, state }) {
      Vue.$log.debug("get_masters");

      return Vue.http.get(state.api + "masters").then(
        response => {
          Vue.$log.debug("masters", response);
          commit("set_masters_data", response);
        },
        error => {
          Vue.$log.debug(error);
        }
      );
    },

    async post_contact({ state }, params) {
      Vue.$log.debug("post_contact");

      return Vue.http.post(state.api + "contacts", params).then(
        response => {
          Vue.$log.debug(response);

          Vue.toasted.global.success({
            message: "Create new contact successfully!"
          });
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  }
};
