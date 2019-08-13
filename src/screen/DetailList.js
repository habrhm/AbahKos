import React, {Component} from 'react'
import {View, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native'
import MapView from 'react-native-maps'
import { Appbar } from 'react-native-paper';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Slideshow from 'react-native-slideshow/Slideshow'


const {height, width} = Dimensions.get('window');

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
            }
        
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
            <View>
                <Appbar>
                    <Appbar.BackAction />
                    <Appbar.Action style ={{position:"absolute",  right: 0}}
                        icon ='share'
                    />
                </Appbar>
               <View style={{
                   height: 200,
                   display : this.state.imageDisplay} }> 
                     <Slideshow 
                              dataSource={this.state.dataSource}
                              position={this.state.position}
                              onPositionChanged={position => this.setState({ position })}
                              arrowSize = {0}
                              
                              />
                </View>
                <View style={{
                    //...StyleSheet.absoluteFillObject,
                    height: 200,
                    display : this.state.mapDisplay
                    
                }}> 
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
                <View
                    style={
                        styles.detailContent
                    }
                >
                    <Text>
                        Luas Kamar
                    </Text>
                    <View style={{paddingVertical: 2, flexDirection: 'row', alignItems:'center'}}>
                        <MaterialIcon name={'zoom-out-map'} color='green' size = {30} />
                        <Text>
                            4.5m
                        </Text>
                    </View>
                </View>
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
        }
})