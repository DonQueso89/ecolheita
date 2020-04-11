import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from './src/components/HomeView.jsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import store from './src/store'

const Tab = createBottomTabNavigator()

function OrdersView() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: '#000' }}>
        Aqui se pode ver as lojas e procurar cestas
      </Text>
    </View>
  )
}

function ProfileView() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: '#000' }}>
        Aqui se pode configurar o perfil do usuario
      </Text>
    </View>
  )
}

function MapView() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: '#000' }}>
        Aqui se pode ver as lojas guardadas como favorito
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ImageBackground
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'black',
            activeBackgroundColor: 'lightgray',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeView}
            options={{
              title: 'Inicio',
              tabBarIcon: () => <Ionicons name="md-home" size={30} />,
            }}
          />
          <Tab.Screen
            name="Search"
            component={MapView}
            options={{
              title: 'Busca',
              tabBarIcon: () => <Ionicons name="md-search" size={30} />,
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersView}
            options={{
              title: 'Pedidos',
              tabBarIcon: () => <Ionicons name="md-basket" size={30} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileView}
            options={{
              title: 'Perfil',
              tabBarIcon: () => <Ionicons name="md-options" size={30} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

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
