import React, { Component } from 'react';
import { AppRegistry, Text, View,Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
      );
  }
}
class Photo extends Component {
  render() {
    let pic = {
      uri: 'https://portal.stjosephstechnology.ac.in/StudentPhotos/Batch2015-2019/15CS1138.JPG'
    };
    return (
      <Image source={pic} style={{width: 600, height: 600}}/>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Mohammed' />
        <Photo/>
        <Greeting name='Irshed' />
       </View>
    );
  }
}
