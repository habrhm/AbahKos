import React , {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class Fasilitas extends Component{
    render(){
        return(
        <View style={styles.fasiltas}>
            <Ionicon name={this.props.icon} color='#43A047' size = {30} style={{margin : 5}} />
            <Text>
                {this.props.name}
            </Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    fasiltas :{
        alignItems:'center',
        marginHorizontal : 15,
    }
} )
