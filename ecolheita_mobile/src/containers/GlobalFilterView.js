import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { Button, ButtonGroup, Slider } from 'react-native-elements'
import {
  setMealsFilter,
  setGroceriesFilter,
  setPastryFilter,
  setTodayFilter,
  setDiet,
  setStartTime,
  setEndTime,
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
      <Ionicons name={iconName} size={40} />
    </TouchableOpacity>
  )
}

function TimeSlider({ setTime, timeValue, extraLabel }) {
  const minutes = timeValue * 15
  const timeString =
    String(Math.floor(minutes / 60)).padStart(2, '0') +
    ':' +
    String(minutes % 60).padStart(2, '0')
  const [localValue, setLocalValue] = useState(timeValue)
  return (
    <>
      <Slider
        minimumValue={0}
        maximumValue={96}
        onValueChange={setLocalValue}
        onSlidingComplete={setTime}
        value={localValue}
        style={styles.timeSlider}
        step={1}
        trackStyle={styles.timeSliderTrackStyle}
        thumbStyle={{backgroundColor: "#282", borderColor: "#fa5", borderWidth: 1}}
      />
      <Text style={{bottom: 10}}>{(extraLabel || "") + (extraLabel ? ": " : "") + timeString}</Text>
    </>
  )
}

function GlobalFilterModal(props) {
  const {
    diet,
    groceriesFilter,
    todayFilter,
    mealsFilter,
    pastryFilter,
  } = props
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
            style={{ left: 120 }}
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={Object.assign({ flex: 1 }, styles.filterContainer)}>
          <Switch
            trackColor={{ false: '#282', true: '#fa5' }}
            thumbColor={todayFilter ? '#282' : '#fa5'}
            ios_backgroundColor={todayFilter ? '#fa5' : '#282'}
            onValueChange={props.setTodayFilter}
            value={todayFilter}
            style={{ borderWidth: 1 }}
          />
          <Text style={{ fontSize: 15, marginHorizontal: 10 }}>
            Somente mostra ofertas para hoje
          </Text>
        </View>
        <View style={Object.assign({ flex: 3 }, styles.sliderFilterContainer)}>
          <TimeSlider setTime={props.setStartTime} timeValue={props.startTime} extraLabel={"Inicio de coleta"}/>
          <TimeSlider setTime={props.setEndTime} timeValue={props.endTime} extraLabel={"Fim de coleta"} />
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
          <ButtonGroup
            buttons={['Tudo', 'Vegetariano', 'Vegano']}
            selectedIndex={diet}
            onPress={props.setDiet}
            width={'85%'}
            height={'80%'}
            containerBorderRadius={10}
            containerStyle={{
              backgroundColor: '#fa5',
              borderColor: '#000',
            }}
            innerBorderStyle={{ color: '#000' }}
            textStyle={{ color: '#000' }}
            selectedTextStyle={{ color: '#000' }}
            selectedButtonStyle={{ backgroundColor: '#282' }}
          />
        </View>
        <View style={Object.assign({ flex: 2 }, styles.filterContainer)}>
          <Button
            title="Confirma"
            type="outline"
            raised
            buttonStyle={{ backgroundColor: '#282' }}
            titleStyle={{ color: '#000' }}
            containerStyle={{ width: '80%' }}
            onPress={props.navigation.goBack}
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
    diet,
    startTime,
    endTime,
  } = state.filters
  return {
    groceriesFilter: groceriesFilter,
    pastryFilter: pastryFilter,
    mealsFilter: mealsFilter,
    todayFilter: todayFilter,
    diet: diet,
    startTime: startTime,
    endTime: endTime
  }
}

const mapDispatch = {
  setGroceriesFilter: setGroceriesFilter,
  setPastryFilter: setPastryFilter,
  setMealsFilter: setMealsFilter,
  setTodayFilter: setTodayFilter,
  setDiet: setDiet,
  setStartTime: setStartTime,
  setEndTime: setEndTime,
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
  sliderFilterContainer: {
    height: '80%',
    width: '95%',
    backgroundColor: '#fa5',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  timeSlider: {
    width: "100%",
  },
  timeSliderTrackStyle: {
    backgroundColor: "#282",
    borderWidth: 1,
    height: 10,
    borderRadius: 10,
  }

})

export default connect(mapState, mapDispatch)(GlobalFilterModal)