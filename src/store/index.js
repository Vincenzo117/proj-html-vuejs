import Vue from 'vue';
import Vuex from 'vuex';

import headeNavbar from './modules/headerNavbar.js';
import headerQuotes from './modules/headerQuotes.js';
import latestRelease from './modules/latestRelease.js';
import headerSale from './modules/headerSale.js';
import platforms from './modules/platforms.js';
import criticTestimonials from './modules/criticTestimonials.js';
import recentArticles from './modules/recentArticles.js';
import upcomingEvents from './modules/upcomingEvents.js';
import findOutMore from './modules/findOutMore.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        headeNavbar,
        headerQuotes,
        latestRelease,
        headerSale,
        platforms,
        criticTestimonials,
        recentArticles,
        upcomingEvents,
        findOutMore
    }
})