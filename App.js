import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import fbscreen from './screens/fb';
import inscreen from './screens/in';

export default class App extends  React.Component{
render(){
  return(
  
  
    <Appcont/>
  
  )
}
}


const navigate =createBottomTabNavigator({
  facebook:{screen:fbscreen},
  instagram:{screen:inscreen}
  })
  
  
  const Appcont =createAppContainer(
    navigate
  )
  


