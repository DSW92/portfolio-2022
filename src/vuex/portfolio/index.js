export default {
    state: {
        projects: [
            {
                id: '1',
                title: 'Glowly',
                category: 'ecommerce',
                url: 'https://glowly.pl',
                thumbnail: require('@/assets/portfolio/glowly.png'),
                tags: ['wordpress', 'woocommerce'],
                notes: {
                    show: true,
                    privacy: false,
                    company: true,
                }
            },
            {
                id: '2',
                title: 'Lipski',
                category: 'wordpress',
                url: 'https://www.lipski-pulawy.pl/',
                thumbnail: require('@/assets/portfolio/lipski.png'),
                tags: ['wordpress'],
                notes: {
                    show: true,
                    privacy: false,
                    company: true,
                }
            },
            {
                id: '3',
                title: 'Alkolabs',
                category: 'ecommerce',
                url: 'https://alkolabs.pl/',
                thumbnail: require('@/assets/portfolio/alkolabs.png'),
                tags: ['wordpress', 'woocommerce'],
                notes: {
                    show: true,
                    privacy: false,
                    company: true,
                }
            },
            {
                id: '4',
                title: 'Beyond Office',
                category: 'wordpress',
                url: 'https://www.beyondoffice.pl/',
                thumbnail: require('@/assets/portfolio/beyondoffice2.png'),
                tags: ['wordpress'],
                notes: {
                    show: true,
                    privacy: false,
                    company: true,
                }
            },
            {
                id: '5',
                title: '1connect',
                category: 'miscellaneous',
                url: 'https://dsw92.github.io/1connect-zadanie/',
                thumbnail: require('@/assets/portfolio/1connect.png'),
                tags: ['html', 'css', 'jquery'],
                notes: {
                    show: false,
                    privacy: false,
                    company: false,
                }
            },
            {
                id: '6',
                title: 'Sit On Chair',
                category: 'miscellaneous',
                url: 'https://dsw92.github.io/Sit-On-Chair---Website-layout/',
                thumbnail: require('@/assets/portfolio/sitonchair.png'),
                tags: ['html', 'css', 'jquery'],
                notes: {
                    show: false,
                    privacy: false,
                    company: false,
                }
            },
            {
                id: '7',
                title: 'Gwiezdna 5',
                category: 'wordpress',
                url: 'https://gwiezdna5.pl/',
                thumbnail: require('@/assets/portfolio/gwiezdna5.png'),
                tags: ['wordpress'],
                notes: {
                    show: true,
                    privacy: false,
                    company: true,
                }
            },
        ]
    },
    getters: {
        projects(state) {
            return state.projects;
        }
    }
}