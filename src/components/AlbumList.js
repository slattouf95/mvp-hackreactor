import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import SongDetail from "./SongDetail.js";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    axios
      .get(`https://rallycoding.herokuapp.com/api/music_albums`)
      .then(response => {
        console.log(response.data);
        this.setState({
          albums: response.data
        });
        console.log(this.state.albums);
      });
  }
  renderAlbums() {
    return this.state.albums.map((album, index) => (
      <SongDetail key={album.title} index={index + 1} album={album} />
    ));
  }
  render() {
    return (
      <ScrollView>
        <View>{this.renderAlbums()}</View>
      </ScrollView>
    );
  }
}

export default AlbumList;
