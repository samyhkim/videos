import React from "react";
import youtube, { baseParams } from "../api/youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
