import React, { useState } from 'react'
import { Text, View, SectionList, StyleSheet, Switch } from 'react-native'
import { Button, ListItem, Input, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { update as updateUser } from '../features/user/userSlice'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { partial } from 'ramda'

function EditDataView({ navigation, route, updateUser }) {
  const [value, updateLocalValue] = useState(route.params.value)
  return (
    <View style={styles.dataEditorStyle}>
      <Input
        value={value}
        onChangeText={(text) => updateLocalValue(text)}
        containerStyle={styles.dataEditorInputStyle}
        placeholder={'Entra seu ' + route.params.key}
        rightIcon={
          <Ionicons
            name="md-checkmark-circle-outline"
            size={24}
            style={{ color: '#282' }}
            onPress={() => {
              updateUser({ [route.params.key]: value })
              navigation.goBack()
            }}
          />
        }
      />
    </View>
  )
}

function EditNotificationsView({ navigation, route, updateUser }) {
  const [value, updateLocalValue] = useState(route.params.value)
  return (
    <View style={styles.notificationsEditorStyle}>
      <Text
        style={{ marginVertical: 20, marginLeft: 10, fontSize: 15, flex: 8 }}>
        Push notifications permitidos
      </Text>
      <Switch
        value={value}
        onValueChange={updateLocalValue}
        style={{ flex: 2, marginVertical: 20 }}
      />
      <Ionicons
        name="md-checkmark-circle-outline"
        size={24}
        style={{ color: '#282', flex: 1, margin: 20, paddingLeft: 5 }}
        onPress={() => {
          updateUser({ [route.params.key]: value })
          navigation.goBack()
        }}
      />
    </View>
  )
}

const mapDispatch = {
  updateUser: updateUser, // Takes arbitrary object, not nice for V8 optimizer
}

const ConnectedEditDataView = connect(null, mapDispatch)(EditDataView)
const ConnectedEditNotificationsView = connect(
  null,
  mapDispatch
)(EditNotificationsView)

function UserDataItem({ title, value, goToEditor }) {
  return (
    <ListItem
      titleStyle={{ color: 'black', fontSize: 20 }}
      containerStyle={styles.dataItem}
      title={title}
      rightTitle={
        <Text numberOfLines={1} style={{ overflow: 'visible' }}>
          {value}
        </Text>
      }
      rightIcon={<Ionicons name={'md-create'} size={20} onPress={goToEditor} />}
    />
  )
}

const ProfileStackNavigator = createStackNavigator()

function ProfileMainView({ navigation, ...props }) {
  const navToEdit = partial(navigation.navigate, ['EditDataView'])
  const userData = [
    {
      title: 'Nome',
      value: props.username,
      goToEditor: () => navToEdit({ key: 'username', value: props.username }),
    },
    {
      title: 'Email',
      value: props.email,
      goToEditor: () => navToEdit({ key: 'email', value: props.email }),
    },
    {
      title: 'Telefone',
      value: props.phone,
      goToEditor: () => navToEdit({ key: 'phone', value: props.phone }),
    },
    {
      title: 'Estado',
      value: props.region,
      goToEditor: () => navToEdit({ key: 'region', value: props.region }),
    },
  ]
  const listData = [
    { title: 'Dados pessoais', data: userData },
    {
      title: 'Configuracao',
      data: [
        {
          title: 'Notificacoes',
          value: props.allowPushNotifications,
          goToEditor: () =>
            navigation.navigate('EditNotificationsView', {
              key: 'allowPushNotifications',
              value: props.allowPushNotifications,
            }),
        },
      ],
    },
  ]
  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={({ title }, index) => title + index}
        sections={listData}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => <UserDataItem {...item} />}
      />
      <Button
        buttonStyle={{
          backgroundColor: '#ff3333',
          borderRadius: 10,
          margin: 10,
        }}
        title={'Encerrar sessao'}
      />
    </View>
  )
}

const mapState = (state) => {
  return state.user
}

const ConnectedProfileMainView = connect(mapState)(ProfileMainView)

function ProfileStackScreen() {
  return (
    <ProfileStackNavigator.Navigator
      initialRouteName="ProfileMainView"
      mode="modal"
      screenOptions={{
        headerTintColor: '#282',
        headerStyle: styles.navHeaderStyle,
        headerBackTitleVisible: false,
        headerTitleStyle: styles.navHeaderTitleStyle,
      }}>
      <ProfileStackNavigator.Screen
        name="ProfileMainView"
        component={ConnectedProfileMainView}
        options={{ headerShown: false }}
      />
      <ProfileStackNavigator.Screen
        name="EditDataView"
        component={ConnectedEditDataView}
      />
      <ProfileStackNavigator.Screen
        name="EditNotificationsView"
        component={ConnectedEditNotificationsView}
      />
    </ProfileStackNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
  dataItem: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#eee',
    borderTopWidth: 1,
  },
  container: {
    backgroundColor: '#fa5',
    flex: 1,
    flexDirection: 'column',
  },
  sectionHeader: {
    fontSize: 26,
    backgroundColor: '#eee',
    padding: 10,
    paddingTop: 20,
  },
  navHeaderStyle: {
    backgroundColor: '#fa5',
  },
  navHeaderTitleStyle: {
    color: '#000',
  },
  dataEditorStyle: {
    flex: 1,
    alignItems: 'center',
  },
  notificationsEditorStyle: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dataEditorInputStyle: {
    flex: 9,
    padding: 30,
  },
})

export default ProfileStackScreen
