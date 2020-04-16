import React from "react";
import SearchCard from "../components/SearchCard";
import FilterBar from "../components/FilterBar";
import SearchService from "../services/SearchService";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.searchService = SearchService.getInstance();
        this.state = {
            query: this.props.match.params.query,
            cards: this.chunk(this.searchService.getCards(this.props.match.params.query)
                .sort((card1, card2) => card1.title.localeCompare(card2.title)), 3),
            sort: 'title',
            results: this.searchService.getCards(this.props.match.params.query).length
        };
    }

    changeSort = (sortType, currentCards = this.searchService.getCards(this.props.match.params.query)) => {
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

    changeFilter = (filterType) => {
        if (filterType !== "ignore") {
            let queriedCards = this.searchService.getCards(filterType);
            this.setState({results: queriedCards.length});
            this.changeSort(this.state.sort, queriedCards);
        } else {
            this.changeSort(this.state.sort);
        }
    };

    chunk = (arr, size) =>
        Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    attendEvent = (card) => {
        // alert(card)
        card.attending = true;
        this.searchService.updateCard(card);
        this.changeSort(this.state.sort);
    };

    cancelAttending = (card) => {
        card.attending = false;
        this.searchService.updateCard(card);
        this.changeSort(this.state.sort);
    };

    render() {
        return (

            <div className="container-fluid m-2">
                <div className="row m-3 bg-light text-dark">
                    <div className="col-sm ">
                        <div className="mt-4">
                            <h3><i>{this.state.results}</i> search results for '{this.state.query === '*' ? 'all' : this.state.query}' </h3>
                        </div>
                    </div>
                    <div className="col-sm">
                        <FilterBar sortValue={this.state.sort}
                                   changeSort={this.changeSort}
                                   changeFilter={this.changeFilter}
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
        )
    }
}

export default SearchPage;