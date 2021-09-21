import Vue from "vue";

export const leads = {
  namespaced: true,

  state: () => ({
    api: "leads/v1/",

    leads_data: [],

    lead_data: null,

    masters_data: {
      master_industries: [],
      master_lead_sources: [],
      master_ratings: [],
      master_statuses: [],
    },
  }),

  mutations: {
    set_leads_data(state, leads) {
      state.leads_data = leads;
    },

    set_masters_data(state, masters) {
      state.masters_data.master_industries = masters.master_industries;
      state.masters_data.master_lead_sources = masters.master_lead_sources;
      state.masters_data.master_ratings = masters.master_ratings;
      state.masters_data.master_statuses = masters.master_statuses;
    },
  },

  getters: {
    get_leads_data(state) {
      return state.leads_data;
    },

    get_lead_data(state) {
      return state.lead_data;
    },

    get_masters_data(state) {
      return state.masters_data;
    },
  },

  actions: {
    async get_leads({ commit, state }) {
      Vue.$log.debug("get_leads");

      return Vue.http.get(state.api + "leads").then(
        (response) => {
          Vue.$log.debug("leads", response.leads);
          commit("set_leads_data", response.leads);
        },
        (error) => {
          Vue.$log.debug(error);

          Vue.toasted.global.error({
            message: error.response.data.messages[0],
          });
        }
      );
    },

    async search_leads({ commit, state }, search_request_params) {
      Vue.$log.debug("search_leads");

      const url_request_params =
        `leads/search?` +
        `first_name=${search_request_params.first_name}&` +
        `last_name=${search_request_params.last_name}&` +
        `phone=${search_request_params.phone}&` +
        `email=${search_request_params.email}&` +
        `owner_id=${search_request_params.owner_id}`;

      return Vue.http.get(state.api + url_request_params).then(
        (response) => {
          Vue.$log.debug("leads", response.leads);
          commit("set_leads_data", response.leads);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    async get_masters({ commit, state }) {
      Vue.$log.debug("get_masters");

      return Vue.http.get(state.api + "masters").then(
        (response) => {
          Vue.$log.debug("masters", response);
          commit("set_masters_data", response);
        },
        (error) => {
          Vue.$log.debug(error);
        }
      );
    },
  },
};
