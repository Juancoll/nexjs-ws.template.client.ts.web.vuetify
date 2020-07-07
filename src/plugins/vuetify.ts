import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#29b6f6',
                secondary: '#4bf9cd',
                accent: '#9c6ecc',
                error: colors.deepOrange.base,
                warning: colors.orange.base,
                info: colors.blue.base,
                success: colors.green.base,
            },
            dark: {
                primary: '#29b6f6',
                secondary: '#4bf9cd',
                accent: '#9c6ecc',
                error: colors.red.base,
                warning: colors.yellow.base,
                info: colors.blue.base,
                success: colors.green.base,
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
