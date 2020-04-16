import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { Divider, Button } from 'react-native-elements'
import {
  toggleMealsFilter,
  toggleGroceriesFilter,
  togglePastryFilter,
  toggleTodayFilter,
} from '../features/filters/filterSlice'

function FilterToggler({ isActive, title, iconName, toggleFunc }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: isActive ? '#282' : null,
        marginHorizontal: 10,
      }}
      onPress={() => toggleFunc()}>
      <Text textAlign="center">{title}</Text>
      <Ionicons name="md-restaurant" size={40} />
    </TouchableOpacity>
  )
}

function GlobalFilterModal({ navigation }) {
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const dispatch = useDispatch()
  const setMealsFilter = () => dispatch(toggleMealsFilter())
  const setGroceriesFilter = () => dispatch(toggleGroceriesFilter())
  const setPastryFilter = () => dispatch(togglePastryFilter())
  const toggleTodayFilter = () => dispatch(toggleTodayFilter())

  const groceriesFilter = useSelector((state) => state.filters.groceriesFilter)
  const pastryFilter = useSelector((state) => state.filters.pastryFilter)
  const mealsFilter = useSelector((state) => state.filters.mealsFilter)
  const todayFilter = useSelector((state) => state.filters.todayFilter)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <View style={styles.filtersContainer}>
        <View style={Object.assign({ flex: 1 }, styles.filterHeaderContainer)}>
          <Text style={{ fontSize: 25 }}>Filtros</Text>
          <Ionicons
            name="md-backspace"
            size={32}
            color="green"
            style={{ left: '400%' }}
            onPress={() => navigation.goBack()}
          />
          <Divider style={{ backgroundColor: '#282', height: 1 }} />
        </View>
        <View style={Object.assign({ flex: 3 }, styles.filterContainer)}>
          <Text style={{ fontSize: 15, marginHorizontal: 10 }}>
            Somente mostra cestas para hoje
          </Text>
          <Switch
            trackColor={{ false: '#282', true: '#fa5' }}
            thumbColor={todayFilter ? '#282' : '#fa5'}
            ios_backgroundColor={todayFilter ? '#fa5' : '#282'}
            onValueChange={toggleTodayFilter}
            value={todayFilter}
            style={{ borderWidth: 1 }}
          />
        </View>
        <View style={Object.assign({ flex: 3 }, styles.filterContainer)}>
          <Text style={{ fontSize: 25 }}>Horario de coleta</Text>
        </View>
        <View style={Object.assign({ flex: 3 }, styles.filterContainer)}>
          <FilterToggler
            isActive={mealsFilter}
            toggleFunc={setMealsFilter}
            title="Pratos completos"
            iconName="md-restaurant"
          />
          <FilterToggler
            isActive={pastryFilter}
            toggleFunc={setPastryFilter}
            title="Paes e doces"
            iconName="md-pie"
          />
          <FilterToggler
            isActive={groceriesFilter}
            toggleFunc={setGroceriesFilter}
            title="Compras"
            iconName="md-basket"
          />
        </View>
        <View style={Object.assign({ flex: 3 }, styles.filterContainer)}>
          <Text style={{ fontSize: 25 }}>Preferencias dietarias</Text>
        </View>
        <View style={Object.assign({ flex: 2 }, styles.filterContainer)}>
          <Button
            title="Confirma"
            type="outline"
            raised
            buttonStyle={{ backgroundColor: '#282' }}
            titleStyle={{ color: '#fff' }}
          />
        </View>
      </View>
    </View>
  )
}

export default GlobalFilterModal

const styles = StyleSheet.create({
  filtersContainer: {
    height: '80%',
    width: '95%',
    backgroundColor: '#fa5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  filterHeaderContainer: {
    height: '80%',
    width: '95%',
    backgroundColor: '#fa5',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  filterContainer: {
    height: '80%',
    width: '95%',
    backgroundColor: '#fa5',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: 1,
  },
})
