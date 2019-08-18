import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Card } from 'react-native-paper';

export default class RekomendasiKostItem extends React.Component {
    render() {
      return (
        <TouchableOpacity
            onPress={() => this.props.navigation.push('KostDetail', {item : this.props.item})}
        >
            
            <View style={{
                width: 200,
                borderColor:'transparent',
                borderWidth:2 ,
                borderRadius : 10,
                marginRight : 10,
                marginTop : 5,
                elevation :2,
                
                    }}>
                
                <Text style={{
                    backgroundColor : 'red',
                    borderTopLeftRadius : 10,
                    borderTopRightRadius : 10,
                    textAlign : 'center',
                    color : 'white'

                }}>{this.props.item.kamar}</Text>
                    <Image 
                        style={{width : 196,
                                height : 150,
                                borderBottomLeftRadius : 10,
                                borderBottomRightRadius : 10
                        }}
                        source={this.props.item.img[0].url}/>
                    <View style={{
                        position : 'absolute',
                        //top: 0,
                        left: 0, 
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'black',
                        borderRadius : 10 

                    }
                    }>
                        <View style={{flexDirection: 'row'}}>
                            <Text numberOfLines={1} style={{flex : 1, fontSize : 20}}>{this.props.item.harga}</Text>
                            <Text style={{flexShrink : 1, fontSize : 20, paddingHorizontal:5}}>{this.props.item.jenis}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                        <Text numberOfLines={1} style={{flex : 1, }}>{this.props.item.judul}</Text>
                            <Text style={{flexShrink : 1, paddingHorizontal:5}}>{this.props.item.lokasi}</Text>
                        </View>
                    </View>

            </View>
            
        </TouchableOpacity>
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



