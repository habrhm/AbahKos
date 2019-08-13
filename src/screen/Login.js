import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Modal, Portal,  Button} from 'react-native-paper'
//import { BorderlessButton, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
class Login extends Component {

    constructor(){
        super();
        this.state = {
            visible:  false,
            selectedTab : 0
        }
    }

    _showModal = () => this.setState({ visible: true });
    _hideModal = () => this.setState({ visible: false });

    displayTab() {
        if (this.state.selectedTab === 0) {
            return(
                <View style={styles.tabContent}>
                    <Text style={{
                        textAlign :'center',
                        textAlignVertical :'center',
                        flex : 1,
                        
                    }
                    }>
                        Pilih salah satu
                    </Text>
                </View>)
            }else if (this.state.selectedTab === 1) {
                return(
                <View style={styles.tabContent}>
                    <Button 
                        mode="contained" 
                        color='red'
                        contentStyle={{
                        
                        textAlign :'center',
                        textAlignVertical :'center',
                    }
                    }>
                        Login Pemasang Iklan
                    </Button>
                </View>)
            }else  {
                return(
                <View style={styles.tabContent}>
                    <Text style={{
                        textAlign :'center',
                        textAlignVertical :'center',
                        flex : 1,
                        
                    }
                    }>
                        Login Pengguna
                    </Text>
                </View>)
            }
    }
    render(){
        return(
            <View>
                 <Portal>
                     
                    <Modal 
                        visible={this.state.visible} 
                        onDismiss={this._hideModal}
                        contentContainerStyle={styles.container}
                    >
                        <View style={styles.text}>
                            <Text style={{
                                fontWeight:'100',
                                fontSize:20
                            }}>
                                Login
                            </Text> 
                        </View>
                        <View style={styles.text}>
                            <Text style={{
                                fontWeight:'100',
                                fontSize:15
                            }}>
                                Login Sebagai

                            </Text>

                        </View>
                        <View style={styles.text}>
                            <TouchableOpacity
                                 style={[
                                    styles.modalTab ,
                                    {borderColor: this.state.selectedTab === 1 ? "green" : "silver",}]
                                 }
                                // onLayout={event =>
                                //     this.setState({
                                //         xTabOne: event.nativeEvent.layout.x
                                //     })
                                // }
                                    onPress={() =>
                                        this.setState( {selectedTab : 1} 
                                        )
                                    }
                            >
                                <Text
                                    style={[{
                                        color:   this.state.selectedTab === 1 ? "green" : "silver"
                                    },
                                    styles.tabText]}
                                >
                                    Pemilik Iklan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                   styles.modalTab ,
                                   {borderColor: this.state.selectedTab === 2 ? "green" : "silver",}
                                   ]
                                }
                                // onLayout={event =>
                                //     this.setState({
                                //         xTabOne: event.nativeEvent.layout.x
                                //     })
                                // }
                                onPress={() =>
                                this.setState( {selectedTab : 2} 
                                    )
                                }
                            >
                                <Text 
                                    style={[{
                                        color:   this.state.selectedTab === 2 ? "green" : "silver"
                                    },
                                    styles.tabText]}
                                >
                                    Pengguna
                                </Text>
                            </TouchableOpacity>
                            <Text>Kost Abah Jl.Dulu Kalo Jodoh Nikah</Text>

                        </View>
                        {this.displayTab()}
                        
                    </Modal>
                    
                </Portal>
                
                
                <View
                    style ={styles.button}
                >
                    <Button 
                        icon="" 
                        mode="contained" 
                        onPress={this._showModal}
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