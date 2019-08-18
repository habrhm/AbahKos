import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
//import { BorderlessButton, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';


class Login extends Component {

    constructor(){
        super();
        this.state = {

        }
    }



    
    render(){
        return(
            <Container>
            <Header style={{backgroundColor: 'white'}}>
             
              <Body style={{padding :10}}>
                <Title style={{fontWeight:'bold', color:'#43A047'}}>Login</Title>
              </Body>
              <Right />
            </Header>
            <Content contentContainerStyle={{alignContent:'center', paddingHorizontal :50}} >
                <MaterialIcon name='person' color='#43A047' size = {300} style={{alignSelf:'center'}} />
                <View style={{marginVertical : 10, }}>
            
                    <Text style={{textAlign:'center', marginBottom : 20}}>
                        Kamu belum login, login untuk menikmati lebih banyak fitur</Text>
                    </View>
                <Button 
                        onPress={() => {this.props.navigation.navigate('LoginForm')}}
                        style={{borderRadius:10, backgroundColor: '#43A047'}}
                    >
                        <Text style={{textAlign:'center', flex : 1}}>Login</Text>
                    </Button>
            </Content>
            </Container>
                    

        )
    }

}
export default Login

const styles = StyleSheet.create({
   
    container:{
        paddingTop :5,
        backgroundColor: 'white'
    },
    text: {
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    button: {
        margin:20,
        backgroundColor: 'transparent', 
    },
    modalTab:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        // borderRadius: 4,
        
    },
    tabContent:{
        height  : 200,
        justifyContent:'center', 
        alignItems: 'center',
        
    },
    tabText:{
        fontSize : 20,
        
    }
})