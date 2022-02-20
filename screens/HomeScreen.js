import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { auth, InitializeFirestore, userSetDoc} from '../firebase'
import { makeSelectUserInfo, makeSelectUserTodoList } from '../selectors/user';
import { setUserInfo } from '../actions/user';
import HomeItems from '../components/homeItems';

let HomeScreen = (props) => {

  const {dispatch, userTodoList, userInfo} = props

  useEffect(()=>{
    InitializeFirestore(dispatch)
  },[])

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const onPressDedux = () => {
    console.log(props);
    userSetDoc(
      userTodoList
    )
  }

  console.log(userTodoList);

  return (
    <View style={styles.container}>
      <HomeItems
        dispatch={dispatch}
        userTodoList={userTodoList}
        userInfo={userInfo}
      />
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={onPressDedux}
        style={[styles.button, styles.buttonRed]}
      >
        <Text style={styles.buttonText}>Redux log</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectUserInfo(),
  userTodoList: makeSelectUserTodoList(),
});

HomeScreen = connect(
  mapStateToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default HomeScreen