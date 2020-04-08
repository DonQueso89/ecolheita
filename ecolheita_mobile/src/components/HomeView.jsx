import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, ScrollView, View, FlatList, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux"


function Search(props) {
    const [query, setQuery] = useState("");
    return <SearchBar
        placeholder="Entra prato ou loja"
        onChangeText={setQuery}
        value={query}
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
    return <TouchableOpacity style={props.style}><Text>Comercio {props.number}</Text></TouchableOpacity>
}

export default function HomeView({ navigation }) {
  const vendors = [0, 1, 2, 3, 4, 5].map((i) => <Vendor style={styles.navButton} number={i}/>)
  const offers = [
    "prato delicioso",
    "farofa",
    "mais farofa",
    "pratissimo",
    "muito bom",
    "sabor maluco",
    "feijoada q sobrou"
  ]

  return (
      <>
    <Search style={{backgroundColor: '#fa5'}} />
      <View style={{height: 100}}>
    <ScrollView contentContainerStyle={{...styles.vendorScroller}} horizontal={true}>
      {vendors}
      </ScrollView>
      </View>
      <View style={styles.container}>
    <FlatList
      data={offers}
      renderItem={({item}) => <Offer style={styles.navButton} name={item}/>} />
      </View>
      </>
  )
}

const mapStateToProps = (state, ownProps) => ({
    vendors: state.vendors
})

connect(mapStateToProps)(HomeView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
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
    padding: 2,
    borderRadius: 5
  }
})
