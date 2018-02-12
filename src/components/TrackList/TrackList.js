import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css';
import { Track } from '../../components/Track/Track';

export class TrackList extends React.Component {

    render() {
        return (
          <div className="TrackList">
            {this.props.tracks.map(track => <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} />)}
          </div>
        );
      }
    }
    