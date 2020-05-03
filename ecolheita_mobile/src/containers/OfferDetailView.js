import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Modal, SafeAreaView, Alert } from 'react-native'
import { Card, Text, Divider, Button } from 'react-native-elements'
import R from 'ramda'
import { Ionicons } from '@expo/vector-icons'
import { insert as insertOrder } from '../features/orders/orderSlice'
import { decrement as decrementNumLeft } from '../features/vendors/vendorSlice'
import { orderStatus } from '../constants'

const mapState = (state, ownProps) => {
  return R.compose(
    R.head,
    R.filter(R.whereEq({ _id: ownProps.route.params.vendorId }))
  )(state.vendors.data)
}

const mapDispatch = {
  insertOrder: insertOrder,
  decrementNumLeft: decrementNumLeft,
}


function PaymentModal({ visible, setVisible, ...props }) {
  const [quantity, setLocalQuantity] = useState(props.numLeft ? 1 :  0)
  const setQuantity = (v) => {
    0 < v && v <= props.numLeft ? setLocalQuantity(v) : null
  }
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={styles.plusMinus}
                onPress={() => setQuantity(quantity - 1)}>
                -
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginVertical: 10,
                  marginHorizontal: 20,
                }}>
                {quantity}
              </Text>
              <Text
                style={styles.plusMinus}
                onPress={() => setQuantity(quantity + 1)}>
                +
              </Text>
            </View>
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
              onPress={() => {
                const order = {
                  status: orderStatus.PAID,
                  vendorId: props._id,
                  price: quantity * props.price,
                  quantity: quantity,
                  collectFrom: props.openFrom,
                  collectUntil: props.openUntil,
                }
                props.decrementNumLeft({ _id: props._id, decrement: quantity })
                props.insertOrder(order)
                Alert.alert("Pagamento completo!", "Obrigado por seu pedido :)", [{text: 'Nada :)', onPress: () => setVisible(false)}])
              }}
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
          title={'Reservar (' + props.numLeft + ' sobrando)'}
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
  plusMinus: {
    fontSize: 34,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
})

export default connect(mapState, mapDispatch)(OfferDetailView)
