import React , {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
const facilities = [
    {
        name : 'AC',
        icon : 'md-thermometer',
    },
    {
        name : 'Wifi - Internet',
        icon : 'md-wifi',
       
    },
    {
        name : 'Kasur',
        icon : 'md-bed',
        
    },
    {
        name : 'TV',
        icon : 'md-tv',
       
    },
    {
        name : 'Kamar Mandi Dalam',
        icon  : 'md-rainy',
       
    },
    {
        name : 'Dapur',
        icon  : 'md-restaurant',
        
    },
    {
        name : 'Dispenser',
        icon : 'md-water',
    }

]
export default class Fasilitas extends Component{
    
    render(){

        const selectedFacilities = facilities.filter((data) => (
            data.name === this.props.name
        ))
        return(
        <View style={styles.facilities}>
            <Ionicon name={selectedFacilities[0].icon} color='#43A047' size = {30} style={{margin : 5}} />
            <Text>
                {this.props.name}
            </Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    facilities :{
        alignItems:'center',
        marginHorizontal : 15,
    }
} )
