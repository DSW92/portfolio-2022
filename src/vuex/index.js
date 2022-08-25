import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            homeHeroAnimationLoaded: false,
            heroWasAnimated: false,

            labelsWereAnimated: false,

            finalBannernStatus: false,
        }
    },
    getters: {
        homeHeroAnimationLoaded(state) {
            return state.homeHeroAnimationLoaded;
        },
        labelsWereAnimated(state) {
            return state.labelsWereAnimated;
        },
        finalBannerStatus(state) {
            return state.finalBannernStatus;
        },
    },
    mutations: {
        changeHeroAnimationLoadedStatus(state) {
            if (!state.heroWasAnimated) {
                state.homeHeroAnimationLoaded = true;
                setTimeout(() => {
                    state.homeHeroAnimationLoaded = false;
                }, 5500);
                setTimeout(() => {
                    state.finalBannernStatus = true;
                }, 7000);
            }
            state.heroWasAnimated = true;
        },

        changeLabelsAnimationStatus(state) {
            state.labelsWereAnimated = true;
        },
    },
    actions: {
        changeHeroAnimationLoadedStatus(context) {
            context.commit('changeHeroAnimationLoadedStatus');
        },

        changeLabelsAnimationStatus(context) {
            context.commit('changeLabelsAnimationStatus');
        },
    }
});

export default store;