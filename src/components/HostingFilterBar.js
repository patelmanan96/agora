import React from "react";

class HostingFilterBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-inline float-right p-3 mb-2 bg-light text-dark">
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

export default HostingFilterBar;