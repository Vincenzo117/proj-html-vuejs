const state = {
    upcomingEvents: [
        {
            id: 1,
            name: 'Chicago Book Signing',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minus architecto molestiae provident commodi consectetur nesciunt expedita voluptatum ex.',
            thumb: require('../../assets/img/event-05.jpg')
        },
        {
            id: 2,
            name: 'Meet And Greet With Amanda',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minus architecto molestiae provident commodi consectetur nesciunt expedita voluptatum ex.',
            thumb: require('../../assets/img/event-04.jpg')
        },
        {
            id: 3,
            name: 'Open Book: Dialogues',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minus architecto molestiae provident commodi consectetur nesciunt expedita voluptatum ex.',
            thumb: require('../../assets/img/event-07.jpg')
        },
    ]
}

const getters = {
    upcomingEvents: (state) => (state.upcomingEvents)
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}