import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Playlist } from '../../components/Playlist/Playlist';
import './App.css';
import Spotify from '../../util/Spotify';

Spotify.getAccessToken();

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [ {id: '1', name: 'name', album: 'album', artist: 'artist'},
      {id: '2', name: 'name2', album: 'album2', artist: 'artist2'} ],
      playlistName: 'Playlist Name',
      playlistTracks:  [ {id: '1', name: 'name', album: 'album', artist: 'artist'},
      {id: '2', name: 'name2', album: 'album2', artist: 'artist2'} ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('My playlist');
    console.info(trackUris);
  }

  search(term) {
    Spotify.search(term)
      .then(searchResults => this.setState({
        searchResults: searchResults
      }));
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              name={this.state.playlistName}
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}
