import React, {Component } from 'react'
import {View} from 'react-native'
import { Container, Label, Content, Header, Left, Body, Right, Button, Icon, Title, Text,  Form, Item, Input,  H1 } from 'native-base'





export default class App extends Component {

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
                    <Title style={{color : '#43A047'}}>Login</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                  
                        <H1 style={{padding : 20, alignSelf :'center'}} >Login</H1>
                        <Form style={{paddingBottom : 10, paddingRight : 13}}>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            
                            
                            
                        </Form>
                        <Button block success style={{margin :10, borderRadius:10, backgroundColor : '#43A047'}}>
                                <Text>Login</Text>
                                
                        </Button>
                        <View  style={{alignSelf:'center', padding: 20, flexDirection : 'row'}}>
                            <Text>Belum Punya Akun ? </Text>
                            <Text style={{color : '#43A047'}} onPress={() => this.props.navigation.navigate('RegisterForm')}>Register</Text>

                        </View>
                    
                </Content>
            </Container>
        )
    }

}