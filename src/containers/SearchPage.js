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
            cards: this.chunk(this.searchService.getCards(this.props.match.params.query), 3),
            sort: 'title'
        };
    }

    changeSort = (sortType) => {
        this.setState({sort: sortType});
        let currentCards = this.searchService.getCards(this.props.match.params.query);
        if (sortType === 'title') {
            let titleSorted = currentCards.sort((card1, card2) => card1.title.localeCompare(card2.title));
            this.setState({cards: this.chunk(titleSorted, 3)})
        } else if (sortType === 'sooner') {
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

    render() {
        return (

            <div className="container-fluid m-2">
                <div className="row m-3 bg-light text-dark">
                    <div className="col-sm ">
                        <div className="mt-4">
                            <h3> Search Results for '{this.state.query === '*' ? 'all' : this.state.query}' </h3>
                        </div>
                    </div>
                    <div className="col-sm">
                        <FilterBar sortValue={this.state.sort}
                                   changeSort={this.changeSort}
                        />
                    </div>
                </div>


                {this.state.cards.map(chunk => {
                    return <div className="row m-5">
                        <div className="col-sm ml-5 mr-5">
                            <div className="card-columns">
                                {chunk.map(card => <SearchCard cardProps={card}/>)}
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