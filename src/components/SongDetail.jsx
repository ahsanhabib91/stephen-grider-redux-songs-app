import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  //   console.log("songDetail props:", props);
  if (props.song) {
    return (
      <div>
        <h3>Seong Detail:</h3>
        <p>Titel: {props.song.title}</p>
        <p>Duration: {props.song.duration}</p>
      </div>
    );
  }
  return <div>Select a song</div>;
};

const mapsToProps = state => {
  //   console.log("songDetail state:", state);
  return { song: state.selectSongReducer };
};

export default connect(mapsToProps)(SongDetail);
