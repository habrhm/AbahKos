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
  

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <View key={rowData} style={ styles.row }>
            <Text style={ styles.rowText }>
              { rowData }
            </Text>
          </View>
         )}

    // <Content>
    // <View 
    //         style={{
    //             height: 200,
    //             display : this.state.imageDisplay} }> 
    //             <Slideshow 
    //                     dataSource={this.state.dataSource}
    //                     position={this.state.position}
    //                     onPositionChanged={position => this.setState({ position })}
    //                     arrowSize = {0}
                        
    //                     />
    //     </View>
    //     <View 
    //         style={{
    //         //...StyleSheet.absoluteFillObject,
    //             height: 200,
    //             display : this.state.mapDisplay
            
    //     }}
    //         > 
    //         <MapView
    //             provider="google"
    //             mapType="standard"
    //             style={[styles.map]}
    //             region={this.state.region}
    //             onLayout={this.onMapLayout}
                
    //         >
    //             {this.state.isMapReady && (
    //             <MapView.Marker
    //                 title='lokasi'
    //                 coordinate={{
    //                     latitude: this.state.region.latitude,
    //                     longitude: this.state.region.longitude
    //                 }}
    //             />
    //             )}
    //         </MapView>
    //     </View>


        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}

            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                {/* <Image source={{uri: 'https://i.pinimg.com/originals/fb/93/d2/fb93d2fb21e33f5aaac7ed2f26bfe0a8.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/> */}
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Image style={ styles.avatar } source={{
                  uri: 'https://oomphcdn01.sgp1.cdn.digitaloceanspaces.com/ocmcdn/uploads/shareit_contents/2018/11/12/44625/10_20181112042353_ozawa.jpg',
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE
                }}/>
                <Text style={ styles.sectionSpeakerText }>
                  Mario 'Miyabi' Ozawa
                </Text>
                <Text style={ styles.sectionTitleText }>
                  Professional Actor 
                </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                
                <MaterialIcon name='arrow-back' style={styles.stickySectionText} onPress={() => this.props.navigation.goBack()} />
                
              </View>
            )}

            renderFixedHeader={() => (
              
              <View key="fixed-header" style={styles.fixedSection}>
                <MaterialIcon name='arrow-upward' style={styles.stickySectionText} onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })} />
                      
                  
              </View>
            )}/>
        )}
      />
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