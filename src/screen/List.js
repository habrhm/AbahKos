import React, {Component} from 'react'
import {View, Text, StyleSheet, Image,  FlatList,} from 'react-native'
import {Container, Content} from 'native-base'

import KostListItem from '../components/KostListItem'
import GoBackHeader from '../components/GoBackHeader'


//const {height, width} = Dimensions.get('window');

const data = [
    {
        id : '1',  
        img : [ 
            {url :  require('../../asset/kost1-1.jpg')},
            {url : require('../../asset/kost1-2.jpg')},
            {url : require('../../asset/kost1-3.jpg')},
        ],
        judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
        jenis: 'Putra',
        kamar: 'Tinggal 2 Kamar',
        lokasi: 'Cileungsi',
        harga: 500000,
        latitude: -6.90389, 
        longitude: 107.61861,
        deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {  
        id : '2',
        img : [ 
            { url : require('../../asset/kost2-1.jpg')},
            { url : require('../../asset/kost2-2.jpg')},

        ],
        judul : 'Kost Abah Jl.Kenangan Yang Lama Hilang',
        jenis: 'Putri',
        kamar: 'Penuh',
        lokasi: 'Cileunyi',
        latitude: -6.117664, 
        longitude: 106.906349,
        harga: 'Rp 1.000.000/bulan',
        deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
    },
    {  
        id : '3',
        img : [ 
            { url : require('../../asset/kost3-1.jpg')},
            {url : require('../../asset/kost3-2.jpg')},
            { url : require('../../asset/kost3-3.jpg')},
            { url : require('../../asset/kost3-4.jpg')},
        ],
        judul : 'Kost Abah Eman',
        jenis: 'Campur',
        kamar: 'Tinggal 10 Kamar',
        lokasi: 'Cibiru',
        harga: 'Rp 500.000/bulan',
        latitude: -6.90389, 
        longitude: 107.61861,
        deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
    },
    {  
        id : '4',
        img : [ 
            { url : require('../../asset/kost4-1.jpg')},
            { url : require('../../asset/kost4-2.jpg')},
            { url : require('../../asset/kost4-3.jpg')},
        ],
        judul : 'Kost Abah Maman',
        jenis: 'Putra',
        kamar: 'Tinggal 2 Kamar',
        lokasi: 'Cikoneng',
        harga: 'Rp 1.200.300/bulan',
        latitude: -6.90389, 
        longitude: 107.61861,
        deskripsi :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum',
   
    },
    {  
        id : '5',
        img : [ 
            { url : require('../../asset/kost5-1.jpg')},
            { url : require('../../asset/kost5-2.jpg')},
            { url : require('../../asset/kost5-3.jpg')},
        ],  
        judul : 'Kost Abah Udin',
        jenis: 'Putra',
        kamar: 'Tinggal 2 Kamar',
        lokasi: 'Ciherang',
        harga: 'Rp 1.000/bulan',
        latitude: -6.90389, 
        longitude: 107.61861,
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
            <Container >
                <GoBackHeader navigation={this.props.navigation} />  
                <Content style={{padding : 10}}>
                <FlatList    
                keyExtractor={(item) =>  item.id}
                data = {this.state.data}
                renderItem={({item }) => 
                {
                return( 
                    <KostListItem  key={item.id} item={item} navigation={this.props.navigation}/>                                 
                )}} />
                </Content>
                </Container>
            
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