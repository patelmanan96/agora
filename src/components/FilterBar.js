import React from "react";

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-inline float-right p-3 mb-2 bg-light text-dark">
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Filters : </label>
                <select onChange={(event) => this.props.changeFilter(event.target.value)}
                    className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="ignore" selected>None</option>
                    <option value="computer">Computer</option>
                    <option value="science">Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="health">Health</option>
                    <option value="law">Law</option>
                    <option value="writing">Writing</option>
                    <option value="career">Career</option>
                    <option value="research">Research</option>
                    <option value="exercise">Exercise</option>
                    <option value="self care">Self Care</option>
                </select>
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Sort By : </label>
                <select value={this.props.sortValue} onChange={(event) => this.props.changeSort(event.target.value)}
                        className="custom-select my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref">
                    <option value="sooner">Sooner</option>
                    <option value="later">Later</option>
                    <option value="title">Title</option>
                </select>
            </div>

        )
    }
}

export default FilterBar;