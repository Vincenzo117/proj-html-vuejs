const state = {
    headerQuotes: [
        {
            id: 1,
            title: 'Damon Vaughn',
            text: 'Best-selling author and the most influencial public intellectual in the western world right now.',
            author: 'The New York Times',
            active: true
        },
        {
            id: 2,
            title: 'Quote 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod iste, aliquam cumque inventore sequi!',
            author: 'E che ne so',
            active: false
        },
        {
            id: 3,
            title: 'Quote 3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod iste, aliquam cumque inventore sequi!',
            author: 'E che ne so',
            active: false
        },
    ],
}

const getters = {
    headerQuotes: (state) => state.headerQuotes
}

const actions = {
    nextQuote({ commit }) {
        let oldID = 0;
        let newID = 0;
        state.headerQuotes.forEach((el) => (el.active ? oldID = el.id : ''));
        const totalQuotes = state.headerQuotes.length;
        if (oldID < totalQuotes) {
            newID = oldID + 1;
        } else {
            newID = 1;
        }
        commit('updateOldQuote', oldID);
        commit('updateNewQuote', newID);
    },
    prevQuote({ commit }) {
        let oldID, newID;
        state.headerQuotes.forEach((el) => (el.active ? oldID = el.id : ''));
        const totalQuotes = state.headerQuotes.length;
        if (oldID > 1) {
            newID = oldID - 1;
        } else {
            newID = totalQuotes;
        }
        commit('updateOldQuote', oldID);
        commit('updateNewQuote', newID);
    }
}

const mutations = {
    updateOldQuote: (state, oldID) => (state.headerQuotes[oldID - 1].active = false),
    updateNewQuote: (state, newID) => (state.headerQuotes[newID - 1].active = true)
}

export default {
    state,
    getters,
    actions,
    mutations
}