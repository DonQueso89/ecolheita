import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SearchBar, ListItem, Image, Badge, Icon } from 'react-native-elements'

import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import ProfileView from '../components/Profile'


function MiscMainComponent(navItemConfigs) {
  return ({ navigation }) => {
    const entries = navItemConfigs.map(({ name, iconName }, index) => (
      <ListItem
        key={index}
        title={name}
        onPress={() => navigation.navigate(name)}
        bottomDivider
        topDivider
        chevron
        containerStyle={{ height: 80 }}
        pad={20}
        leftIcon={<Ionicons name={iconName} size={25}/>}
        containerStyle={{backgroundColor: "#f5f5f5",height: 100}}
        titleStyle={{fontSize: 20}}
      />
    ))
    return <View style={styles.container}>{entries}</View>
  }
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

const navItemConfigs = [
  { name: 'Perfil', component: ProfileView, iconName: "md-person" },
  { name: 'Pedidos', component: Orders, iconName: "md-clipboard" },
  { name: 'Meios de pagemento', component: Payment, iconName: "ios-cash" },
  { name: 'Termos Gerais', component: Legal, iconName: "md-information-circle" },
  { name: 'Ajuda', component: Support, iconName: "md-help" },
]

const MiscStack = createStackNavigator()

function MiscView(props) {
  const MiscMain = MiscMainComponent(navItemConfigs)
  const screens = navItemConfigs.map((cfg, idx) => <MiscStack.Screen {...cfg} key={idx} />)
  screens.push(
      <MiscStack.Screen
        name="MiscMain"
        component={MiscMain}
        options={{ headerShown: false }}
        key={screens.length}
  />)
  return (
    <MiscStack.Navigator initialRouteName="MiscMain">
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
