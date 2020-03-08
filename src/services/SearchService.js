class SearchService {
    static instance = null;
    cards = [{
        'img': 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        'title': 'Airplane',
        'tag': 'Avionics',
        'description': 'Flying Plane'
    }, {
        'img': 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
        'title': 'Baboon',
        'tag': 'Animal',
        'description': 'Wild Animal'
    }, {
        'img': 'https://homepages.cae.wisc.edu/~ece533/images/goldhill.png',
        'title': 'City',
        'tag': 'Place',
        'description': 'Quiet City'
    }, {
        'img': 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
        'title': 'Pool',
        'tag': 'Game',
        'description': 'Game of Pool'
    }
    ];

    static getInstance() {
        return this.instance == null ? new SearchService() : this.instance;
    }

    getCards = (query) => {
        // var result = [];
        // this.cards.filter((card) => (card.title.includes(query) || card.tag.includes(query)
        //     || card.description.includes(query))).forEach((card) => {result = [...card]});
        // return result;
        return this.cards;
    }
}

export default SearchService;