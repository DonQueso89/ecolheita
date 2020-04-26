import React from 'react'
import { Text, View, SectionList, StyleSheet } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { update as updateUser } from '../features/user/userSlice'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'


function ChangeDataItem(title, value, setItem) {
  return <View>
      <TextInput
        value={value}
        onChangeText={text => setItem(text)}
      />
    </View>
}


function UserDataItem({ title, value }) {
  return (
    <ListItem
      titleStyle={{ color: 'black', fontSize: 20 }}
      containerStyle={styles.dataItem}
      title={title}
      rightTitle={<Text numberOfLines={1} style={{overflow: 'visible'}}>{value}</Text>}
      rightIcon={<Ionicons name={"md-create"} size={20}/>}
    />
  )
}

function ProfileView(props) {
  const userData = [
    { title: 'Nome', value: props.username },
    { title: 'Email', value: props.email },
    { title: 'Telefone', value: props.phone },
    { title: 'Estado', value: props.region },
  ]
  const listData = [
    { title: 'Dados pessoais', data: userData },
    { title: 'Configuracao', data: [{ title: 'Notificacoes', value: '' }] },
  ]
  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={({ title }, index) => title + index}
        sections={listData}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({item}) => <UserDataItem {...item} />}
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

const mapDispatch = {
  updateUser: updateUser, // Takes arbitrary object, not nice for V8 optimizer
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
    paddingTop: 20
  },
})

export default connect(mapState, mapDispatch)(ProfileView)
