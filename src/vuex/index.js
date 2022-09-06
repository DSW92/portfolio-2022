import {createStore} from 'vuex';
import animations from './animations/index';
import theme from './theme/index'; 
import portfolio from './portfolio/index'; 

import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    modules: {
        animations,
        theme,
        portfolio
    },
    plugins: [createPersistedState({
        paths: ['theme'],
    })],
});

export default store;