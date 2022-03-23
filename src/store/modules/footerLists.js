const state = {
    logoSrc: require('../../assets/img/author-logo-round.png'),
    aboutMe: {
        title: 'About Me',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, eum, explicabo, molestias non alias officia incidunt cum eveniet enim id.'
    },
    usefulLinksList: {
        title: 'Useful Links',
        items: [
            {
                id: 1,
                name: 'Latest Books',
                href: '#'
            },
            {
                id: 2,
                name: 'Upcoming Events',
                href: '#'
            },
            {
                id: 3,
                name: 'Recent Articles',
                href: '#'
            },
            {
                id: 4,
                name: 'Business Enquiries',
                href: '#'
            },
            {
                id: 5,
                name: 'Visit My Foundation',
                href: '#'
            },
        ]
    },
    contactInfo: {
        title: 'Contact Info',
        address: '63 E. Studebaker Street Bolingbrook, IL 60440',
        phone: {
            landline:'(800) 000-0000',
            mobile:'(800) 000-0000'
        },
        email: 'info@your-company.com',
        social: [
            {
                id:1,
                name: 'facebook',
                icon: 'fa-brands fa-facebook-f',
                href: '#'
            },
            {
                id:2,
                name: 'twitter',
                icon: 'fa-brands fa-twitter',
                href: '#'
            },
            {
                id:3,
                name: 'instagram',
                icon: 'fa-brands fa-instagram',
                href: '#'
            },
            {
                id:4,
                name: 'linkedin',
                icon: 'fa-brands fa-linkedin-in',
                href: '#'
            },
            {
                id:5,
                name: 'youtube',
                icon: 'fa-brands fa-youtube',
                href: '#'
            },
        ]
    } 
}

const getters = {
    logoSrc: (state) => (state.logoSrc),
    aboutMe: (state) => (state.aboutMe),
    usefulLinksList: (state) => (state.usefulLinksList),
    contactInfo: (state) => (state.contactInfo)
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}