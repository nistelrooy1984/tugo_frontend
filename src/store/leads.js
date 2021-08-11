import axios from "axios";

export const leads = {
  namespaced: true,

  state: () => ({
    api: "http://localhost:3000/leads/v1/",

    leads_data: [],

    lead_data: null
  }),

  mutations: {
    set_leads_data(state, response) {
      state.leads_data = response.leads;
    }
  },

  getters: {
    get_leads_data(state) {
      return state.leads_data;
    },

    get_lead_data(state) {
      return state.lead_data;
    }
  },

  actions: {
    async get_leads({ commit, state }) {
      return axios.get(state.api + "leads").then(
        response => {
          commit("set_leads_data", response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
