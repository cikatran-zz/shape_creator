import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';


export default class Triangle extends PureComponent {
  render() {
    const {size, x, y, ...rest} = this.props

    const triangle = Path()
      .move(x, y)
      .lineTo(x, size)
      .lineTo(size, size + y)
      .close()
    return <Shape {...rest} d={triangle} />
  }
}