import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import Search from './components/Search';
import Pradacts from './components/Pradacts';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Search />
      <Pradacts />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF878D'
  },
});