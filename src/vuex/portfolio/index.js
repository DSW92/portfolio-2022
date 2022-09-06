export default {
    state: {
        projects: [
            {
                id: '1',
                title: 'Genpower',
                category: 'wordpress',
                url: 'https://google.pl',
                thumbnail: '../../assets/portfolio/genpower.png'
            },
            {
                id: '2',
                title: 'Genpower',
                category: 'wordpress',
                url: 'https://google.pl',
                thumbnail: '../../assets/portfolio/genpower.png'
            },
            {
                id: '3',
                title: 'Alkolabs',
                category: 'ecommerce',
                url: 'https://google.pl',
                thumbnail: '../../assets/portfolio/alkolabs.png'
            },
            {
                id: '4',
                title: 'Alkolabs',
                category: 'ecommerce',
                url: 'https://google.pl',
                thumbnail: '../../assets/portfolio/alkolabs.png'
            }
        ]
    },
    getters: {
        projects(state) {
            return state.projects;
        }
    }
}