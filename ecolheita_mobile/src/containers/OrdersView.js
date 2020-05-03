import React, { useState } from 'react'
import { connect } from 'react-redux'
import { orderStatus } from '../constants'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ButtonGroup, ListItem } from 'react-native-elements'

const mapState = (state) => {
  const vendorLookup = {}
  for (const vendor of state.vendors.data) {
    vendorLookup[vendor._id] = vendor
  }
  const orders = state.orders.data.map((x) => Object.assign({}, x))

  return {
    orders: orders.map((order) =>
      Object.assign(order, vendorLookup[order.vendorId])
    ),
  }
}

function OrderListItem({ collected, ...props }) {
  const txt = collected
    ? 'coletado em 2020-01-02'
    : `coleta hoje entre ${props.openFrom} e ${props.openUntil}`
  return (
    <ListItem
      topDivider
      containerStyle={styles.listItemStyle}
      title={props.name}
      subtitle={
        <>
          <Text>quantidade {props.quantity}</Text>
          <Text>preco {props.price}</Text>
          <Text style={{ color: '#282' }}>{txt}</Text>
        </>
      }
    />
  )
}

function EmptyListView() {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={{flex: 1, fontSize: 18, marginVertical: 40}}>Nao achamos nenhum pedido</Text>
    </View>
  )
}

function OrdersView({ orders }) {
  const [statusQuery, setStatusQuery] = useState(orderStatus.PAID)
  const visibleOrders = orders.filter((x) => x.status == statusQuery)
  return (
    <View style={styles.listContainer}>
      <ButtonGroup
        onPress={setStatusQuery}
        selectedIndex={statusQuery == orderStatus.PAID ? 0 : 1}
        buttons={['Pagos', 'Coletados']}
        containerStyle={styles.querySelectorStyle}
        buttonStyle={styles.querySelectorButtonStyle}
        selectedButtonStyle={styles.querySelectorSelectedButtonStyle}
      />
      <View style={{ flex: 10 }}>
        <FlatList
          data={visibleOrders}
          renderItem={({ item }) => <OrderListItem collected={statusQuery == orderStatus.COLLECTED} {...item} />}
          keyExtractor={(item) => item._id.toString()}
          style={styles.listStyle}
          ListEmptyComponent={EmptyListView}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fa5',
  },
  emptyListContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fa5',
  },
  querySelectorStyle: {
    flex: 1,
    backgroundColor: '#fa5',
    borderRadius: 10,
  },
  querySelectorButtonStyle: {
    backgroundColor: '#fa5',
    elevation: 5,
  },
  querySelectorSelectedButtonStyle: {
    backgroundColor: '#282',
  },
  listStyle: {
    flex: 9,
  },
  listItemStyle: {
    flex: 1,
    height: 90,
    width: 1280,
  },
})

export default connect(mapState)(OrdersView)
