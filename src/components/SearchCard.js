import React from "react";
import SingleEventModal from "./SingleEventModal";

class SearchCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // local state: whether modal is open
      SingleEventModalOpen: false,
      props: this.props
    };
  }

  openModal = () => {
    this.setState({ SingleEventModalOpen: true });
  };

  closeModal = () => {
    this.setState({ SingleEventModalOpen: false });
  };

  render() {
    return (
      <div className="card">
        {this.state.SingleEventModalOpen ? (
          <SingleEventModal
            card={this.props.cardProps}
            closeModal={this.closeModal}
            attendEvent={this.props.attendEvent}
            cancelAttending={this.props.cancelAttending}
          />
        ) : null}
        <div className="card-header">
          <h5><strong>{this.props.cardProps.title}</strong></h5>
        </div>
        <div className="card-body">
          <img
            src={this.props.cardProps.img}
            className="card-img-top img-thumbnail"
            alt="..."
          />
          <h6 className="card-title mt-2">{this.props.cardProps.summary}</h6>
          <p className="card-text">
            {this.props.cardProps.date.toLocaleString()}
          </p>
          <p className="card-text">
            {`Location: ${this.props.cardProps.location} `}
          </p>
          <button className="btn btn-primary" onClick={this.openModal}>
            More..
          </button>
        </div>
      </div>
    );
  }

}
export default SearchCard;
