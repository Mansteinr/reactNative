/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const screenW = Dimensions.get('window').width
console.log(screenW)
export default class LKFlatList extends Component {
  constructor() {
    super();
    this.state = {
      dataSoruce: [
        '第一行数据',
        '第2行数据',
        '第4行数据',
        '第5行数据',
        '第6行数据',
        '第7行数据',
        '第8行数据',
        '第9行数据',
        '第一行数据',
        '第2行数据',
        '第4行数据',
        '第5行数据',
        '第6行数据',
        '第7行数据',
        '第8行数据',
        '第9行数据',
        '第一行数据',
        '第2行数据',
        '第4行数据',
        '第5行数据',
        '第6行数据',
        '第7行数据',
        '第8行数据',
        '第9行数据',
        '第一行数据',
        '第2行数据',
        '第4行数据',
        '第5行数据',
        '第6行数据',
        '第7行数据',
        '第8行数据',
        '第9行数据',
        '第一行数据',
        '第2行数据',
        '第4行数据',
        '第5行数据',
        '第6行数据',
        '第7行数据',
        '第8行数据',
        '第9行数据',
        '第一行数据',
        '第2行数据',
        '第4行数据',
        '第5行数据',
        '第6行数据',
        '第7行数据',
        '第8行数据',
        '第9行数据'
      ]
    }
  }
  render () {
    return (
      <FlatList
        numColumns={3}
        style={{
          width: screenW,
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
        keyExtractor={({ item, index }) =>item + index}
        data={this.state.dataSoruce}
        renderItem={({ item, index }) => this.renderRow(item, index)}
      />
    )
  }
  renderRow (item, index) {
    console.log(item)
    return (
      <TouchableOpacity
        style={{
          width: 120,
          height: 200,
          borderBottomWidth: 1,
          borderBottomColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> { item } </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'cyan'
  }
});
