import React from 'react'
import {Text, View} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class ExploreHeader extends React.Component {
    render() {
      return (
        <View>
            <MaterialIcon name='home' size={20}/>
            <Text>Abah Kos</Text>
        </View>
      );
    }
  }