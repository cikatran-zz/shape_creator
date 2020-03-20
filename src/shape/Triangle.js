import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class Triangle extends PureComponent {
  render() {
    const { size, x, y, fill } = this.props
    return (
      <View style={{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: size / 2,
        borderRightWidth: size / 2,
        borderBottomWidth: size,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: fill,
        position: 'absolute',
        top: y - size / 2,
        left: x - size / 2,
      }} />
    )

  }
}