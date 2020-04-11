import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import FilterBar from '../components/FilterBar';
import SearchService from '../services/SearchService';
import SearchCard from "../components/SearchCard";


class HostingPage extends Component {
    constructor(props) {
        super(props);
        this.searchService = SearchService.getInstance();
        this.state = {
            cards: this.searchService.getHostingCards().sort((card1, card2) => card1.title.localeCompare(card2.title)),
            sort: 'title'
        };
    }

    changeSort = (sortType, currentCards = this.searchService.getCards(this.props.match.params.query)) => {
        this.setState({sort: sortType});
        if (sortType === 'title') {
            let titleSorted = currentCards.sort((card1, card2) => card1.title.localeCompare(card2.title));
            this.setState({cards: titleSorted})
        } else if (sortType === 'sooner') {
            let soonerSorted = currentCards.sort((card1, card2) => card1.date < card2.date ? 1 : -1);
            this.setState({cards: soonerSorted})
        } else {
            let laterSorted = currentCards.sort((card1, card2) => card1.date > card2.date ? 1 : -1);
            this.setState({cards: laterSorted})
        }
    };

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
            <Aux>
                <div className="container-fluid m-2 pre-scrollable">
                    <div className="row m-3 bg-light text-dark">
                        <div className="col-sm">
                            <div className="mt-4">
                                <h3>Events you are hosting:</h3>
                            </div>
                        </div>

                        <div className="col-sm">
                            <FilterBar sortValue={this.state.sort}
                                       changeSort={this.changeSort}
                                       changeFilter={this.changeFilter}
                            />
                        </div>
                    </div>
                </div>
                <div className="pre-scrollable bg-light">
                    {SearchService.getInstance().getHostingCards().map((card) => {
                        return <div className="m-5">
                            <SearchCard cardProps={card}/>
                        </div>
                    })}
                </div>
            </Aux>

        );
    }
}

export default HostingPage;