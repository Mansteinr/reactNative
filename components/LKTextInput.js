/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';

export default class LKTextInput extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }
  render () {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            // backgroundColor: 'gray',
            borderWidth: 1,
            marginLeft: 10,
            paddingLeft: 10
          }}
          placeholder="请输入密码"
          placeholderTextColor="red"
          clearButtonMode="while-editing"
          onChangeText={(text) => { // 双向数据绑定
            this.setState({
              inputValue: text
            })
          }}
        />
        <Text>输入的值： {this.state.inputValue}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
