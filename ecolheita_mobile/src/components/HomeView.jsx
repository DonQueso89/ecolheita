import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, ScrollView, View, FlatList, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux"
import { add as addVendors, reset as resetVendors, setQuery as setVendorQuery  } from "../features/vendors/vendorSlice.js"


function Search(props) {
    return <SearchBar
        placeholder="Entra prato ou loja"
        onChangeText={props.setVendorQuery}
        value={props.vendorQuery}
        style={props.style}
      />
}


function Offer(props) {
    /*
     * thumbnail name distance category rating vendorName price
     */
    return <TouchableOpacity style={props.style}><Text>{props.name}</Text></TouchableOpacity>
}

function Vendor(props) {
    /*
     * name logo
     */
    return <TouchableOpacity style={props.style}><Text>{"Comercio " + props.name}</Text></TouchableOpacity>
}

function HomeView(props) {
  return (
      <>
    <Search style={{backgroundColor: '#fa5'}} {...props} />
      <View style={styles.container}>
    <FlatList
      data={props.vendorQuery.length ? props.vendors.filter(x => x.toLowerCase().includes(props.vendorQuery.toLowerCase())) : props.vendors}
      renderItem={({item}) => <Vendor style={styles.navButton} name={item}  />} />
      </View>
      </>
  )
}

const mapStateToProps = (state, ownProps) => ({
    vendors: state.vendors.data,
    vendorQuery: state.vendors.query
})

const mapDispatchToProps = { 
    addVendors: addVendors,
    resetVendors: resetVendors,
    setVendorQuery: setVendorQuery
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
    height: 80
  },
  navButton: {
    backgroundColor: '#a50',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 20,
    borderColor: "red"
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 5,
    backgroundColor: "lightgray"
  },
  vendorScroller: {
    flex: 1,
    backgroundColor: '#fa5'
  },
  vendor: {
    backgroundColor: '#a50',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 20,
    borderColor: "red",
    height: 80
  }
})
