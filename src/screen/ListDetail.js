import React, {Component} from 'react'
import {View, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native'
import MapView from 'react-native-maps'
import { Appbar } from 'react-native-paper';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Slideshow from 'react-native-slideshow/Slideshow'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import ReadMore from 'react-native-read-more-text';

import BookingBar from '../components/BookingBar'


const {height, width} = Dimensions.get('window');

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

 class DetailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mapDisplay : 'flex',
          imageDisplay : 'none',  
          imageTabColor : 'silver',
          mapsTabColor : 'green',  
          dataSource: [
            {
              
              url: require('../../asset/bandung.jpg'),
            }, {
             
              url: require('../../asset/jakarta.jpg'),
            }, {
              
              url: require('../../asset/surabaya.jpg'),
            }
          ],
          position: 0,
          isMapReady: false,
            region: {
                latitude: -6.90389, 
                longitude: 107.61861,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            data : data
        
        }
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true });
      };

    handleOnPressMap = () => {
        this.setState({
            mapDisplay : 'flex',
            imageDisplay : 'none',
            imageTabColor : 'silver',
            mapsTabColor : 'green',  
        })
      }
      handleOnPressImage = () => {
        this.setState({
            mapDisplay : 'none',
            imageDisplay : 'flex',
            imageTabColor : 'green',
            mapsTabColor : 'silver',  
        })
      }

    render(){
        const { region } = this.props;
        return(
            <View style={{flex : 1}}>
                
                <Appbar.Header>
                    <Appbar.BackAction />
                    <Appbar.Action style ={{position:"absolute",  right: 0}}
                        icon ='share'
                    />
                </Appbar.Header>
                <ScrollView stickyHeaderIndices={[11]} invertStickyHeaders={true}>

                    <View 
                        style={{
                            height: 200,
                            display : this.state.imageDisplay} }> 
                            <Slideshow 
                                    dataSource={this.state.dataSource}
                                    position={this.state.position}
                                    onPositionChanged={position => this.setState({ position })}
                                    arrowSize = {0}
                                    
                                    />
                    </View>
                    <View 
                        style={{
                        //...StyleSheet.absoluteFillObject,
                            height: 200,
                            display : this.state.mapDisplay
                        
                    }}
                        > 
                        <MapView
                            provider="google"
                            mapType="standard"
                            style={[styles.map]}
                            region={this.state.region}
                            onLayout={this.onMapLayout}
                            
                        >
                            {this.state.isMapReady && (
                            <MapView.Marker
                                title='lokasi'
                                coordinate={{
                                    latitude: this.state.region.latitude,
                                    longitude: this.state.region.longitude
                                }}
                            />
                            )}
                        </MapView>
                    </View>
                    <View style={styles.tabBar}>
                        <TouchableOpacity
                            style={[
                                styles.modalTab ,
                            ]}
                            onPress={this.handleOnPressMap
                            }
                        >
                            <Icon name={'md-pin'} color={this.state.mapsTabColor} size = {16} />
                            <Text
                                style={[{ color : this.state.mapsTabColor
                                },
                                styles.tabText]}
                            >
                                Lokasi

                            </Text>
                        
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.modalTab ,
                            
                            ]}
                            onPress={this.handleOnPressImage
                            }
                        >
                            <Icon name={'md-image'} color={this.state.imageTabColor} size = {16} />
                            <Text
                                style={[{ color : this.state.imageTabColor
                                },
                                styles.tabText]}
                            >
                                Gambar

                            </Text>
                        
                        </TouchableOpacity>
                    </View>
                    
                    <View 
                        style={[{
                            flexDirection : 'row',
                    
                    }, styles.detailContent]}>
                            <Text
                                style={{color : 'red'}}
                            >Putri    </Text>
                            <Text
                                style={{color : 'red'}}
                            >Ada 3 Kamar</    Text>
                            
                    </View>

                    <View style={[{
                        
                        
                    }, styles.detailContent]}>
                        <Text style={{fontSize : 20,
                            color : 'black'
                        }}>
                            Kost Abah Jl.Dulu Kalo Jodoh Nikah
                        </Text>

                    </View>
                    <View style={[{

                    }, styles.detailContent]}>
                        <Text style={{
                            color : 'black'
                        }}>
                            Update 12 Agustus • 19:35
                        </Text>

                    </View>
                        
                    <View
                        style={[{
                            borderTopWidth : 1,
                            borderTopColor : '#b5aeae',
                            borderBottomWidth : 1,
                            borderBottomColor : '#b5aeae',
                            flexDirection : "row",
                            justifyContent : 'space-around'
                        }, styles.detailContent]}
                    >   
                        <View  style={{
                            marginVertical :10,
                            }}>
                            <Text>
                                Tidak termasuk listrik
                            </Text>
                        </View>
                        <View style={{
                            marginVertical :10,
                            }}>
                            <Text>
                                tidak ada min. bayar
                            </Text>
                        </View>
                    </View>
                    {/* Luas Kamar */}
                    <View
                        style={
                            styles.detailContent
                        }
                    >
                        <Text style={styles.detailContentTitle}>
                            Luas Kamar
                        </Text>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <MaterialIcon name={'zoom-out-map'} color='green' size = {30} style={{margin : 5}} />
                            <Text>
                                5x3 m
                            </Text>

                        </View>
                    </View>
                        {/* Fasilitas */}
                    <View
                        style={
                            styles.detailContent
                        }
                    >
                        <Text style={styles.detailContentTitle}>
                            Fasilitas kost dan kamar
                        </Text>
                        <View style={styles.fasilitasContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.fasiltas}>
                                <MaterialIcon name={'room'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kamar
                                </Text>
                            </View>
                            <View style={styles.fasiltas}>
                                <MaterialIcon name={'share'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kasur
                                </Text>
                            </View>
                            <View style={styles.fasiltas}>
                                <MaterialIcon name={'share'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kasur
                                </Text>
                            </View>
                            <View style={styles.fasiltas}>
                                <MaterialIcon name={'share'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kasur
                                </Text>
                            </View>
                            <View style={styles.fasiltas}>
                                <MaterialIcon name={'share'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kasur
                                </Text>
                            </View><View style={styles.fasiltas}>
                                <MaterialIcon name={'share'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kasur
                                </Text>
                            </View><View style={styles.fasiltas}>
                                <MaterialIcon name={'share'} color='green' size = {30} style={{margin : 5}} />
                                <Text>
                                    Kasur
                                </Text>
                            </View>
                            </ScrollView>
                        </View>
                    </View>
                    
                    {/* Detail */}
                    <View style={styles.detailContent}>
                        <Text style={styles.detailContentTitle}>
                            Deskripsi Kost
                        </Text>
                        
                        <Text style={{textAlign: "justify"}} numberOfLines={null} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Text>
                        

                    </View>

                    {/* Kost Menarik Lain */}
                    <View style={styles.detailContent}>
                        <Text style={styles.detailContentTitle}>
                            Kost Menarik Lainnya
                        </Text>
                        <FlatList 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) =>  item.title }
                            data = {this.state.data}
                            renderItem = {({item : rowData}) => {
                                return(
                                    <View style={{
                                        width: 100,
                                        borderColor:'silver',
                                        borderWidth:1 ,
                                        borderRadius : 5
                                            }}>
                                        <Text>{rowData.kamar}</Text>
                                        <Image 
                                            style={{width : 98,
                                                    height : 150
                                            }}
                                            source={require('../../asset/bandung.jpg')}/>
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
                                                <Text numberOfLines={1} style={{flex : 1}}>1.500.000</Text>
                                                <Text style={{flex : 1}}>Putri</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text numberOfLines={1} style={{flex : 1}}>Kost Abah js jsia jsa</Text>
                                                <Text style={{flex : 1}}>Bandung</Text>
                                            </View>
                                        </View>
                                    </View>
                                    
                                )
                            }}
                        />   
                    </View>

                    <BookingBar/>

                </ScrollView>
            </View>
        )
    }

}
export default  DetailList

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor : 'black',
        flexDirection : 'row',
        height :40
    },
        modalTab:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection : 'row',
            // borderRadius: 4,
            
        },
        tabText:{
            paddingHorizontal: 10
        },
        map: {
            height : 200
          },
        detailContent:{
            margin :10,
            marginVertical : 5
        },
        detailContentTitle:{
            fontWeight : "200",
            fontSize : 15,
            color : 'black'
        },
        fasilitasContainer:{
            paddingVertical: 2, 
            flexDirection: 'row', 
            alignItems:'flex-start'
        },fasiltas :{
            alignItems:'center',
            marginHorizontal : 15,
        }
})