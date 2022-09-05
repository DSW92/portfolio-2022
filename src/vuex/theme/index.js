export default {
    state() {
        return {
            darkMode: null,
        }
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
    plugins: [
        
    ]
}