/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
export default class LKButton extends Component {
  constructor() {
    super();
  }
  render () {
    // 按钮经常使用第二个 方便
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          color="red"
          title="确定"
          onPress={() => { 
          alert('已经登录')
          }} />
        <TouchableOpacity
          style={styles.BtnStyle}
          onPress={() => { 
            alert('TouchableOpacity')
            }} 
        >
          <Text style={{fontSize: 20, color: 'green'}}>注册账号</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  BtnStyle: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
