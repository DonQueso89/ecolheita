import React from 'react'
import MapView from 'react-native-maps'
import { View, StyleSheet } from 'react-native'
import SearchAndFilter from '../components/searchAndFilter'
import { connect } from 'react-redux'
import {
  add as addVendors,
  reset as resetVendors,
  setQuery as setVendorQuery,
} from '../features/vendors/vendorSlice.js'

function EcolheitaMapView(props) {
  return (
    <View style={styles.container}>
      <SearchAndFilter {...props} />
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

const mapStateToProps = (state, ownProps) => {
  const favorites = state.user.favorites
  const vendors = state.vendors.data.map((x) =>
    Object.assign({ liked: favorites.includes(x._id) }, x)
  )
  return {
    vendors: vendors,
    vendorQuery: state.vendors.query,
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
  map: {
    flex: 6,
  },
})
