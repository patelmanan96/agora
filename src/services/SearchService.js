import EventCard from "../models/EventCard";

class SearchService {
    static instance = null;
    #eventCards = [new EventCard('https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'Airplane', 'Avionics'
        , 'Flying Plane', 'Detailed Desc.', []),
        new EventCard('https://homepages.cae.wisc.edu/~ece533/images/baboon.png', 'Baboon', 'Animal', 'Wild Animal'
            , 'Detailed Desc.', ['dangerous']),
        new EventCard('https://homepages.cae.wisc.edu/~ece533/images/goldhill.png', 'City', 'Place', 'Quiet City'
            , 'Detailed Desc.', []),
        new EventCard('https://homepages.cae.wisc.edu/~ece533/images/pool.png', 'Pool', 'Game', 'Game of Pool'
            , 'Detailed Desc.', [])];

    #hostingCards = [];

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
            card.tag.toLowerCase().includes(query) ||
            card.summary.toLowerCase().includes(query) ||
            (card.othertags.filter(tag => tag.includes(query)).length > 0))
    };

    getRecommendedCards = () => this.#eventCards;

    addNewCard = (card) => {
        let newCard = new EventCard(card.image, card.title, card.tag, card.summary, card.description, card.othertags);
        this.#eventCards = [...newCard]
    };
}

export default SearchService;