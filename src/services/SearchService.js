import EventCard from "../models/EventCard";
import networking from '../images/networking.jpg';
import writing from '../images/writing.jpg';
import smartphone from '../images/smartphone.jpg';
import yoga from '../images/yoga.jpg';
import mentalHealth from '../images/mentalHealth.jpg';
import linkedinPhoto from '../images/linkedinPhoto.jpg';
import pride from '../images/pride.jpg';
import bootcamp from '../images/bootcamp.jpg';
import NEU from '../images/NEU.jpg';
import artSpeaker from '../images/artSpeaker.jpg';




class SearchService {
    static instance = null;


    #getDateObjectsFromYear = (year) => {
        let d = new Date();
        d.setFullYear(year);
        return d;
    };

    #dates = [this.#getDateObjectsFromYear(2020),
        this.#getDateObjectsFromYear(2020), this.#getDateObjectsFromYear(2020),
        this.#getDateObjectsFromYear(2020)];

    #eventCards = [new EventCard(networking, 'Graduate Students Networking',
        ['career', 'graduate', 'networking','Science'], 'Build your networking for your future career', 
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
        this.#dates[0], "WVH"),
        new EventCard(writing, 'Phd Students Writing Workshop', ['writing', 'Computer', 'Engineering', 'Society', 'Health', 'Business', 'Law', 'History'], 'Leverage your thesis!'
            , 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
            this.#dates[1], "Snell Library"),
        new EventCard(smartphone, 'Smartphone Research Study', ['research', 'Computer', 'Science','Health', 'Engineering'], 'Research volunteers wanted!'
            , 'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source', 
            this.#dates[2], "265 Nightingale Hall"),
        new EventCard(yoga, 'Yoga', ['exercise', 'yoga', 'health', 'self care'], 'Practice yoga with us!'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        new EventCard(mentalHealth, 'Mental Health Awareness Month', ['mental health', 'self care',  'health', 'Society'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        new EventCard(linkedinPhoto, 'Take Your LinkedIn Photo', ['career', 'networking'], 'Prepare for Your Job Hunting'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "209 Ryder Hall"),
        new EventCard(pride, 'Husky Pride Parade', ['pride', 'self care', 'Society'], 'Celebrate Pride Month'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "209 Newbury Street"),
        new EventCard(bootcamp, 'NU Free JS Coder Bootcamp', ['computer', 'science',  'networking', 'career'], 'Monthly Get-together for NU Free Code Campers'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "WVH 203"),
        new EventCard(NEU, 'Campus Guide for new Huskies', ['campus guide'], 'Learn about Your Upcoming Campus Life'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "Curry Student Center"),
        new EventCard(artSpeaker, 'Art and Design Gust Speaker', ['Art', 'networking'], 'Casual Chat with a Graphic Designer'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "300 Ryder Hall"),
        new EventCard(mentalHealth, 'Mental Health Awareness Month', ['mental health', 'self care',  'health', 'Society'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        new EventCard(mentalHealth, 'Mental Health Awareness Month', ['mental health', 'self care',  'health', 'Society'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        new EventCard(mentalHealth, 'Mental Health Awareness Month', ['mental health', 'self care',  'health', 'Society'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        new EventCard(mentalHealth, 'Mental Health Awareness Month', ['mental health', 'self care',  'health', 'Society'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        new EventCard(mentalHealth, 'Mental Health Awareness Month', ['mental health', 'self care',  'health', 'Society'], 'Self care matters'
            , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', 
            this.#dates[3], "200 Ell Hall"),
        
        ];

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