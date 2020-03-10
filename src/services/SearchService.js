import EventCard from "../models/EventCard";

class SearchService {
    static instance = null;
    cards = [new EventCard('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'TGIT', 'Thursday Party'
        , 'Khoury College of Computer Science', 'Detailed Desc.', '3/19/2020 5:00pm', []),
        new EventCard('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Graduate Student Networking', 'Career Fair', 'Curry Student Center'
            , 'Detailed Desc.', '3/24/3030 10:00am', ['dangerous']),
        new EventCard('https://images.unsplash.com/photo-1534463868211-1203a5c900a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1981&q=80', 'Students Pool Tournament', 'Pool Game', 'Ryder Hall'
            , 'Detailed Desc.', '4/16/2020 1:00pm',[])]

    hostingCards = [
        new EventCard('https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Talking about Climate Change', 'Guest Speaker'
        , 'West Village F', 'Detailed Desc.', '3/11/2020 6:00pm',[]),
        new EventCard('https://images.unsplash.com/photo-1500100586562-f75ff6540087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80', 'Game Genre and Personality Research Study', 'Research Participants Enrollment', 'West Village H'
            , 'Detailed Desc.', '4/24/3030 5:00pm', ['dangerous']),
        new EventCard('https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Mental Health Awareness Month', 'MISC', 'Ryder Hall'
            , '4/20/2020 1:00pm' ,'Detailed Desc.', [])
        ];
   

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

    getHostingCards = () =>this.hostingCards;

    addNewCard = (card) => {
        let newCard = new EventCard(card.image, card.title, card.tag, card.summary, card.description, card.othertags);
        this.cards = [...newCard]
    };
}

export default SearchService;