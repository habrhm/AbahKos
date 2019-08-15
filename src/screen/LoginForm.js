import React, {Component } from 'react'
import {View} from 'react-native'
import { Container, Label, Content, Header, Left, Body, Right, Button, Icon, Title, Text, Footer, Form, Item, Input, FooterTab, H1 } from 'native-base'





export default class App extends Component {

    render(){
        return(
            <Container>
                <Header style={{
                    backgroundColor : 'white'
                }}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' style={{color : 'green'}}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={{color : 'green'}}>Login</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                  
                        <H1 style={{padding : 20, alignSelf :'center'}} >Login</H1>
                        <Form style={{paddingBottom : 10}}>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            
                            
                            
                        </Form>
                        <Button rounded block success style={{margin :10}}>
                                <Text>Login</Text>
                                
                        </Button>
                        <View  style={{alignSelf:'center', padding: 20, flexDirection : 'row'}}>
                            <Text>Belum Punya Akun ? </Text>
                            <Text style={{color : 'green'}} onPress={() => alert('a')}>Register</Text>

                        </View>
                    
                </Content>
            </Container>
        )
    }

}