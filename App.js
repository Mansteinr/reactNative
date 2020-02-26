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

// import LKText from './components/LKText'
// import LKImage from './components/LKImage'
// import LKImageDemo from './components/LKImageDemo'
import LKButton from './components/LKButton'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainViewStyle}>
        <LKButton />
        {/* <LKText /> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    // flex: 1,
    // backgroundColor: 'cyan',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});

export default App;
