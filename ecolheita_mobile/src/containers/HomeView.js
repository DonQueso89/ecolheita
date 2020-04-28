import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ListItem, Image, Badge, CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import {
  add as addVendors,
  reset as resetVendors,
  setQuery as setVendorQuery,
} from '../features/vendors/vendorSlice.js'

import { addFavorite, removeFavorite } from '../features/user/userSlice.js'

import { Ionicons } from '@expo/vector-icons'
import SearchAndFilter from '../components/searchAndFilter'

function getNumLeftBadge(numLeft) {
  return {
    value: 'Sobram ' + numLeft,
    status: numLeft < 3 ? 'error' : numLeft < 5 ? 'warning' : 'success',
    bottom: -20,
  }
}

function Vendor(props) {
  return (
    <ListItem
      rightAvatar={{ source: require('../../assets/favicon-32x32.png') }}
      bottomDivider
      topDivider
      containerStyle={{ backgroundColor: '#f5f5f5' }}
      title={
        <Text>
          {props.name} {<Ionicons name="md-clock" />}
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
      chevron={
        <Ionicons
          name={'ios-arrow-forward'}
          size={30}
          onPress={() => props.navigation.navigate('OfferDetailView', {
            vendorId: props._id,
          })}
        />
      }
      badge={getNumLeftBadge(props.numLeft)}
    />
  )
}

function HomeView(props) {
  return (
    <>
      <View style={styles.container}>
        <SearchAndFilter {...props} />
        <View style={styles.vendorList}>
          <FlatList
            data={
              props.vendorQuery.length
                ? props.vendors.filter((x) =>
                    x.name
                      .toLowerCase()
                      .includes(props.vendorQuery.toLowerCase())
                  )
                : props.vendors
            }
            keyExtractor={(item) => String(item._id)}
            renderItem={({ item }) => (
              <Vendor
                style={styles.vendor}
                {...item}
                navigation={props.navigation}
                onLike={props.addFavorite}
                onUnlike={props.removeFavorite}
              />
            )}
          />
        </View>
      </View>
    </>
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
  }
}

const mapDispatchToProps = {
  addVendors: addVendors,
  resetVendors: resetVendors,
  setVendorQuery: setVendorQuery,
  addFavorite: addFavorite,
  removeFavorite: removeFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
  },
  vendorContainer: {
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
    height: 80,
  },
  navButton: {
    backgroundColor: '#a50',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 20,
    borderColor: 'red',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  vendorScroller: {
    flex: 1,
    backgroundColor: '#fa5',
  },
  vendor: {
    backgroundColor: '#a50',
  },
  vendorBackground: {
    flexDirection: 'row',
    width: 390,
    height: 80,
    borderRadius: 5,
  },
  vendorList: {
    flex: 6,
  },
  searchAndFilter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(245, 245, 245)',
  },
})
