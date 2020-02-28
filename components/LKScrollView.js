/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions
} from 'react-native';
export default class LKScrollView extends Component {
  constructor() {
    super();
    this.state = {
      itemArr: []
    }
  }
  renderItems () {
    let colorArr = ['red', 'green', 'blue', 'gray', 'purple'], itemArr = []

    colorArr.forEach(v => {
      itemArr.push(
        <View
          key={Math.random()}
          style={{
            width: Dimensions.get('window').width,
            height: 300,
            backgroundColor: v,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>{v}</Text>
        </View>
      )
    })
    return itemArr
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
        >
          { this.renderItems() }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    height: 100
  },
});
