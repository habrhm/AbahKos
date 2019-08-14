import React, {Component} from 'react'
import {View, Text, StyleSheet, Image,  FlatList,} from 'react-native'

import KostListItem from '../components/KostListItem'

//const {height, width} = Dimensions.get('window');

const data = [
    {  img : require('../../asset/bandung.jpg'),
     judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
     jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    },
    {  img : require('../../asset/jakarta.jpg'),
    judul : 'Kost Abah Jl.Kenangan Yang Lama Hilang',
    jenis: 'Putri',
    kamar: 'Penuh',
    lokasi: 'Cileunyi',
    harga: 'Rp 1.000.000/bulan',
    },
    {  img : require('../../asset/bandung.jpg'),
    judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    },
    {  img : require('../../asset/bandung.jpg'),
    judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    },
    {  img : require('../../asset/bandung.jpg'),
    judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    },
  ];

 class List extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data:data
        };
      }
     
    render(){
        return(
            <View>  
            <FlatList    
                keyExtractor={(item) =>  item.title }
                data = {this.state.data}
                renderItem={({item }) => 
                {
                return( 
                    <KostListItem item={item} navigation={this.props.navigation}/>                                 
                // <View style = {styles.listContainer}>
                //     <Image 
                //         source={rowData.img} 
                //         style={styles.img}
                //     />
                //     <View style={styles.detailContainer}>
                //         <Text
                //             style={{color : 'red'}}
                //         >{rowData.jenis}  </Text>
                //         <Text
                //             style={{color : 'red'}}
                //         >{rowData.kamar}  </Text>
                //         <Text
                //             style={{color : 'black'}}
                //         >{rowData.lokasi}</Text>
                //     </View>
                //     <Text
                //             style={styles.textHarga}
                //         >{rowData.harga}</Text>
                //     <Text
                //             style={styles.textJudul}
                //         >{rowData.judul}</Text>
    
                // </View>
                
                
                )}} />

                </View>
            
        )
    }

}
export default List

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