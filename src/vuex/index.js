import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            homeHeroAnimationLoaded: false,
            heroWasAnimated: false,

            labelsWereAnimated: false,

            finalBannernStatus: false,

            // initialLanguage: "",
            selectedLanguage: "",
            browserLanguage: "",
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

        initialLanguage(state) {
            return state.initialLanguage;
        },
        selectedLanguage(state) {
            return state.selectedLanguage;
        },
        browserLanguage(state) {
            return state.browserLanguage;
        }
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

        checkBrowserLanguage(state) {
            state.browserLanguage = navigator.language;
        },
        displayInitialLanguage(state) {
            if (state.browserLanguage === 'pl') {
                state.selectedLanguage = 'pl';
            } else {
                state.selectedLanguage = 'en';
            }
        },
        changeSelectedLanguage(state, payload) {
            state.selectedLanguage = payload;
            localStorage.setItem("lang", payload);
        },
        addSelectedLangToLocalStorage(state) {
            localStorage.setItem("initial-lang", state.selectedLanguage);
        }
    },
    actions: {
        changeHeroAnimationLoadedStatus(context) {
            context.commit('changeHeroAnimationLoadedStatus');
        },

        changeLabelsAnimationStatus(context) {
            context.commit('changeLabelsAnimationStatus');
        },

        checkBrowserLanguage(context) {
            context.commit('checkBrowserLanguage');
        },
        displayInitialLanguage(context) {
            context.commit('displayInitialLanguage');
        },
        changeSelectedLanguage(context, payload) {
            context.commit('changeSelectedLanguage', payload);
        },
        addSelectedLangToLocalStorage(context) {
            context.commit('addSelectedLangToLocalStorage'); 
        }
        
    }
});

export default store;