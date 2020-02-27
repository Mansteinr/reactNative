/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
export default class LKScrollView extends Component {
  constructor() {
    super();
  }
  renderItems () {
    let colorArr = ['red', 'green', 'blue', 'green', 'purple'], itemArr = []

    colorArr.forEach(v => {
      itemArr.push(
        <View
          key={Math.random()}
          style={{
            width: Dimensions.get('window').width,
            width: 300,
            backgroundColor: v
          }}
        >
          <Text>{v}</Text>
        </View>
      )
    })

  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled={true} // 滚动整数倍
          horizontal={true} // 水平
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
    backgroundColor: 'cyan'
  },
});
