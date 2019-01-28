import { combineReducers } from "redux";

const songsReducer = () => {
  //   console.log("songsReducer");
  return [
    { title: "Song 1", duration: "1:05" },
    { title: "Song 2", duration: "2:05" },
    { title: "Song 3", duration: "3:05" },
    { title: "Song 4", duration: "4:05" },
    { title: "Song 5", duration: "5:05" }
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  //   console.log("selectSongReducer");
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSongReducer: selectSongReducer
});
