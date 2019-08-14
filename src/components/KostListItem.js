import React from 'react'
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {  } from 'react-native-gesture-handler';

export default class KostListItem extends React.Component {
    render() {
      return (
        <TouchableHighlight
            onPress={() => this.props.navigation.navigate('KostListDetail')}
        >
        <View style = {styles.listContainer}>
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

