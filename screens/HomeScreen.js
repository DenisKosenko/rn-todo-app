import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserInfo } from '../selectors/user';
import { setUserInfo } from '../actions/user';

let HomeScreen = (props) => {
  const navigation = useNavigation()
  const [a, setA] = useState(null)

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
    props.dispatch(setUserInfo('aaa'))
    setA('aaa')
  }

  console.log(props.userInfo);

  return (
    <View style={styles.container}>
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
  userInfo: makeSelectUserInfo()
});

HomeScreen = connect(
  mapStateToProps
)(HomeScreen);

export default HomeScreen

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
