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
    harga: 500000,
    deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {  img : require('../../asset/jakarta.jpg'),
    judul : 'Kost Abah Jl.Kenangan Yang Lama Hilang',
    jenis: 'Putri',
    kamar: 'Penuh',
    lokasi: 'Cileunyi',
    harga: 'Rp 1.000.000/bulan',
    deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
    },
    {  img : require('../../asset/surabaya.jpg'),
    judul : 'Kost Abah Eman',
    jenis: 'Campur',
    kamar: 'Tinggal 10 Kamar',
    lokasi: 'Cibiru',
    harga: 'Rp 500.000/bulan',
    deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
    },
    {  img : require('../../asset/malang.jpg'),
    judul : 'Kost Abah Maman',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cikoneng',
    harga: 'Rp 1.200.300/bulan',
    deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
    },
    {  img : require('../../asset/yogyakarta.jpg'),
    judul : 'Kost Abah Udin',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Ciherang',
    harga: 'Rp 1.000/bulan',
    deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
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
            <View style={{padding : 10}}>  
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