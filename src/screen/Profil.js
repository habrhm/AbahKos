// import React, {Component } from 'react'
// import {View} from 'react-native'
// import {Container, Title, Content, Header, Left, Right, Body, Text, Button, Icon} from 'native-base'
// import ParallaxScrollView from 'react-native-parallax-scroll-view';

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage'
import { Button } from 'native-base';

// Data

// const data = [
//     {  img : require('../../asset/bandung.jpg'),
//      judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
//      jenis: 'Putra',
//     kamar: 'Tinggal 2 Kamar',
//     lokasi: 'Cileungsi',
//     harga: 'Rp 500.000/bulan',
//     },
//     {  img : require('../../asset/jakarta.jpg'),
//     judul : 'Kost Abah Jl.Kenangan Yang Lama Hilang',
//     jenis: 'Putri',
//     kamar: 'Penuh',
//     lokasi: 'Cileunyi',
//     harga: 'Rp 1.000.000/bulan',
//     },
//     {  img : require('../../asset/bandung.jpg'),
//     judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
//     jenis: 'Putra',
//     kamar: 'Tinggal 2 Kamar',
//     lokasi: 'Cileungsi',
//     harga: 'Rp 500.000/bulan',
//     },
//     {  img : require('../../asset/bandung.jpg'),
//     judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
//     jenis: 'Putra',
//     kamar: 'Tinggal 2 Kamar',
//     lokasi: 'Cileungsi',
//     harga: 'Rp 500.000/bulan',
//     },
//     {  img : require('../../asset/bandung.jpg'),
//     judul : 'Kost Abah Jl.Dulu Kalo Jodoh Nikah',
//     jenis: 'Putra',
//     kamar: 'Tinggal 2 Kamar',
//     lokasi: 'Cileungsi',
//     harga: 'Rp 500.000/bulan',
//     },
//   ];


class Talks extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Simplicity Matters',
        'Hammock Driven Development',
        'Value of Values',
        'Are We There Yet?',
        'The Language of the System',
        'Design, Composition, and Performance',
        'Clojure core.async',
        'The Functional Database',
        'Deconstructing the Database',
        'Hammock Driven Development',
        'Value of Values'
      ])
    };
  }

  handleLogout = async () => {
    await AsyncStorage.setItem('isLogin', '0')
    this.props.navigation.navigate('Guest')
}
  

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <View>
      
     <Button block success style={{margin :10, borderRadius:10, backgroundColor : '#43A047'}}
                            onPress={this.handleLogout}
                        >
                                <Text style={{color: 'white'}}>Logout</Text>
                                
    </Button>
      </View>
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

export default Talks;