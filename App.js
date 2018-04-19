import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BodyText } from 'react-native-minimalist';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>
        <BodyText>React Native Minimalist...</BodyText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
