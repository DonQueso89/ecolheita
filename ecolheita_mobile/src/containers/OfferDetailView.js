import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Modal, SafeAreaView } from 'react-native'
import { Card, Text, Divider, Button } from 'react-native-elements'
import R from 'ramda'
import { Ionicons } from '@expo/vector-icons'

const mapState = (state, ownProps) => {
  return R.compose(
    R.head,
    R.filter(R.whereEq({ _id: ownProps.route.params.vendorId }))
  )(state.vendors.data)
}

function PaymentModal({ visible, setVisible, ...props }) {
  const [quantity, setLocalQuantity] = useState(1)
  const setQuantity = (v) => { (0 < v && v <= props.numLeft) ? setLocalQuantity(v) : null } 
  return (
    <SafeAreaView>
      <Modal
        animationType={'slide'}
        visible={visible}
        style={{ marginHorizontal: 20 }}
        statusBarTranslucent={true}>
        <View style={styles.centeredView}>
          <View style={styles.paymentModal}>
            <Ionicons
              name={'ios-backspace'}
              size={30}
              style={{ alignSelf: 'flex-end' }}
              onPress={() => setVisible(false)}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
              {props.name}
              {' - <Local>'}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {'Colecta entre '}
              {props.openFrom} e {props.openUntil}
            </Text>
            <Divider />
            <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 10 }}>
              Seleciona quantidade
            </Text>
            <Divider style={{ backgroundColor: '#000', height: 3 }} />
            <Text
              style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
              <Text
                style={{ fontSize: 34 }}
                onPress={() => setQuantity(quantity - 1)}>
                -
              </Text>{' '}
              {quantity}{' '}
              <Ionicons
                name="ios-add"
                size={30}
                onPress={() => setQuantity(quantity + 1)}
              />
            </Text>
            <Text style={{ fontSize: 16 }}>
              Preco total: R$ {props.price * quantity}
            </Text>
            <Text style={{ marginVertical: 10 }}>
              Por meio da confirmacao da reserva, voce esta de acordo cm os
              termos gerais de Ecolheita
            </Text>
            <Button
              title="Confirma reserva"
              type="outline"
              raised
              buttonStyle={{ backgroundColor: '#282' }}
              titleStyle={{ color: '#fff' }}
              containerStyle={{ width: '80%' }}
              //onPress={props.navigation.navigate("PaymentModule")}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

function OfferDetailView(props) {
  const [paymentModalVisible, setPaymentModalVisible] = useState(false)
  return (
    <SafeAreaView style={styles.offerContainer}>
      <PaymentModal
        visible={paymentModalVisible}
        setVisible={setPaymentModalVisible}
        {...props}
      />
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
          icon={<Ionicons name="md-basket" color="#ffffff" size={25} />}
          titleStyle={{ paddingLeft: 10 }}
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: '#282',
          }}
          raised
          title={'Reserva uma (' + props.numLeft + ' sobrando)'}
          onPress={() => setPaymentModalVisible(true)}
        />
      </Card>
    </SafeAreaView>
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
  paymentModal: {
    elevation: 5,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    flex: 1,
  },
  centeredView: {
    marginTop: 22,
    padding: 20,
    flex: 1,
  },
})

export default connect(mapState)(OfferDetailView)
