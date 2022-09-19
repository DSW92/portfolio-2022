export default {
    state: {
        menuOpen: false,
    },
    getters: {
        menuOpen(state) {
            return state.menuOpen;
        }
    },
    mutations: {
        toggleMenu(state) {
            state.menuOpen = !state.menuOpen;
        }
    },
    actions: {
        toggleMenu(context) {
            context.commit('toggleMenu');
        }
    }
}