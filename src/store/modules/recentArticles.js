const state = {
    recentArticles: [
        {
            id: 1,
            title: '20 Creativity Tips',
            author: 'admin',
            date: 'October 24th, 2019',
            categories: ["Event,", "Tips & Tricks"],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloremque voluptatem excepturi necessitatibus repudiandae natus doloribus quaerat numquam, autem magni nam! Doloribus, voluptas aspernatur.',
            thumb: require('../../assets/img/20-Tips-scaled.jpg'),
            commentsNumber: 0
        },
        {
            id: 2,
            title: 'What\'s On Your Booklist?',
            author: 'admin',
            date: 'October 24th, 2019',
            categories: ["Event", "Tips & Tricks"],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloremque voluptatem excepturi necessitatibus repudiandae natus doloribus quaerat numquam, autem magni nam! Doloribus, voluptas aspernatur.',
            thumb: require('../../assets/img/thumb-13-2x-700x441.jpg'),
            commentsNumber: 0
        },
        {
            id: 3,
            title: '20 Creativity Tips',
            author: 'admin',
            date: 'October 24th, 2019',
            categories: ["Event", "Tips & Tricks"],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloremque voluptatem excepturi necessitatibus repudiandae natus doloribus quaerat numquam, autem magni nam! Doloribus, voluptas aspernatur.',
            thumb: require('../../assets/img/thumb-08-2x-700x441.jpg'),
            commentsNumber: 0
        },
    ]
}

const getters = {
    recentArticles: (state) => (state.recentArticles)
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}