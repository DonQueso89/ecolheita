import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Text } from 'react-native'
import SearchAndFilter from '../components/searchAndFilter'
import { connect } from 'react-redux'
import {
  add as addVendors,
  reset as resetVendors,
  setQuery as setVendorQuery,
} from '../features/vendors/vendorSlice.js'
import { T } from 'ramda'

function EcolheitaMapView(props) {
  /*
  loc from location services
  otherwise loc from configured region
  otherwise loc from some sophisticated estimation algo
  */
  const [region, setRegion] = useState({
    latitude: props.initialLatitude,
    longitude: props.initialLongitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  })
  return (
    <View style={styles.container}>
      <SearchAndFilter {...props} />
      <MapView
        style={styles.mapStyle}
        region={region}
        onRegionChangeComplete={setRegion}>
        {props.vendors.map((vendor) => (
          <Marker
            key={vendor._id.toString()}
            coordinate={{
              latitude: vendor.latitude,
              longitude: vendor.longitude,
            }}
            title={vendor.name + " " + `(sobram ${vendor.numLeft})`}
            description={vendor.description}
            onCalloutPress={() =>
              props.navigation.navigate('OfferDetailView', {
                vendorId: vendor._id,
              })
            }
          />
        ))}
      </MapView>
    </View>
  )
}

const mapStateToProps = (state) => {
  const favorites = state.user.favorites
  const vendors = state.vendors.data.map((x) =>
    Object.assign({ liked: favorites.includes(x._id) }, x)
  )
  return {
    vendors: vendors,
    vendorQuery: state.vendors.query,
    initialLatitude: state.user.latitude,
    initialLongitude: state.user.longitude,
  }
}

const mapDispatchToProps = {
  addVendors: addVendors,
  resetVendors: resetVendors,
  setVendorQuery: setVendorQuery,
}

export default connect(mapStateToProps, mapDispatchToProps)(EcolheitaMapView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
  },
  mapStyle: {
    flex: 6,
  },
})
