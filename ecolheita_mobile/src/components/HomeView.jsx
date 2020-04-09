import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, ScrollView, View, FlatList, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux"
import { actions } from "../store.js"


function Search(props) {
    return <SearchBar
        placeholder="Entra prato ou loja"
        onChangeText={props.setOfferQuery}
        value={props.offerQuery}
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
    return <TouchableOpacity style={props.style}><Text>{"Comercio" + props.number}</Text></TouchableOpacity>
}

function HomeView(props) {
  return (
      <>
    <Search style={{backgroundColor: '#fa5'}} {...props} />
      <View style={styles.vendorContainer}>

    <FlatList
      data={props.vendors}
      renderItem={({item}) => <Vendor style={styles.vendor} number={item}/>} 
      horizontal={true}
        />
      </View>
      <View style={styles.container}>
    <FlatList
      data={props.offerQuery.length ? props.offers.filter(x => x.toLowerCase().includes(props.offerQuery.toLowerCase())) : props.offers}
      renderItem={({item}) => <Offer style={styles.navButton} name={item}  />} />
      </View>
      </>
  )
}

const mapStateToProps = (state, ownProps) => ({
    vendors: state.vendors,
    offers: state.offers.data,
    offerQuery: state.offers.query
})

const mapDispatchToProps = { 
    addVendors: actions.addVendors,
    resetVendors: actions.resetVendors,
    setOfferQuery: actions.setOfferQuery
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
