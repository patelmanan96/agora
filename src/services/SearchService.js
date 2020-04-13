import EventCard from "../models/EventCard";

class SearchService {
    static instance = null;


    #getDateObjectsFromYear = (year) => {
        let d = new Date();
        d.setFullYear(year);
        return d;
    };

    #dates = [this.#getDateObjectsFromYear(1990),
        this.#getDateObjectsFromYear(2000), this.#getDateObjectsFromYear(2020),
        this.#getDateObjectsFromYear(2010)];

    #eventCards = [new EventCard(1, "defaultUser",'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'Airplane',
        ['Avionics', 'Flight', 'Science'], 'Flying Plane', 'Detailed Desc.', this.#dates[0]),
        new EventCard(2, "defaultUser",'https://homepages.cae.wisc.edu/~ece533/images/goldhill.png', 'City', ['Place'], 'Quiet City'
            , 'Detailed Desc.', this.#dates[1]),
        new EventCard(3, "defaultUser",'https://homepages.cae.wisc.edu/~ece533/images/baboon.png', 'Baboon', ['Animal'], 'Wild Animal'
            , 'Detailed Desc.', this.#dates[2]),
        new EventCard(4, "defaultUser",'https://homepages.cae.wisc.edu/~ece533/images/pool.png', 'Pool', ['Game'], 'Game of Pool'
            , 'Detailed Desc.', this.#dates[3])];

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

    findCardById = (id) => this.#eventCards[0];

    getAllUpcomingCards = () => this.#eventCards;

    getMyUpcomingCards = () => this.#eventCards;

    addNewCard = (card) => {
        let newCard = new EventCard(card.image, card.title, card.tags, card.summary, card.description);
        this.#eventCards = [...newCard]
    };
}

export default SearchService;