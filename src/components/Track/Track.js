import React from 'react';

import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.onAdd) {
      return <a className='Track-action' onClick={this.addTrack}>+</a>;
    } else {
      return <a className='Track-action' onClick={this.removeTrack}>-</a>;
    }
  }

  addTrack() {
    console.log(this.props.track);
    this.props.onAdd(this.props);
  }

  removeTrack() {
    console.log(this.props.track);
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
    <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name} {this.props.key}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );

  }
}
