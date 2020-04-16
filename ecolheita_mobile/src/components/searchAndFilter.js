import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

function SearchAndFilter(props) {
  return (
    <View style={styles.searchAndFilter}>
      <SearchBar
        placeholder="Nome do comercio"
        onChangeText={props.setVendorQuery}
        value={props.vendorQuery}
        containerStyle={{ flex: 7 }}
        platform="ios"></SearchBar>
      <Ionicons
        name="md-options"
        size={40}
        style={{ flex: 1, paddingVertical: 17 }}
        onPress={() => props.navigation.navigate('GlobalFilterModal')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchAndFilter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(245, 245, 245)',
  },
})

export default SearchAndFilter
