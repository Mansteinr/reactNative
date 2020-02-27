/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window'),
      dataArr = require('./../assets/localData/data.json')
export default class LKText extends Component {
  constructor() {
    super();
    this.state = {
      shopArr: []
    }
  }


  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topViewStyle}>
          <TouchableOpacity
            style={styles.clikBtnStyle}
            onPress={ this.addShop } 
          >
            <Text style={{color: '#fff'}}>添加文本</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={  this.removeShop }
            style={[styles.clikBtnStyle, { backgroundColor: 'red', marginLeft: 10 }]}
          >
            <Text style={{color: '#fff'}}>删除文本</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomViewStyle}>
          { this.state.shopArr }
        </View>
      </View>
    )
  }

     // 添加商品
     addShop = () => {
       let cols = 3, shopW = 100, shopH = 120, //每个盒子的宽高
       // 创建盒子的索引
         index = this.state.shopArr.length,
      
         row = Math.floor(index / cols),
         clo = Math.floor(index % cols),
      //  创建盒子左边距离
         xSpace = (0.9 * width - cols * shopW) / (cols - 1),
       
         // 垂直高度

         ySpace = (0.7 * height - 3 * shopH) / 2,
       
       // 左边
        left = clo * (xSpace + shopW),
        top = row * (shopH + ySpace)
       
      //  创建盒子
       
       let shopView = (
         <View style={{
           position: 'absolute',
           left: left,
           top: top,
           width: shopW,
           height: shopH
         }}
          key={Math.random() + ''}
         >
           <Image
             style={{
              width: shopW,
              height: shopH
             }}
             source={require('../assets/test.jpg')}
           />
           <Text>this is test demo</Text>
         </View>
       )
       let tempArr = this.state.shopArr
       tempArr.push(shopView)
       this.setState({
        shopArr: tempArr 
       })
    }
    // 移除
  removeShop = () => {
      let tempArr = this.state.shopArr
      if(tempArr.length) return
      tempArr.pop()
       this.setState({
        shopArr: tempArr 
       })
    }
 
} 

const styles = StyleSheet.create({
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
  bottomViewStyle: {
    width: width * 0.9,
    height: 0.7 * height,
    backgroundColor: 'cyan',
    marginTop:10,
    marginLeft: 0.05 * width,
    position: 'relative'
  }
});
