/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App:() => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainViewStyle}>
        <Text> 
          当前屏幕高度：{Dimensions.get('window').height + '\n'}
          当前屏幕宽度：{Dimensions.get('window').width + '\n'}
          当前屏幕分辨率：{Dimensions.get('window').scale + '\n'}
          当前操作系统：{Platform.OS}
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
