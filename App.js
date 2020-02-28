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
  StatusBar
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import LKText from './components/LKText'
// import LKImage from './components/LKImage'
// import LKImageDemo from './components/LKImageDemo'
// import LKButton from './components/LKButton'
import LKSwiper from './components/LKSwiper'
// import LKFlexDemo from './components/LKFlexDemo'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainViewStyle}>
        {/* <LKFlexDemo /> */}
        <LKSwiper />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: 'cyan'
  },
});

export default App;
