import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import SearchService from '../services/SearchService';
import SearchCard from "../components/SearchCard";
import HostingFilterBar from "../components/HostingFilterBar";


class HostingPage extends Component {
    constructor(props) {
        super(props);
        this.searchService = SearchService.getInstance();
        this.state = {
            cards: this.chunk(this.searchService.getHostingCards()
                .sort((card1, card2) => card1.title.localeCompare(card2.title)), 3),
            sort: 'title'
        };
    }

    changeSort = (sortType, currentCards = this.searchService.getHostingCards()) => {
        this.setState({sort: sortType});
        if (sortType === 'title') {
            let titleSorted = currentCards.sort((card1, card2) => card1.title.localeCompare(card2.title));
            this.setState({cards: this.chunk(titleSorted, 3)})
        } else if (sortType === 'later') {
            let soonerSorted = currentCards.sort((card1, card2) => card1.date < card2.date ? 1 : -1);
            this.setState({cards: this.chunk(soonerSorted, 3)})
        } else {
            let laterSorted = currentCards.sort((card1, card2) => card1.date > card2.date ? 1 : -1);
            this.setState({cards: this.chunk(laterSorted, 3)})
        }
    };

    chunk = (arr, size) =>
        Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    changeFilter = (filterType) => {
        if (filterType !== "ignore") {
            let queriedCards = this.searchService.getCards(filterType);
            this.changeSort(this.state.sort, queriedCards);
        } else {
            this.changeSort(this.state.sort);
        }
    };

    render() {
        return (
            <div className="container-fluid m-2">
                <div className="row m-3 bg-light text-dark">
                    <div className="col-sm ">
                        <div className="mt-4">
                            <h3>Events hosted by you:</h3>
                        </div>
                    </div>
                    <div className="col-sm">
                        <HostingFilterBar sortValue={this.state.sort}
                                          changeSort={this.changeSort}
                        />
                    </div>
                </div>


                {this.state.cards.map(chunk => {
                    return <div className="row m-5">
                        <div className="col-sm ml-5 mr-5">
                            <div className="card-columns">
                                {chunk.map(card => <SearchCard cardProps={card}
                                                               attendEvent={this.attendEvent}
                                                               cancelAttending={this.cancelAttending}
                                />)}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>

        );
    }
}

export default HostingPage;