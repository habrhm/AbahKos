import React from 'react'
import {View, StyleSheet, Image, TouchableHighlight,} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'


export default class KostListItem extends React.Component {
    render() {
      return (
        
        <TouchableHighlight
            onPress={() => this.props.navigation.navigate('KostDetail')}
        >
            <Card>
                <CardItem cardBody>
                <Image source={this.props.item.img} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <Text
                    style={{
                        margin : 5,
                        marginLeft : 10,
                        fontSize : 20,
                        fontWeight : 'bold'
                    }}
                >{this.props.item.judul}</Text>
                    
                <View style={{
                        margin : 5,
                        marginLeft : 10,
                        flexDirection : 'row'
                        //fontSize : 20,
                        //fontWeight : 'bold'
                    }}>
                    <Text
                    >{this.props.item.jenis}</Text>
                    <Text style={{fontWeight : 'bold'}}  
                    > | </Text>
                    <Text   
                    >{this.props.item.kamar}</Text>
                    <Text style={{fontWeight : 'bold'}}   
                    > | </Text>
                    <Text
                    >{this.props.item.lokasi}</Text>
                </View>
                <Text
                    style={{
                        margin : 5,
                        marginLeft : 10,
                        fontSize : 17,
                        fontWeight : 'bold',
                        color : 'green'
                    }}
                >{this.props.item.harga}</Text>
                
              
            </Card>
        {/* <View style = {styles.listContainer}>
            <Image 
                source={this.props.item.img} 
                style={styles.img}
            />
            <View style={styles.detailContainer}>
                <Text
                    style={{color : 'red'}}
                >{this.props.item.jenis}  </Text>
                <Text
                    style={{color : 'red'}}
                >{this.props.item.kamar}  </Text>
                <Text
                    style={{color : 'black'}}
                >{this.props.item.lokasi}</Text>
            </View>
            <Text
                    style={styles.textHarga}
                >{this.props.item.harga}</Text>
            <Text
                    style={styles.textJudul}
                >{this.props.item.judul}</Text>

        </View> */}
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

