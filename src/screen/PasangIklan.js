import MapView from 'react-native-maps'
import React, {Component } from 'react'
import {View, StyleSheet} from 'react-native'
import { Container, Label, Content, Header, Left, Body, Right, Button, Icon, Title, Text,  Form, Item, Input,  H1 } from 'native-base'
import Mapview, { AnimatedRegion, Marker } from 'react-native-maps';


export default class PasangIklan extends Component{
        
  state = {
    region :{
        latitude: -6.90389, 
        longitude: 107.61861,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
  }
}
  
 

    render(){
        
        return(
            <Container>
                <Content> 
               
                        <View style={styles.body}>
                        <Form style={{paddingBottom : 10}}>
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
          initialRegion={this.state.region}
        >
        <MapView.Marker
            coordinate={this.state.region}
            title={"AbahKos"}
            description={"Nugaduh Kos"}
         />
      </MapView> 
      </View>                     
                                    
                                
                            
                            <Item floatingLabel>
                                <Label>Pemilik Kost</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Nomor Handphone Pemilik Kost</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Pengelola Kost</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>No Handphone Pengelola Kost</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Nomor Handphone</Label>
                                <Input />
                            </Item>
                            
                            
                            
                        </Form>
                        <Button rounded block success style={{margin :10}}>
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
    
    },
    body: {
        flex: 1,
        justifyContent: 'center'
      },
  });
  