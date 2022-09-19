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
        },
        disableMenu(state) {
            state.menuOpen = false;
        }
    },
    actions: {
        toggleMenu(context) {
            context.commit('toggleMenu');
        },
        disableMenu(context) {
            context.commit('disableMenu');
        }
    }
}