import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Screens from './screens/Screens'
import store from './Redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Screens></Screens>
    </Provider>
  )
}

const styles = StyleSheet.create({})