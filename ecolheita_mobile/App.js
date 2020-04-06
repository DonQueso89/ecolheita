import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        onPress={() => alert('Vamos procurar!!')}
        style={styles.navButton}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Procurar cestas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Aqui podes fazer configuracoes')}
        style={styles.navButton}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Meu perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Um atalho para tuas lojas favoritas')}
        style={styles.navButton}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 380,
    height: 100,
  },
  titleText: {
    fontSize: 20,
  },
  navButton: {
    backgroundColor: '#a50',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 20,
  },
})
