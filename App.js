
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './src/store'

import HomeScreen from './src/screens/home'


const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  Other: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: `oi`
    })
  },
});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }

}