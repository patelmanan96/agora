import EventCard from "../models/EventCard";

class SearchService {
    static instance = null;

    #eventCards = [new EventCard('https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'Airplane', ['Avionics','Flight']
        , 'Flying Plane', 'Detailed Desc.', new Date()),
        new EventCard('https://homepages.cae.wisc.edu/~ece533/images/baboon.png', 'Baboon', ['Animal'], 'Wild Animal'
            , 'Detailed Desc.', new Date()),
        new EventCard('https://homepages.cae.wisc.edu/~ece533/images/goldhill.png', 'City', ['Place'], 'Quiet City'
            , 'Detailed Desc.', new Date()),
        new EventCard('https://homepages.cae.wisc.edu/~ece533/images/pool.png', 'Pool', ['Game'], 'Game of Pool'
            , 'Detailed Desc.', new Date())];

    #hostingCards = [
        // new EventCard('https://i.picsum.photos/id/866/200/300.jpg', 'Random', 'Mountains', 'Large'
        // , 'Detailed Desc.', [], Date(), 'Nepal')
    ];

    static getInstance() {
        return this.instance == null ? new SearchService() : this.instance;
    }

    getCards = (query) => {
        if (query === "*") return this.#eventCards;
        query = query.toLowerCase();
        return this.#eventCards.filter((card) => this.#queryMatchCards(card, query));
    };

    #queryMatchCards = (card, query) => {
        return (card.title.toLowerCase().includes(query) ||
            (card.tags.find(tag => tag.toLowerCase().includes(query)) !== undefined) ||
            card.summary.toLowerCase().includes(query))
    };

    getHostingCards = () => this.#hostingCards;

    getRecommendedCards = () => this.#eventCards;

    addNewCard = (card) => {
        let newCard = new EventCard(card.image, card.title, card.tags, card.summary, card.description);
        this.#eventCards = [...newCard]
    };
}

export default SearchService;