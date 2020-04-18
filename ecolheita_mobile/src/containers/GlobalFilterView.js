import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import {
  setMealsFilter,
  setGroceriesFilter,
  setPastryFilter,
  setTodayFilter,
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
      onPress={() => toggleFunc(!isActive)}>
      <Text textAlign="center">{title}</Text>
      <Ionicons name="md-restaurant" size={40} />
    </TouchableOpacity>
  )
}

function GlobalFilterModal(props) {
  const { groceriesFilter, todayFilter, mealsFilter, pastryFilter } = props
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
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={Object.assign({ flex: 3 }, styles.filterContainer)}>
          <Text style={{ fontSize: 15, marginHorizontal: 10 }}>
            Somente mostra ofertas para hoje
          </Text>
          <Switch
            trackColor={{ false: '#282', true: '#fa5' }}
            thumbColor={todayFilter ? '#282' : '#fa5'}
            ios_backgroundColor={todayFilter ? '#fa5' : '#282'}
            onValueChange={props.setTodayFilter}
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
            toggleFunc={props.setMealsFilter}
            title="Pratos completos"
            iconName="md-restaurant"
          />
          <FilterToggler
            isActive={pastryFilter}
            toggleFunc={props.setPastryFilter}
            title="Paes e doces"
            iconName="md-pie"
          />
          <FilterToggler
            isActive={groceriesFilter}
            toggleFunc={props.setGroceriesFilter}
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

const mapState = (state) => {
  const {
    groceriesFilter,
    todayFilter,
    mealsFilter,
    pastryFilter,
  } = state.filters
  return {
    groceriesFilter: groceriesFilter,
    pastryFilter: pastryFilter,
    mealsFilter: mealsFilter,
    todayFilter: todayFilter,
  }
}

const mapDispatch = {
    setGroceriesFilter: setGroceriesFilter,
    setPastryFilter: setPastryFilter,
    setMealsFilter: setMealsFilter,
    setTodayFilter: setTodayFilter,
}


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

export default connect(mapState, mapDispatch)(GlobalFilterModal)