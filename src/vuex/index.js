import {createStore} from 'vuex';
import animations from './animations/index';
import theme from './theme/index'; 

import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    modules: {
        animations,
        theme,
    },
    plugins: [createPersistedState({
        paths: ['theme'],
    })],
});

export default store;