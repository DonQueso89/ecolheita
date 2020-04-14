import React from 'react'
import { ListItem, Badge, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
  vendorBackground: {
    flexDirection: 'row',
    width: 390,
    height: 80,
    borderRadius: 5,
  },
})

export default Vendor
