const state = {
    logoSrc: require("../../assets/img/author-logo-round.png"),
    navbarItems: [
        {
            id: 1,
            name: 'Home',
            href: '#',
            active: true
        },
        {
            id: 2,
            name: 'About Me',
            href: '#',
            active: false
        },
        {
            id: 3,
            name: 'Testimonials',
            href: '#',
            active: false
        },
        {
            id: 4,
            name: 'My Blog',
            href: '#',
            active: false
        },
        {
            id: 5,
            name: 'Meetups',
            href: '#',
            active: false
        },
        {
            id: 6,
            name: 'Shop',
            href: '#',
            active: false
        },
        {
            id: 7,
            name: 'Contact Me',
            href: '#',
            active: false
        },
        {
            id: 8,
            name: '',
            href: '#',
            active: false,
            icon: 'fa-solid fa-cart-shopping'
        }
    ]
};

const getters = {
    logoSrc: (state) => state.logoSrc,
    navbarItems: (state) => state.navbarItems
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}