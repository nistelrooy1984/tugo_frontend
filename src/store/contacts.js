import Vue from "vue";

export const contacts = {
  namespaced: true,

  state: () => ({
    api: "contacts/v1/",

    contacts_data: [],

    contact_data: null
  }),

  mutations: {
    set_contacts_data(state, contacts) {
      state.contacts_data = contacts;
    }
  },

  getters: {
    get_contacts_data(state) {
      return state.contacts_data;
    },

    get_contact_data(state) {
      return state.contact_data;
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
    }
  }
};
