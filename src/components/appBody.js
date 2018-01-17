/* @flow */

import React, { Component } from 'react';
import { Text , StyleSheet } from 'react-native';
export default class AppBody extends Component {
  render() {
    return (

        <Text style={styles.body}>
          Body
        </Text>

    );
  }
}
const styles = StyleSheet.create({
body: {
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  color: 'blue',
  fontSize: 50,
  fontWeight: '400'
}

});
module.export = AppBody;
