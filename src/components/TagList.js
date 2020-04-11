import React from "react";
import './TagList.css'

class TagList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="input-tag">
                <ul className="input-tag__tags">
                    {this.props.tags.map((tag, i) => (
                        <li key={tag}>
                            {tag}
                            <button type="button" onClick={() => {
                                this.props.removeTag(i);
                            }}>+
                            </button>
                        </li>
                    ))}
                    <li className="input-tag__tags__input"><input type="text"
                                                                  placeholder="Type the tag name here and press enter"
                                                                  onKeyDown={this.props.inputKeyDown} ref={c => {
                        this.tagInput = c;
                    }}/></li>
                </ul>
            </div>
        );
    }
}

export default TagList;
