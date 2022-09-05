import {createStore} from 'vuex';
import animations from './animations/index';
import theme from './theme/index';

const store = createStore({
    modules: {
        animations,
        theme
    }
});

export default store;