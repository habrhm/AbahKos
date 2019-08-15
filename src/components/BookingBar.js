import React from 'react'
import {Text, View, Button} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {Appbar} from 'react-native-paper'

import NavigationServices from '../../NavigationServices'

export default class BookingBar extends React.Component {
    render() {
      return (
        <View style={{
            flexDirection : 'row',
            alignContent : 'space-between'
        }}>
            <View >
                <Text>
                    Rp. 1200.0000 
                </Text>
            </View>
            <View>
                <Button title ={'Booking'} onPress={() => {NavigationServices.navigate('BookingKost', {}) }}/>
            </View>
            
        </View>
      );
    }
  }