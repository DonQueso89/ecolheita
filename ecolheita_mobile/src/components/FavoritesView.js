import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  const {
    vendors,
    user: { favorites },
  } = state
  return { favoriteVendors: vendors.filter((x) => favorites.includes(x)) }
}

function FavoritesView(props) {
  return props.favoriteVendors.length ? (
    <View style={styles.container}>
      <Ionicons name="md-heart-empty" size={50} />
      <Text style={{ fontSize: 20, color: '#000' }}>Voce tem favritos!</Text>
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
})

export default connect(mapStateToProps)(FavoritesView)
