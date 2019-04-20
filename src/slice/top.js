import React from 'react';

import pieTop from '.././math/pieTop';
import move from '.././math/move';

export default class Top extends React.Component {

  move = () => this.props.move(this.props.d)

  render() {
    return (
      <path style={{ fill: this.props.d.color, cursor: 'pointer' }}
        d={pieTop(this.props.d, this.props.rx, this.props.ry, this.props.ir)}
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
