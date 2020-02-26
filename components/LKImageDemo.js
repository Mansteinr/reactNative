/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View, Image, Text, StyleSheet, ImageBackground,
  Dimensions
} from 'react-native';
export default class LKImageDemo extends Component {
  constructor() {
    super();
    this.state = {
      // 引入本地数据
      dataArr: require('./../assets/localData/data.json')
    }
  }
  renderDemo () {
    let itemArr = [],
      screenW = Dimensions.get('window').width, // 获取屏幕的宽
      cols = 3,
      boxW = 100, // 定义盒子的髋
      boxH = 120, // 定义盒子的高
      hMargin = (screenW - boxW * cols) / (cols + 1), // 水平间距
      vMargin = 20 // 垂直间距
    
    this.state.dataArr.forEach(v => {
      itemArr.push(
        <View key={Math.random()} style={{
          width: boxW,
          height: boxH,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: hMargin,
          marginTop: vMargin
        }}>
          <Image source={require('../assets/test.jpg')} style={{height: 80, width: 80}}/>
          <Text>{v.name}</Text>
        </View>
      )
    })
    return itemArr
  }
  render () {
    return (
      <View style={styles.container}>
        { this.renderDemo() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'cyan'
  }
});
