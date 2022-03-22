const state = {
    platforms: [
        {
            id: 1,
            name: 'ebay',
            tanLogo: require('../../assets/img/ebay-logotan-2x.png'),
            audiobook: false
        },
        {
            id: 2,
            name: 'Audible',
            tanLogo: require('../../assets/img/audible-logotan-2x.png'),
            logo: require('../../assets/img/audible-logo.png'),
            audiobook: true
        },
        {
            id: 3,
            name: 'Barnes&Noble',
            tanLogo: require('../../assets/img/bb-logotan-2x.png'),
            logo: require('../../assets/img/bn-logo-tall.png'),
            audiobook: true
        },
        {
            id: 4,
            name: 'Kindle Fire',
            tanLogo: require('../../assets/img/kindlefire-logotan-2x.png'),
            logo: require('../../assets/img/kindle-logo-tall.png'),
            audiobook: true
        },
    ]
}

const getters = {
    platforms: (state) => (state.platforms),
    audiobookPlatforms : (state) => (state.platforms.filter(el => el.audiobook))
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}