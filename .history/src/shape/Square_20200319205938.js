import React, { PureComponent, Component } from 'react';
import { Shape, Path, Group, Pattern } from '@react-native-community/art';


export default class Square extends PureComponent {

  // render() {
    // const { size, x, y, ...rest } = this.props
  //   const patterns = 

  //   const square = Path()
  //     .moveTo(0, 0)
  //     .lineTo(size/2, 0)
  //     .lineTo(size/2, -size/2)
  //     .lineTo(-size/2, -size/2)
  //     .lineTo(-size/2, size/2)
  //     .lineTo(size/2, size/2)
  //     .lineTo(size/2, 0)
  //     .close()
  //   return (
  //     <Group x={x} y={y}>
  //       <Shape {...rest} d={square} />
  //     </Group>
  //   )
  // }

  render() {
    const { size, x, y, fill } = this.props
    <View style={{wid}} />
  }
}

