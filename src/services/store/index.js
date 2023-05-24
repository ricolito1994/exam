import Vuex from 'vuex';
const USER_KEY = 'user';
const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    authUser({ commit }, user) {
      // Perform login logic here
      // You can make an API call, authenticate the user, etc.
      // Once the login is successful, commit the mutations to set isAuthenticated to true and store the user details
      //const { username, password } = credentials;
      // Simulating a login process
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      commit('setAuthentication', true);
      commit('setUser', user);
    },
    logoutUser({ commit }) {
      // Perform logout logic here
      // Once the logout is successful, commit the mutations to set isAuthenticated to false and clear the user details
      localStorage.removeItem(USER_KEY);
      commit('setAuthentication', false);
      commit('setUser', null);
    },
    setUserFromStorage({ commit }) {
        const user = localStorage.getItem(USER_KEY);
        if (user) {
            commit('setAuthentication', true);
            commit('setUser', JSON.parse(user));
        }
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    getUser: state => state.user
  }
});

export default store;
