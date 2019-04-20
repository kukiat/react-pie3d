import React from 'react';

import pieOuter from '.././math/pieOuter';
import move from '.././math/move';

export default class Outer extends React.Component {

  move = () => this.props.move(this.props.d)

  render() {
    return (
      <path style={{ fill: this.props.d.color, cursor: 'pointer' }}
        d={pieOuter(this.props.d, this.props.rx, this.props.ry, this.props.h)}
        onClick={this.move}
        stroke="white"
        transform={this.props.moved ?
          `translate(${move(this.props.d, this.props.rx, this.props.ry)})`
          :
          'translate(0,0)'}
      />
    );
  }
}
