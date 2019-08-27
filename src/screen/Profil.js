import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'
import { Button, Container, Content, Card, Left, Body, CardItem } from 'native-base';



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleLogout = async () => {
    await AsyncStorage.removeItem('token')
    this.props.navigation.navigate('Guest')
  }


  render() {
    return (
      <Container>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 200,
            borderBottomLeftRadius: 100,
            backgroundColor: '#43A047',

          }}
        >
        </View>
        <Content
          style={{
            paddingHorizontal: 20
          }}
        >
          <Card
            style={styles.profileCard}
          >
            <CardItem>
            <Image
              source={require('../../asset/bandung.jpg')}
              style={{
                width: 75,
                height: 75,
                borderRadius: 75 / 2,
              }}
            />
            <View
                style={{
                  paddingHorizontal : 10,
                  justifyContent:'space-evenly',
                  //borderWidth : 0.5,
                  flexGrow : 1,
                  height : 75
                }}
              >
              <Text style={{
                fontSize : 20,
                fontWeight : 'bold',
                color : 'black'
              }}>Haris</Text>
              <Text style={{
               
                fontWeight : '300',
                color : '#43A047'
              }}>haris@mail.com</Text>
              <Text>+62XXXXXXX</Text>
            </View>
            </CardItem>

          </Card>
          <Card
            style={styles.contentCard}
          >
            <CardItem button bordered style={styles.cardButton} >

              <Ionicon name='md-home' color='black' size={30}
                style={styles.cardButtonIcon}
                />
              <Text style={styles.cardButtonText}>Data Kost</Text>
            </CardItem>
            <CardItem button style={styles.cardButton}>

              <Ionicon name='md-book' color='black' size={30}
                style={styles.cardButtonIcon}
                />
              <Text style={styles.cardButtonText}>Data Booking</Text>
            </CardItem>
          </Card>

          <Card
            style={styles.contentCard}
          >
            <CardItem button style={styles.cardButton} onPress={this.handleLogout}>

              <Ionicon name='md-log-out' color='black' size={30}
                style={styles.cardButtonIcon}
                />
              <Text style={styles.cardButtonText}>Logout</Text>
            </CardItem>
          </Card>


        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  profileCard: {
    marginTop: 50,
    borderRadius: 15,
    padding: 10

  },
  contentCard : {
    borderRadius: 15,
  },
  cardButton : {
    backgroundColor :  'transparent'
  },
  cardButtonIcon : {
    marginRight : 15
  },
  cardButtonText : {color : 'black'}
});

export default Profile;