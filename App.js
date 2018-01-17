/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
export default class AppBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the AppBody component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
