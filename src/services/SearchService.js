import EventCard from "../models/EventCard";

class SearchService {
    static instance = null;
    cards = [new EventCard('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'TGIT', '3/19/2020 5:00pm'
        , 'Khoury College of Computer Science', 'Detailed Desc.', []),
        new EventCard('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Career Fair', '3/24/3030 10:00am', 'Curry Student Center'
            , 'Detailed Desc.', ['dangerous']),
        new EventCard('https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Mental Health Awareness Month', '4/16/2020 1:00pm', 'Ryder Hall'
            , 'Detailed Desc.', [])]
   

    static getInstance() {
        return this.instance == null ? new SearchService() : this.instance;
    }

    getCards = (query) => {
        if (query === "*") return this.cards;
        query = query.toLowerCase();
        return this.cards.filter((card) => this.#queryMatchCards(card, query));
    };

    #queryMatchCards = (card, query) => {
        return (card.title.toLowerCase().includes(query) ||
            card.tag.toLowerCase().includes(query) ||
            card.summary.toLowerCase().includes(query) ||
            (card.othertags.filter(tag => tag.includes(query)).length > 0))
    };

    getRecommendedCards = () => this.cards;

    addNewCard = (card) => {
        let newCard = new EventCard(card.image, card.title, card.tag, card.summary, card.description, card.othertags);
        this.cards = [...newCard]
    };
}

export default SearchService;