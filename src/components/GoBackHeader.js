import React,  {Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,  Text } from 'native-base'


export default class GoBackHeader extends Component{
    render(){
        return(
            <Header style={{
                backgroundColor : 'white'
            }}>
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' style={{color : 'green'}}/>
                </Button>
            </Left>
            <Body>
                <Title style={{color : 'green'}}></Title>
            </Body>

        </Header>
        )
    }
}