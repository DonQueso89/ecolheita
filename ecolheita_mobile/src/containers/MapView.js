import React from 'react'
import MapView from 'react-native-maps'
import { View, StyleSheet } from 'react-native'

function EcolheitaMapView() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: -24.799791,
          longitude: -50.0014762,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}></MapView>
    </View>
  )
}

export default EcolheitaMapView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
