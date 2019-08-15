import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Modal, Portal,  Button} from 'react-native-paper'
//import { BorderlessButton, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';

import NavigationServices from '../../NavigationServices';
class Login extends Component {

    constructor(){
        super();
        this.state = {
            visible:  false,
            selectedTab : 0
        }
    }



    
    render(){
        return(
            <View>
                <View
                    style ={styles.button}
                >
                    <Button 
                        icon="" 
                        mode="contained" 
                        onPress={() => {NavigationServices.navigate('LoginForm')}}
                        compact={true}
                    >
                        Login
                    </Button>
                </View>
            </View>
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