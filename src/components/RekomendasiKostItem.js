import React from 'react'
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {  } from 'react-native-gesture-handler';

export default class RekomendasiKostItem extends React.Component {
    render() {
      return (
        <TouchableHighlight
            onPress={() => this.props.navigation.navigate('KostDetail')}
        >
            <View style={{
                width: 100,
                borderColor:'silver',
                borderWidth:1 ,
                borderRadius : 5
                    }}>
                <Text>{this.props.item.kamar}</Text>
                    <Image 
                        style={{width : 98,
                                height : 150
                        }}
                        source={this.props.item.img}/>
                    <View style={{
                        position : 'absolute',
                        //top: 0,
                        left: 0, 
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'black' 

                    }
                    }>
                        <View style={{flexDirection: 'row'}}>
                            <Text numberOfLines={1} style={{flex : 1}}>{this.props.item.harga}</Text>
                            <Text style={{flex : 1}}>{this.props.item.jenis}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                        <Text numberOfLines={1} style={{flex : 1}}>{this.props.item.judul}</Text>
                            <Text style={{flex : 1}}>{this.props.item.lokasi}</Text>
                        </View>
                    </View>

            </View>
        </TouchableHighlight>
      );
    }
  }
  const styles = StyleSheet.create({
    img : {
        width : 350,
        //flex : 1,
        height : 200,
        marginHorizontal : 10
    },
    listContainer:{
        margin : 10,
        height : 300,
        //width : width,
        paddingBottom : 20
    },
    detailContainer:{
        paddingVertical : 5,
        //width : width,
        flexDirection : 'row'
    },
    textHarga:{
        fontWeight : 'bold',
        fontSize : 20,
        color : 'black'
    },
    textJudul:{
        fontWeight : '100',
        fontSize : 15,
        color : 'black'
    }
    
})



