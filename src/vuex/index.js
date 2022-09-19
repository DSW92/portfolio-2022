import {createStore} from 'vuex';
import animations from './animations/index';
import theme from './theme/index'; 
import portfolio from './portfolio/index'; 
import mobile from './mobile/index'; 

import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    modules: {
        animations,
        theme,
        portfolio,
        mobile
    },
    plugins: [createPersistedState({
        paths: ['theme'],
    })],
});

export default store;