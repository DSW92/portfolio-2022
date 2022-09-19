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
        openMenu(state) {
            state.menuOpen = !state.menuOpen;
        }
    },
    actions: {
        openMenu(context) {
            context.commit('openMenu');
        }
    }
}