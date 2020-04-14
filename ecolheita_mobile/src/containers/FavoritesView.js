import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import { SearchBar, ListItem, Image, Badge, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'

function getNumLeftBadge(props) {
  return {
    value: 'Sobram ' + props.numLeft,
    status:
      props.numLeft < 3 ? 'error' : props.numLeft < 5 ? 'warning' : 'success',
    bottom: -20,
  }
}

function Vendor(props) {
  return (
    <ListItem
      rightAvatar={{ source: require('../../assets/favicon-32x32.png') }}
      bottomDivider
      topDivider
      style={props.style}
      title={
        <Text>
          {props.name} <Ionicons name="md-clock" />
          {props.openFrom + '/' + props.openUntil}
        </Text>
      }
      subtitle={
        <View style={styles.vendorBackground}>
          <Image
            source={require('../../assets/foodbg.jpg')}
            style={{
              height: 80,
              width: 300,
              borderRadius: 5,
              resizeMode: 'stretch',
            }}>
            <Badge
              value={props.distance + ' metros'}
              containerStyle={{ bottom: -30, left: -110 }}
            />
            <Badge
              value={'R$' + props.price}
              containerStyle={{ bottom: -30, left: -125 }}
            />
          </Image>
        </View>
      }
      chevron={true}
      badge={getNumLeftBadge(props)}
    />
  )
}

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
