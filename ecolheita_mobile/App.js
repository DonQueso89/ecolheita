import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from './src/containers/HomeView'
import MiscView from './src/containers/MiscView'
//import MapView from './src/containers/MapView'
import FavoritesView from './src/containers/FavoritesView'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import store from './src/store'
import GlobalFilterModal from './src/containers/GlobalFilterView'

const HomeNavTab = createBottomTabNavigator()

function MainTabScreen() {
  return (
    <HomeNavTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
        activeBackgroundColor: 'lightgray',
      }}>
      <HomeNavTab.Screen
        name="Home"
        component={HomeView}
        options={{
          title: 'Inicio',
          tabBarIcon: () => <Ionicons name="md-home" size={30} />,
        }}
      />
      <HomeNavTab.Screen
        name="Map"
        component={HomeView}
        options={{
          title: 'Mapa',
          tabBarIcon: () => <Ionicons name="md-map" size={30} />,
        }}
      />
      <HomeNavTab.Screen
        name="Favorites"
        component={FavoritesView}
        options={{
          title: 'Favoritos',
          tabBarIcon: () => <Ionicons name="md-heart" size={30} />,
        }}
      />
      <HomeNavTab.Screen
        name="Misc"
        component={MiscView}
        options={{
          title: 'Perfil',
          tabBarIcon: () => <Ionicons name="md-options" size={30} />,
        }}
      />
    </HomeNavTab.Navigator>
  )
}

const RootStack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ImageBackground
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <RootStack.Navigator
          mode="modal"
          initialRouteName="Main"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fa5',
            },
            headerTintColor: '#282',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
            cardStyle: {
              backgroundColor: 'transparent',
              opacity: 0.9,
            },
          }}>
          <RootStack.Screen
            name="Main"
            component={MainTabScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="GlobalFilterModal"
            component={GlobalFilterModal} // Nested navigate actions bubble up here
            options={{ title: 'Filtros' }}
          />
        </RootStack.Navigator>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
