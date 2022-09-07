export default {
    state: {
        projects: [
            {
                id: '1',
                title: 'Genpower',
                category: 'wordpress',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/genpower.png'),
                tags: ['wordpress']
            },
            {
                id: '2',
                title: 'Genpower',
                category: 'wordpress',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/genpower.png')
            },
            {
                id: '3',
                title: 'Alkolabs',
                category: 'ecommerce',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/alkolabs.png'),
                tags: ['wordpress', 'woocommerce'],
            },
            {
                id: '4',
                title: 'Alkolabs',
                category: 'ecommerce',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/alkolabs.png'),
                tags: ['wordpress', 'woocommerce'],
            },
            {
                id: '5',
                title: 'Alkolabs',
                category: 'wordpress',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/alkolabs.png'),
                tags: ['wordpress', 'woocommerce'],
            },
            {
                id: '6',
                title: 'Alkolabs',
                category: 'wordpress',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/alkolabs.png'),
                tags: ['wordpress', 'woocommerce'],
            },
            {
                id: '1',
                title: 'Genpower',
                category: 'miscellaneous',
                url: 'https://google.pl',
                thumbnail: require('@/assets/portfolio/genpower.png'),
                tags: ['wordpress']
            },
        ]
    },
    getters: {
        projects(state) {
            return state.projects;
        }
    }
}