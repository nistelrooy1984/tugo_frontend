export const organizations = {
  namespaced: true,

  state: () => ({
    organizations_data: [],

    organization_data: null,
  }),

  mutations: {
    
  },

  getters: {
    get_organizations_data (state) {
      return state.organizations_data
    },

    get_organization_data (state) {
      return state.organization_data
    }
  },

  actions: {
    
  },
}
