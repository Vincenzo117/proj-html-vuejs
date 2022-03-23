const state = {
    criticTestimonials: [
        {
            id: 1,
            title: 'Best Author Of His Generation',
            subtitle: 'This book will change your perspective on life',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione repellendus non nisi cum nemo sit officia eveniet commodi tempore molestias, perferendis corporis dicta fugiat vitae, accusantium ducimus incidunt. Ipsam, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, earum. Saepe doloribus dicta nisi aperiam excepturi? Illo ut labore fugit, dolor voluptatem deserunt veniam velit maxime temporibus sequi laboriosam aperiam repellendus quod eveniet, quasi quas voluptas sunt repellat!',
            companyLogo: require('../../assets/img/nytimes-logo-white-xsmall.png'),
            author: 'Justine Kilpatric',
            company: 'The New York Times'
        },
        {
            id: 2,
            title: 'A True Masterpiece, Bravo!',
            subtitle: '',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maiores culpa consequatur magnam sed inventore temporibus fuga autem distinctio dolore ex reiciendis, soluta cum, esse alias labore molestiae officiis recusandae quam ratione.',
            companyLogo: require('../../assets/img/theguardian-xsmall.png'),
            author: 'Gerald Hendley',
            company: 'The Guardian'
        },
        {
            id: 3,
            title: 'A Unique View On The World',
            subtitle: '',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maiores culpa consequatur magnam sed inventore temporibus fuga autem distinctio dolore ex reiciendis, soluta cum, esse alias labore molestiae officiis recusandae quam ratione.',
            companyLogo: require('../../assets/img/globe-xsmall.png'),
            author: 'Mary Maxey',
            company: 'The Globe And Mail'
        },
    ]
}

const getters = {
    criticTestimonials: (state) => (state.criticTestimonials)
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}