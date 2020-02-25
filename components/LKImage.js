/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image,Text, StyleSheet, ImageBackground} from 'react-native';
export default class LKImage extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <View>
        {/* 加载本地图片 */}
        {/* <Image source={require('../assets/test.jpg')}
          // 设置宽高
          style={{ width: 200, height: 200 }}
        /> */}
        <ImageBackground source={require('../assets/test.jpg')}
          // 设置宽高
          style={{ width: 400, height: 300 }}
        >
          <Text style={{color:'#fff'}}>this is a demo</Text>
        </ImageBackground>
        {/* 加载网络图片 */}
        {/* 加载网络图片 image标签必须设置宽和高，否者不显示，加载本地图片可以不设置。 */}
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainTitleStyle: {
    fontSize: 30,
    color: 'cyan',
  },
  subTitleStyle: {
    fontSize: 20,
    color: '#fff',
  },
  commonStyle: {
    // 公共样式
    fontWeight: 'bold',
  },
});
