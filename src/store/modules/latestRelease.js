const state = {
    latestRelease: {
        thumb: require("../../assets/img/book-widget.png"),
        title: 'Latest Book Release',
        author: 'D. Vaughn autobiography',
        description: 'Vestibulum tridtique turpis in ipsum egestas lobortis. Duis maximus bibendum volutpat. Lorem ipsum dolor sit amet.',
        amazon: '#',
        appStore: '#'
    }
}

const getters = {
    latestRelease: (state) => (state.latestRelease)
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}