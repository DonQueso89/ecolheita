import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { SearchBar, ListItem, Image, Badge, Icon } from 'react-native-elements'

import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'

function ProfileView(props) {
  return (
    <View>
      <Text>Aqui se pode fazer configuracoes</Text>
    </View>
  )
}

function MiscMainComponent(navItems) {
  return ({ navigation }) => {
    const entries = navItems.map((name) => (
      <ListItem
        title={name}
        onPress={() => navigation.navigate(name)}
        bottomDivider
        topDivider
        chevron
        containerStyle={{ height: 80 }}
        pad={0}
      />
    ))
    return <View style={styles.container}>{entries}</View>
  }
}

function Profile() {
  return (
    <View>
      <Text>Aqui se pode fazer configuracoes</Text>
    </View>
  )
}
function Orders() {
  return (
    <View>
      <Text>Aqui se pode ver uma historia de pedidos e pedir ajuda</Text>
    </View>
  )
}
function Payment() {
  return (
    <View>
      <Text>Aqui se pode configurar meios de pagamento</Text>
    </View>
  )
}
function Legal() {
  return (
    <View>
      <Text>Aqui se pode ver os Termos Gerais de Uso</Text>
    </View>
  )
}
function Support() {
  return (
    <View>
      <Text>Aqui se pode entrar em contato com Ecolheita</Text>
    </View>
  )
}

const MiscStack = createStackNavigator()

function MiscView(props) {
  const navItems = [
    { name: 'Perfil', component: Profile },
    { name: 'Pedidos', component: Orders },
    { name: 'Meios de pagemento', component: Payment },
    { name: 'Termos Gerais', component: Legal },
    { name: 'Ajuda', component: Support },
  ]
  const MiscMain = MiscMainComponent(navItems.map(({ name }) => name))
  const screens = navItems.map((cfg) => <MiscStack.Screen {...cfg} />)
  return (
    <MiscStack.Navigator initialRoute="MiscMain">
      <MiscStack.Screen
        name="MiscMain"
        component={MiscMain}
        options={{ headerShown: false }}
      />
      {screens}
    </MiscStack.Navigator>
  )
}

export default MiscView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa5',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 380,
    height: 80,
  },
  titleText: {
    fontSize: 20,
  },
  navButton: {
    backgroundColor: '#a50',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 20,
  },
  tab: {
    fontSize: 50,
  },
})
