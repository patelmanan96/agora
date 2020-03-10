import React from "react";

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-inline float-right p-3 mb-2 bg-light text-dark">
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Filters : </label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">College</option>
                    <option value="2">Event Tag</option>
                    <option value="3">Time</option>
                </select>
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Sort By : </label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">Happening sooner</option>
                    <option value="2">Happening later</option>
                    <option value="3">Most related major</option>
                    <option value="3">Most compatible based on previously attended</option>
                </select>
            </div>

        )
    }
}

export default FilterBar;