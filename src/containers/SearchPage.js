import React from "react";
import SearchCard from "../components/SearchCard";
import FilterBar from "../components/FilterBar";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="container-fluid m-2">
                <div className="row m-3 bg-light text-dark">
                    <div className="col-sm ">
                        <div className="mt-4">
                            <h3> Search Results for 'query' </h3>
                        </div>

                    </div>
                    <div className="col-sm">
                        <FilterBar/>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-sm ml-5 mr-5">
                        <div className="card-deck">
                            <SearchCard/>
                            <SearchCard/>
                            <SearchCard/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SearchPage;