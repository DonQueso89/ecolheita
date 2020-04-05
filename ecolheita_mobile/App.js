import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageBackground } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a Ecolheita</Text>
      <ImageBackground source={require('./logo.png')} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    width: 380,
    height: 200,
  },
})
