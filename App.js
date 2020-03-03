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

import LKFlatList from './components/LKFlatList'

const App: () => React$Node = () => {
  return ( 
    <>
      <StatusBar barStyle = "dark-content" />
      <SafeAreaView style = {
        styles.mainViewStyle
      }>
      <LKFlatList />
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1
  },
});

export default App;

