import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            homeHeroAnimationLoaded: false
        }
    },
    getters: {
        homeHeroAnimationLoaded(state) {
            return state.homeHeroAnimationLoaded;
        }
    },
    mutations: {
        changeHeroAnimationLoadedStatus(state) {
            state.homeHeroAnimationLoaded = true;
        }
    },
    actions: {
        changeHeroAnimationLoadedStatus(context) {
            context.commit('changeHeroAnimationLoadedStatus');
        }
    }
});

export default store;