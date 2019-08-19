import MapView from 'react-native-maps'
import React, {Component } from 'react'
import {View, StyleSheet, Image, FlatList, Animated} from 'react-native'
import { Container, Label, Content, Header, Left, Body, Picker, Right, Button, Icon, Title, Text,  Textarea, Form, Item, Input,  H1 } from 'native-base'
import Mapview, { AnimatedRegion, Marker } from 'react-native-maps';
import ImagePicker from 'react-native-image-picker'

import GoBackHeader from '../components/GoBackHeader'



export default class PasangIklan extends Component{
    constructor(){
        super()
        this.state = {
            src : [],
            selected: "Putra",
            region :{
                latitude: -6.90389, 
                longitude: 107.61861,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                
            },
            markerRegion :{
                latitude: -6.90389, 
                longitude: 107.61861,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                
            }
        }
    }

  
    onValueChange(value) {
        this.setState({
          selected: value
        });
      }

    handleImagePicker = ()=>{
        const options = {
            title: 'Pilih Gambar',
            storageOptions: {
            skipBackup: true,
            path: 'images',
        },}
        ImagePicker.showImagePicker(options, (response) =>{
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }else{
            const source = { uri: response.uri };
            this.setState({
                src :    [...this.state.src, source]
            })
        }
        })
    }
    handleRegionChange = (region) =>{
        this.setState({
             region,
             markerRegion : region
        })
        
    }
    


    render(){
        
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
                    <Title style={{color : '#43A047'}}>Pasang Iklan</Title>
                </Body>
                <Right />
                </Header>
                <Content> 
                    <View style={styles.body}>
                        <Form style={{paddingBottom : 10, paddingRight : 20}}>
                            <Item floatingLabel>
                                <Label>Nama Kost</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Alamat Kost</Label>
                                <Input />
                            </Item>
                            <View style ={{padding:10}}>
                                <Label>Cari Alamat Kost Anda Di Map dan Pin Alamat Anda</Label> 
                            </View>     
                            <View style ={styles.container}>
                                <MapView style={styles.map}
                                    region={this.state.region}
                                    onRegionChangeComplete={this.handleRegionChange}
                                
                                >
                                    <MapView.Marker
                                        coordinate={this.state.markerRegion}
                                        title={"AbahKos"}
                                        description={"Nugaduh Kos"}
                                    />
                                </MapView>  
                            </View>
                            <View style={{flexDirection : 'row'}}>
                            <Item floatingLabel style={{flex : 1}}>
                                <Label>Latitude</Label>
                                <Input  editable={false} value={this.state.markerRegion.latitude.toString()}/>

                            </Item> 
                            <Item floatingLabel style={{flex : 1}}>
                                <Label>Longitude</Label>
                                <Input editable={false} value={this.state.markerRegion.longitude.toString()}/>
                            </Item> 
                            </View>
      

            <Item floatingLabel>
                <Label>Kota</Label>
                <Input />
            </Item>
            <View style={{paddingLeft : 17, marginTop : 15 }}>
                <Text>Gambar Kost</Text>
                
                {this.state.src && (
                    <View style={{paddingVertical:10}}> 
                     <FlatList    
                     horizontal={true}
                     data = {this.state.src}
                     extraData ={this.state}
                     renderItem={({item}) => 
                     {
                     return( 
                        <Image source={{uri : item.uri}} 
                        style={{width : 75, height : 75, marginRight : 10}}
                    />   )}} />
                   </View>
                )
                }

                <Button onPress={this.handleImagePicker} style={{borderRadius:10, backgroundColor : '#43A047', width: 100}}>
                    <Text>Upload Gambar</Text>
                </Button>
            </View>
            <Item floatingLabel>
                <Label>Jumlah Kamar</Label>
                <Input />
            </Item>
            <View style={{paddingLeft : 17, marginTop : 15 }}>
                <Label style={{color : 'black'}}>Deskripsi</Label>
                <Textarea rowSpan={5} bordered placeholder="Desrkipsi" />
            </View>
            <View style={{paddingLeft : 17,marginTop : 15}}>
                <Label style={{color : 'black'}}>Jenis Kost</Label>
                <Picker
                note
                mode="dropdown"
                style={{ width: 120, color : 'black', }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}

                >
                <Picker.Item label="Putra" value="Putra" />
                <Picker.Item label="Putri" value="Putri" />
                <Picker.Item label="Campur" value="Campur" />
                </Picker>
            </View>
            <Item floatingLabel>
                <Label>Harga</Label>
                <Input />
            </Item>    

            </Form>
                        <Button block success style={{margin :10, borderRadius:10, backgroundColor : '#43A047'}}>
                                <Text>Selanjutnya</Text>
                                
                        </Button>
                        
                        </View>
                </Content>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    container: {
     // ...StyleSheet.absoluteFillObject,
        padding : 20,
        height: 250,
        width: 400,
        
        
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      marginLeft : 10,
      marginRight : 25

    
    },
    body: {
        flex: 1,
        justifyContent: 'center'
      },
  });
  const data = {
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

  }