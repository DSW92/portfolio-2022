export default {
    state: {
        // managed by vuex-persistedstate
        darkMode: false,
    },
    getters: {
        darkMode(state) {
            return state.darkMode;
        }
    },
    mutations: {
        changeMode(state, payload) {
            state.darkMode = payload;
        }
    },
    actions: {
        changeMode(context, payload) {
            context.commit('changeMode', payload);
        }
    },
}