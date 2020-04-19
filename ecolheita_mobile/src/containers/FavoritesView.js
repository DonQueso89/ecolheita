import React from 'react'
import { View, StyleSheet, Text, FlatList, CheckBox } from 'react-native'

import { SearchBar, ListItem, Image, Badge, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addFavorite, removeFavite } from '../features/user/userSlice'

function Vendor(props) {
  return (
    <ListItem
      rightAvatar={{ source: require('../../assets/favicon-32x32.png') }}
      bottomDivider
      topDivider
      containerStyle={{backgroundColor: "#f5f5f5"}}
      title={
        <Text>
          {props.name} {<Ionicons name="md-clock" />}
          {props.openFrom + '/' + props.openUntil}
        </Text>
      }
      subtitle={
        <View>
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
            <CheckBox
              checked={props.liked}
              right
              containerStyle={{ top: -80, right: -30 }}
              checkedIcon={<Ionicons name="md-heart" size={30} color="red" />}
              uncheckedIcon={<Ionicons name="md-heart-empty" size={30} />}
              onPress={
                props.liked
                  ? () => props.onUnlike(props._id)
                  : () => props.onLike(props._id)
              }
            />
          </Image>
        </View>
      }
      chevron={true}
      badge={{
        value: 'Sobram ' + props.numLeft,
        status: props.numLeft < 3 ? 'error' : props.numLeft < 5 ? 'warning' : 'success',
        bottom: -20,
      }}
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
    <View style={{flex: 1, backgroundColor: "#fa5"}}>
      <FlatList
        style={{backgroundColor: "#fa5"}}
        keyExtractor={(item) => String(item._id)}
        data={favoriteVendors}
        renderItem={({ item }) => (
          <Vendor
            style={styles.vendor}
            {...item}
            liked={true}
            onLike={addFavorite}
            onUnlike={removeFavite}
          />
        )}
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

const mapDispatch = {
  addFavorite,
  removeFavite,
}

export default connect(mapStateToProps, mapDispatch)(FavoritesView)