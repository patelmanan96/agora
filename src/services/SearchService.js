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



let eventCards = [new EventCard(1, "otherDefault", networking, 'Graduate Students Networking',
    ['career', 'graduate', 'networking'], 'Build your networking for your future career',
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1), "WVH"),
    new EventCard(2, "otherDefault", writing, 'Phd Students Writing Workshop', ['writing'], 'Leverage your thesis!'
        , 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+2), "Snell Library"),
    new EventCard(3, "otherDefault", smartphone, 'Smartphone Research Study', ['research'], 'Research volunteers wanted!'
        , 'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+3), "265 Nightingale Hall"),
    new EventCard(4, "userDefault", yoga, 'Yoga', ['exercise', 'yoga', 'health'], 'Practice yoga with us!'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+5), "200 Ell Hall"),
    new EventCard(5, "userDefault", mentalHealth, 'Mental Health Awareness Month', ['mental health', 'care', 'health'], 'Self care matters'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+4), "200 Ell Hall"),
    new EventCard(6, "otherDefault",linkedinPhoto, 'Take your linkedin photo', ['career', 'graduate', 'networking'], 'Prepare for your job hunting'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+5), "WVH"),
    new EventCard(7, "otherDefault",pride, 'Husky Pride Parade', ['pride', 'self care', 'society'], 'Celebrate the Pride Month'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+6), "300 Newbury Street"),
    new EventCard(8, "otherDefault",bootcamp, 'NU Free JS Coder Bootcamp', ['computer', 'science',  'networking', 'career'], 'Monthly Get-together for NU Free Code Campers'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+7), "209 Ryder Hall"),
    new EventCard(9, "otherDefault",NEU, 'Campus Guide for new Huskies', ['campus guide'], 'Learn about your upcoming campus life'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+8), "Curry Student Center"),
    new EventCard(10, "otherDefault",artSpeaker, 'Art and Design Guest Speaker', ['art', 'networking'], 'Casual Chat with Daniel, the Industrial Graphic Designer'
        , 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+9), "300 Ryder Hall")
];

class SearchService {
    static instance = null;

    static CURRENT_USER = "userDefault";
    static OTHER_USER = "otherDefault";

    static getInstance() {
        return this.instance == null ? new SearchService() : this.instance;
    }

    getCards = (query) => {
        if (query === "*") return eventCards;
        query = query.toLowerCase();
        return eventCards.filter((card) => this.#queryMatchCards(card, query));
    };

    #queryMatchCards = (card, query) => {
        return (card.title.toLowerCase().includes(query) ||
            (card.tags.find(tag => tag.toLowerCase().includes(query)) !== undefined) ||
            card.summary.toLowerCase().includes(query))
    };

    getHostingCards = () => eventCards.filter(card => card.createdBy === SearchService.CURRENT_USER);

    getRecommendedCards = () => eventCards.filter(card => card.createdBy === SearchService.OTHER_USER &&
        !Boolean(card.attending));

    findCardById = (id) => eventCards.find(card => parseInt(card.eventId) === parseInt(id));

    getAllUpcomingCards = () => eventCards;

    getMyUpcomingCards = () => eventCards.filter(card => Boolean(card.attending) ||
        card.createdBy === SearchService.CURRENT_USER);

    updateCard = (updatedCard) => {
        let card = eventCards.find(card => parseInt(card.eventId) === parseInt(updatedCard.eventId));
        card.attending = updatedCard.attending;
        return card;
    };

    addNewCard = (card) => eventCards.push(card);
}

export default SearchService;
