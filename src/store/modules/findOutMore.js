const state = {
    findOutMore: [
        {
            id: 1,
            title: 'About Me',
            description: 'Lorem ipsum dolor sit',
            thumb: require('../../assets/img/box-1.jpg'),
            href: '#',
        },
        {
            id: 2,
            title: 'My Latest Book',
            description: 'Lorem ipsum dolor sit',
            thumb: require('../../assets/img/box-4.jpg'),
            href: '#',
        },
        {
            id: 3,
            title: 'Book Signing',
            description: 'Lorem ipsum dolor sit',
            thumb: require('../../assets/img/box-3.jpg'),
            href: '#',
        },
    ]
}

const getters = {
    findOutMore: (state) => (state.findOutMore)
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}