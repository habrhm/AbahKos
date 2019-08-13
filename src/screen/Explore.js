import React, {Component} from 'react'
import {View,
        Image,
        StyleSheet,
        ScrollView,
FlatList,
TouchableOpacity}  from 'react-native'
import {Appbar,
        Text,
        Button
        } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar} from 'react-native-elements';

import Slideshow from 'react-native-slideshow/Slideshow'

const data = [
  {  img : require('../../asset/bandung.jpg'), title: 'Bandung'},
  { img : require('../../asset/jakarta.jpg'), title: 'Jakarta'},
  { img : require('../../asset/surabaya.jpg'), title: 'Surabaya'},
  { img : require('../../asset/malang.jpg'), title: 'Malang'},
  { img : require('../../asset/yogyakarta.jpg'), title: 'Yogyakarta'}
];

class Explore extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            text: '',
            selectedTab : 0,
          position: 0,
          interval: null,
          dataSource: [
            {
              
              url: require('../../asset/promo.jpg'),
            }, {
             
              url: require('../../asset/promo1.jpg'),
            }, {
              
              url: require('../../asset/promo2.jpg'),
            },
            {
                
                url: require('../../asset/promo3.jpg'),
              },
              {
                
                url:require('../../asset/promo4.jpg'),
              },
          ],
          data:data
        };
      }
   
  
      componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
          }, 2000)
        });
      }
      componentWillUnmount() {
        clearInterval(this.state.interval);
      }

    render(){
        
        return(
          <ScrollView  > 
            <View>
              
                <Appbar.Header>
                    <Appbar.Action  
                        icon='home'
                    />
                    <Appbar.Content
                        title="AbahKos"
                    />

                </Appbar.Header>
                <View>
                <SearchBar        
      placeholder="Type Here..."        
      lightTheme        
      round        
      onChangeText={text => this.searchFilterFunction(text)}
      autoCorrect={false}             
    />    
                </View>
                
                  <View style={styles.container}>
                              <View>
                              <Text style={styles.text}> Promo </Text>
                              </View>
                              
                              <View style={styles.Row1}>
                              <Slideshow 
                              dataSource={this.state.dataSource}
                              position={this.state.position}
                              onPositionChanged={position => this.setState({ position })}
                              arrowSize = {0}
                              
                              />
                              </View>

                              <View style={styles.Row2}>
                                <View style={styles.View1}>
                                <Text> Are You Owner? Login Here</Text>
                                </View>
                                <TouchableOpacity
                                 style={[
                                    styles.modalTab]
                                 }
                               
                                    onPress={() =>
                                        this.setState( {selectedTab : 1} 
                                        )
                                    }
                            >
                                <Text>
                                    Login
                                </Text>
                            </TouchableOpacity>
                              </View>
                              <View>                          
                            <Text style={styles.text}> Kota Populer </Text>
                              </View>   

                              <View style={styles.Row3} >        
                              <FlatList 
                              horizontal={true} 
                              showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) =>  item.title }
                                data = {this.state.data}
                              renderItem={({item : rowData}) => {
                                return(                                  
                                <View style={styles.content}>
                                    <View style={{flex : 2}}>
                                    <Image source={rowData.img} style={styles.img}
                                    />
                                    </View>
                                    <View style={styles.timage}>
                                        <Text style={{color: '#fff'}}>{rowData.title}</Text>
                                    </View> 
                                </View>
                                
                                
                                )}} />
                                
                                  </View>
                     </View>
                   
              
            </View>
            </ScrollView>  
            
        
        )
    }

}
export default Explore

const styles = StyleSheet.create({
text: {
fontSize : 14,
fontWeight: '500',
paddingHorizontal: 20
},
container: {
padding : 10,
flexDirection: 'column'


},
modalTab:{
  height: 40,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 0.5,
   borderRadius: 10,
  
},

Row1:{
flex: 1,
alignItems: "flex-start"
},
Row2:{
  paddingHorizontal: 20,
  height: 50,
  flex: 1,
  alignItems: "center",
  backgroundColor: 'green',
  flexDirection: 'row'
  },
Row3:{
    flex: 1,
    alignItems: "flex-end"
    },
View1:{
  flex: 2,
  justifyContent: "flex-start"
  },
View2:{
   width: 80,
   height: 40,
   marginLeft:20,
   borderWidth: 0.5,
   borderRadius: 10,
  backgroundColor: 'transparent', 
  flex: 1,
  justifyContent: "flex-end"
  },
c :{
height : 200,
marginTop: 20,
marginHorizontal: 10
},
content : {
  marginHorizontal: 10,
    height :150,
    width : 100,
    borderColor:'#fff'

},
img :{
    flex: 1,
    width: 100, height: 150,
     borderRadius: 20,
    
},

timage:{
    position: 'absolute',
     top: 0,
      left: 0, 
      right: 0,
       bottom: 10, 
       justifyContent: 'flex-end',
       alignItems: 'center',
       color:'#ffffff'
},
shadow: {
  flex:1,
  marginHorizontal: 20,
  width : 150,
  height: 100,
 
},
})