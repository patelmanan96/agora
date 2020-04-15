import EventCard from "../models/EventCard";
import networking from '../images/networking.jpg';
import writing from '../images/writing.jpg';
import smartphone from '../images/smartphone.jpg';
import yoga from '../images/yoga.jpg';
import mentalHealth from '../images/mentalHealth.jpg';


class SearchService {
    static instance = null;

    static CURRENT_USER = "userDefault";
    static OTHER_USER = "otherDefault";

    #getDateObjectsFromDay = (day) => {
        let d = new Date();
        d.setFullYear(new Date().getFullYear());
        d.setMonth(new Date().getMonth());
        d.setDate(new Date().getDate() + day);
        return d;
    };

    #dates = [this.#getDateObjectsFromDay(5),
        this.#getDateObjectsFromDay(7), this.#getDateObjectsFromDay(2),
        this.#getDateObjectsFromDay(11)];

    #eventCards = [new EventCard(1, SearchService.OTHER_USER, networking, 'Graduate Students Networking',
        ['career', 'graduate', 'networking'], 'Build your networking for your future career',
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        this.#dates[0], "WVH"),
        new EventCard(2, SearchService.OTHER_USER, writing, 'Phd Students Writing Workshop', ['writing'], 'Leverage your thesis!'
            , 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            this.#dates[1], "Snell Library"),
        new EventCard(3, SearchService.CURRENT_USER, smartphone, 'Smartphone Research Study', ['research'], 'Research volunteers wanted!'
            , 'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
            this.#dates[2], "265 Nightingale Hall"),
        new EventCard(4, SearchService.OTHER_USER, yoga, 'Yoga', ['exercise', 'yoga', 'health'], 'Practice yoga with us!'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
            this.#dates[3], "200 Ell Hall"),
        new EventCard(5, SearchService.CURRENT_USER, mentalHealth, 'Mental Health Awareness Month', ['mental health', 'care', 'health'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
            this.#dates[3], "200 Ell Hall")
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

    getHostingCards = () => this.#eventCards.filter(card => card.createdBy === SearchService.CURRENT_USER);

    getRecommendedCards = () => this.#eventCards.filter(card => card.createdBy === SearchService.OTHER_USER &&
        !Boolean(card.attending));

    findCardById = (id) => this.#eventCards.find(card => parseInt(card.eventId) === parseInt(id));

    getAllUpcomingCards = () => this.#eventCards;

    getMyUpcomingCards = () => this.#eventCards;

    addNewCard = (card) => {
        let newCard = new EventCard(card.image, card.title, card.tags, card.summary, card.description);
        this.#eventCards = [...newCard]
    };
}

export default SearchService;