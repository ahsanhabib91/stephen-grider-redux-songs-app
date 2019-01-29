import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import SongDetail from "./SongDetail";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)} // when we call this action-creator, it will return the action and automatically send to Redux's dispatch function
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log("SongList props:", this.props);
    return (
      <div>
        <div className="ui divided list">{this.renderList()}</div>
        {/* Testing Purpose */}
        {/* <div className="column eight wide">
          <SongDetail song={{ title: "Song 1", duration: "1:05" }} />
        </div> */}
      </div>
    );
  }
}

/**
 * This function gets called with all the data in our Redux store.
 * Any time state data gets changed or anytime we re-run reducers and produce some new state object, this function will re-run with the newly created state object.
 */
const mapStateToProps = state => {
  console.log("SongList state:", state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps, // mapping the state to this.props
  { selectSong } // mapping the action-creator to this.props. If we call this action-creator, it will return the action and automatically send to Redux's dispatch function
)(SongList);
