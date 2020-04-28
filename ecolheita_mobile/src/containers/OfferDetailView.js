import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Divider, Button } from 'react-native-elements'
import R from 'ramda'
import { Ionicons } from '@expo/vector-icons'

const mapState = (state, ownProps) => {
  return R.compose(
    R.head,
    R.filter(R.whereEq({ _id: ownProps.route.params.vendorId }))
  )(state.vendors.data)
}

function OfferDetailView(props) {
  return (
    <View style={styles.offerContainer}>
      <Card
        image={require('../../assets/foodbg.jpg')}
        title={props.name}
        imageProps={{ resizeMode: 'cover', width: '100%' }}
        containerStyle={styles.cardContainer}>
        <Text style={styles.metaText}>
          <Ionicons name="md-clock" /> {props.openFrom} - {props.openUntil} | R$
          {props.price} | {props.category}
        </Text>
        <Divider />
        <Text style={styles.descriptionText}>{props.description}</Text>
        <Button
          icon={<Ionicons name="md-basket" color="#ffffff" size={25}/>}
          titleStyle={{paddingLeft: 10}}
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "#282"
          }}
          raised
          title={"Reserva uma (" + props.numLeft + " sobrando)"} 
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  offerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 0,
    margin: 0,
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  metaText: {
    width: '100%',
    marginBottom: 10,
  },
  descriptionText: {
    marginVertical: 10,
  },
})

export default connect(mapState)(OfferDetailView)
