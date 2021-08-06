export const contacts = {
  namespaced: true,

  state: () => ({
    contacts_data: [{id: 2, name: 'contact'}],

    contact_data: null,
  }),

  mutations: {
    
  },

  getters: {
    get_contacts_data (state) {
      return state.contacts_data
    },

    get_contact_data (state) {
      return state.contact_data
    }
  },

  actions: {
    
  },
}
