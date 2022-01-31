import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from '/Users/deniskosenko/Documents/rn-todo-app/loginPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app Ivan!</Text>
      <StatusBar style="auto" />
      <LoginPage></LoginPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
