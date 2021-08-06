export const campaigns = {
  namespaced: true,

  state: () => ({
    campaigns_data: [],

    campaign_data: null,
  }),

  mutations: {
    
  },

  getters: {
    get_campaigns_data (state) {
    return state.campaigns_data
    },

    get_campaign_data (state) {
    return state.campaign_data
    }
  },

  actions: {
    
  },
}
