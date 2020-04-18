import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import { SearchBar, ListItem, Image, Badge, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import Vendor from "components/Vendor"



function mapStateToProps(state) {
  const {
    vendors,
    user: { favorites },
  } = state
  return {
    favoriteVendors: vendors.data.filter((x) => favorites.includes(x._id)),
  }
}

function FavoritesView({ favoriteVendors }) {
  return favoriteVendors.length ? (
    <View>
      <FlatList
        data={favoriteVendors}
        renderItem={({ item }) => <Vendor style={styles.vendor} {...item} />}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Ionicons name="md-heart-empty" size={50} />
      <Text style={{ fontSize: 20, color: '#000' }}>
        Voce nao tem nenhum favorito ainda
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'center', // align children in the main direction
    alignItems: 'center', // how children are aligned in the cross direction
  },
  vendor: {
    backgroundColor: '#a50',
  },
})

export default connect(mapStateToProps)(FavoritesView)
