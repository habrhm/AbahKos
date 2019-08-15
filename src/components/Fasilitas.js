import React , {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class Fasilitas extends Component{
    render(){
        return(
        <View style={styles.fasiltas}>
            <MaterialIcon name={this.props.icon} color='green' size = {30} style={{margin : 5}} />
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
