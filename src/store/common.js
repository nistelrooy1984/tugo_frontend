import Vue from 'vue';
import router from './../router';
import CryptoJS from 'crypto-js';

const STORAGE_KEY = 'id_token';
const KEY = 'mcjiypw7yixami3e4z5875uu5h7r83ze';
const IV = 's6ftmky7hetb2pyw';


export const common = {
  namespaced: true,

  state: () => ({
    api: 'common/v1/',

    current_user: null,

    users_data: [],

    roles_data: [],

    departments_data: [],

    masters_data: {
      master_countries: [],
      master_provinces: [],
      master_districts: [],
      master_wards: [],
    },
  }),

  mutations: {
    set_login(state, user) {
      Vue.http.defaults.headers.common[
        'authorization'
      ] = `Bearer ${user.auth_token}`;

      state.current_user = user;

      try {
        localStorage.setItem(
          STORAGE_KEY,
          CryptoJS.AES.encrypt(
            JSON.stringify(user),
            CryptoJS.enc.Utf8.parse(KEY),
            {
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7,
              iv: CryptoJS.enc.Utf8.parse(IV),
            },
          ).toString(),
        );
      } catch(e) {
        Vue.$log.error(e);
      }
    },
    set_logout(state) {
      Vue.http.defaults.headers.common[
        'authorization'
      ] = null;

      state.current_user = null;

      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch(e) {
        Vue.$log.error(e);
      }
    },
    set_users_data(state, users) {
      state.users_data = users;
    },
    set_roles_data(state, roles) {
      state.roles_data = roles;
    },
    set_departments_data(state, departments) {
      state.departments_data = departments;
    },
  },

  getters: {
    get_current_user (state) {
      return state.current_user
    },

    get_users_data (state) {
      return state.users_data
    },

    get_roles_data (state) {
      return state.roles_data
    },

    get_departments_data (state) {
      return state.departments_data
    },
  },

  actions: {
    async get_login( {commit, state}, params ) {
      Vue.$log.debug('get_login');

      return Vue.http
        .get(state.api + 'users/login', { params })
        .then(
          (response) => {
            commit('set_login', response.user);

            Vue.toasted.global.success({
              message: 'Login successfully!',
            });
          },
          (error) => {
            return Promise.reject(error);
          }
        )
    },

    async get_logout( { commit } ) {
      Vue.$log.debug('get_logout');

      commit('set_logout');

      router.push('/', () => {});
    },

    async post_user( { state }, params ) {
      Vue.$log.debug('post_user');

      return Vue.http
        .post(state.api + 'users', params)
        .then(
          (response) => {
            Vue.$log.debug(response);

            Vue.toasted.global.success({
              message: 'Create user successfully!',
            });
          },
          (error) => {
            return Promise.reject(error);
          }
        )
    },

    async get_users( { commit, state } ) {
      Vue.$log.debug('get_users');

      return Vue.http
        .get(state.api + 'users')
        .then(
          (response) => {
            Vue.$log.debug('users', response.users);
            commit('set_users_data', response.users);
          },
          (error) => {
            Vue.$log.debug(error);
          }
        )
    },

    async get_roles( { commit, state } ) {
      Vue.$log.debug('get_roles');

      return Vue.http
        .get(state.api + 'roles')
        .then(
          (response) => {
            Vue.$log.debug('roles', response.roles);
            commit('set_roles_data', response.roles);
          },
          (error) => {
            Vue.$log.debug(error);
          }
        )
    },

    async get_departments( { commit, state } ) {
      Vue.$log.debug('get_departments');

      return Vue.http
        .get(state.api + 'departments')
        .then(
          (response) => {
            Vue.$log.debug('departments', response.departments);
            commit('set_departments_data', response.departments);
          },
          (error) => {
            Vue.$log.debug(error);
          }
        )
    },
  },
}
