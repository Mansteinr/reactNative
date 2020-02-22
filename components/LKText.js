/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class LKText extends Component {
  constructor() {
    super();
    this.state = {
      name: '韩梅梅',
      info: '喜欢周明晔',
    };
  }
  render () {
    const {name, info} = this.state;
    return (
      <View>
        <Text style={[styles.mainTitleStyle, styles.commonStyle]}>{name}</Text>
        <Text style={[styles.subTitleStyle, styles.commonStyle]}>{info}</Text>
        <Text style={{fontSize: 50, color: 'green'}}>
          {/* 子可以继承父的样式 父不能是view */}
          <Text>{name}</Text>
          <Text>{info}</Text>
        </Text>
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
