/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default class LKText extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topViewStyle}>
          <TouchableOpacity
            style={styles.clikBtnStyle}
          >
            <Text style={{color: '#fff'}}>添加文本</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.clikBtnStyle, { backgroundColor: 'red', marginLeft: 10 }]}
          >
            <Text style={{color: '#fff'}}>删除文本</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  topViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  clikBtnStyle: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
