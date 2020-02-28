/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  RefreshControl
} from 'react-native';

const screenW = Dimensions.get('window').width

export default class LKRefresh extends Component {
  constructor() {
    super();
    this.state = {
      rowDataArr: Array.from(new Array(30)).map((v, k) => {
        title: '初始化数据' + k
      }),
      isRefreshing: false
    }
  }
  onRefresh = () => {
    console.log('onRefresh')
    this.setState({
      isRefreshing: true
    })
    setTimeout(() => {
      let data = Array.from(new Array(5)).map((v, k) => {
        title: '初始化数据' + k
      })
      this.setState({
        rowDataArr: [...this.state.rowDataArr, ...data]
      })
    }, 5000)
  }
  render () {
    const rowsArr = this.state.rowDataArr.map((row, index) => <Row key={index} data={row}/>)
    return (
      <ScrollView
       
        refreshControl={
          
          <RefreshControl
            onRefresh={this.onRefresh}
            refreshing={this.state.isRefreshing} />
        }
      >
        {rowsArr}
      </ScrollView>
    )
  }
}

class Row extends Component{

  static defaultProps = {
    data: {}
  };
  render () {
    return (
      <View
        style={{
          color: 'red',
          width: screenW,
          height: 40,
          borderBottomWidth: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>{ this.props.data.title }</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'cyan'
  },
});
