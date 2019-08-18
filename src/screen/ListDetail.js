import React, {Component} from 'react'
import {View, Dimensions, Image, StyleSheet, TouchableOpacity, Share} from 'react-native'
import MapView from 'react-native-maps'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,  Text } from 'native-base'

import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Slideshow from 'react-native-slideshow/Slideshow'
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import Fasilitas from '../components/Fasilitas'
import RekomendasiKostItem from '../components/RekomendasiKostItem'




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
        latitude: -6.90389, 
        longitude: 107.61861,
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

 class DetailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mapDisplay : 'flex',
          imageDisplay : 'none',  
          imageTabColor : 'silver',
          mapsTabColor : '#43A047',  
          deskrpsiLineNumber : 2,
          readMoreText : 'Tampilkan',
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
            mapsTabColor : '#43A047',  
        })
      }
      handleOnPressImage = () => {
        this.setState({
            mapDisplay : 'none',
            imageDisplay : 'flex',
            imageTabColor : '#43A047',
            mapsTabColor : 'silver',  
        })
      }
      handleReadMore = () => {
        if  (this.state.readMoreText === 'Tampilkan'){
        this.setState({
            deskrpsiLineNumber : null ,
            readMoreText : 'Sembunyikan'

        })
        }else{
            this.setState({
                deskrpsiLineNumber : 2 ,
                readMoreText : 'Tampilkan'

            })
        }
      }

      handleShare = async () => {
        try{
            const result = await Share.share({
                message : 'Share'
            })
        }catch(ex){
            alert(ex.message)
        }
      }
    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        const region = {
            longitude : navigation.getParam('item').longitude,
            latitude : navigation.getParam('item').latitude,
            longitudeDelta : this.state.region.longitudeDelta,
            latitudeDelta : this.state.region.latitudeDelta
        }
        return(
            <Container>
             <Header style={{
                    backgroundColor : 'white'
                }}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' style={{color : '#43A047'}}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={{color : '#43A047'}}></Title>
                </Body>
                <Right>
                <Button transparent onPress={this.handleShare}>
                        <Icon name='share' style={{color : '#43A047'}}/>
                    </Button>
                </Right>
            </Header>
            <Content>
                <View 
                        style={{
                            height: 200,
                            display : this.state.imageDisplay} }> 
                            <Slideshow 
                                    dataSource={item.img}
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
                            region={region}
                            onLayout={this.onMapLayout}
                            
                        >
                            {this.state.isMapReady && (
                            <MapView.Marker
                                title='lokasi'
                                coordinate={{
                                    latitude: region.latitude,
                                    longitude: region.longitude
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
                            <Ionicon name={'md-pin'} color={this.state.mapsTabColor} size = {16} />
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
                            <Ionicon name={'md-image'} color={this.state.imageTabColor} size = {16} />
                            <Text
                                style={[{ color : this.state.imageTabColor
                                },
                                styles.tabText]}
                            >
                                Gambar

                            </Text>
                        
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal : 5}}>
                    <View 
                        style={[{
                            flexDirection : 'row',
                    
                    }, styles.detailContent]}>
                            <Text
                                style={{color : '#43A047'}}
                            >{item.jenis}    </Text>
                            <Text
                                style={{color : '#43A047'}}
                            >{item.kamar}</    Text>
                            
                    </View>

                    <View style={[{
                        
                        
                    }, styles.detailContent]}>
                        <Text style={{fontSize : 20,
                            color : 'black'
                        }}>
                            {item.judul}
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
                            <MaterialIcon name={'zoom-out-map'} color='#43A047' size = {30} style={{margin : 5}} />
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
                                <Fasilitas icon='md-bed' name='Kasur'/>
                                <Fasilitas icon='md-bed' name='Kamar mandi dalam'/>
                                <Fasilitas icon='md-thermometer' name='AC'/>
                                <Fasilitas icon='md-wifi' name='Wifi - Internet'/>
                            
                            </ScrollView>
                        </View>
                    </View>
                    
                    {/* Detail */}
                    <View style={styles.detailContent}>
                        <Text style={styles.detailContentTitle}>
                            Deskripsi Kost
                        </Text>
                        
                        <Text style={{textAlign: "justify"}} numberOfLines={this.state.deskrpsiLineNumber} >
                        {item.deskripsi}
                        </Text>
                        <TouchableOpacity onPress={this.handleReadMore}>
                            <Text style={{color : '#43A047'}}>
                                {this.state.readMoreText}
                            </Text>
                        </TouchableOpacity>
                        

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
                            renderItem = {({item}) => {
                                return(
                                    
                                    <RekomendasiKostItem item = {item} navigation={this.props.navigation} />
                                )
                            }}
                        />   
                    </View>
                    </View>
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor:'white', borderTopWidth : 1}}>
                    <View style={{flex : 1, alignItems:"center",padding : 20}}>
                        <Text style={{alignSelf : 'center', color : '#43A047'}}>
                            Rp.100.000,00 
                        </Text>
                    </View>
                    <View style={{flexDirection : 'row', flex : 1 }}>
                        <Button style={styles.bottomBarButton}>
                            <Text style={{ color : 'red'}}>Hubungi</Text>
                        </Button>
                        <Button style={styles.bottomBarButton}
                            onPress={()=>this.props.navigation.navigate('BookingKost')}
                        >
                            <Text style={{ color : 'red'}}>Booking</Text>
                        </Button>
                    </View>
                </FooterTab>
            </Footer>
          </Container>
       
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
            fontWeight : "500",
            fontSize : 17,
            color : 'black'
        },
        fasilitasContainer:{
            paddingVertical: 2, 
            flexDirection: 'row', 
            alignItems:'flex-start'
        },fasiltas :{
            alignItems:'center',
            marginHorizontal : 15,
        }, bottomBarButton : {
            borderWidth : 2, 
            borderColor : 'red', 
            borderRadius : 10,
            height : 40,
            marginHorizontal : 5,
        }
})