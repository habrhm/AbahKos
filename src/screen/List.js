import React, {Component} from 'react'
import {View, Text, StyleSheet, Image,  FlatList, TouchableOpacity}  from 'react-native'
import {Container, Content, Button, Right} from 'native-base'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';
import {connect} from 'redux';
import * as actionDorms from './../redux/actions/dorms';

import KostListItem from '../components/KostListItem'
import GoBackHeader from '../components/GoBackHeader'
import {data} from '../../data'




 class List extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          data:data,
          visibleModal : null,
          sortOption : 'acak'
        };
      }
     handelSortOptionPress = (opt) =>{
         this.setState(
             {
                 sortOption : opt
             }
         )
     }

    render(){
        return(
            <Container >
                <GoBackHeader navigation={this.props.navigation} />  
                <Content style={{padding : 10}}>
                <FlatList    
                keyExtractor={(item) =>  item.id.toString()}
                data = {this.state.data}
                renderItem={({item }) => 
                {
                return( 
                    <KostListItem  key={item.id.toString()} item={item} navigation={this.props.navigation}/>                                 
                )}} />
               
                </Content>
                <View 
                    style={{
                        flexDirection:'row', 
                        position : "absolute",
                        bottom : 20,
                        alignSelf : 'center'
                        
                    }}
                >
                    <Button style={[styles.FABButton, {borderTopRightRadius : 0, borderBottomRightRadius : 0, borderRightWidth : 0.5, borderColor : '#43A047'}]}
                        
                    >
                        <MaterialIcon name={'filter-list'} color='#43A047' />
                        <Text style={{color: '#43A047', }}>Filter</Text>
                    </Button>
                    <Button style={[styles.FABButton, {borderTopLeftRadius : 0, borderBottomLeftRadius : 0, borderLeftWidth : 0.5, borderColor : '#43A047'}]}
                        onPress={() => {this.setState({visibleModal : 'sort'})}}
                    >
                        <MaterialIcon name={'sort'} color='#43A047' />
                        <Text style={{color: '#43A047', }}>Urutkan</Text>
                    </Button>
                </View>
                <Modal
                    isVisible={this.state.visibleModal === 'sort'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styles.sortModal}
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                >
                    <View style={styles.sortModalContent}>
                        <View style={{borderBottomWidth : 1, borderBottomColor : '#43A047', paddingLeft : 10, paddingBottom : 10}}>
                            <Text style={styles.contentTitle}>Urutkan Dari</Text>
                        </View>
                        <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('acak')}>
                            <Text style={{color : this.state.sortOption === 'acak' ? '#43A047' : 'silver'}}>Acak</Text>   
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('termurah')}>
                            <Text style={{color : this.state.sortOption === 'termurah' ? '#43A047' : 'silver'}}>Harga termurah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('termahal')}>
                            <Text style={{color : this.state.sortOption === 'termahal' ? '#43A047' : 'silver'}}>Harga termahal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('kosong')}>
                            <Text style={{color : this.state.sortOption === 'kosong' ? '#43A047' : 'silver'}}>Kosong ke penuh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('penuh')}>
                            <Text style={{color : this.state.sortOption === 'penuh' ? '#43A047' : 'silver'}}>Penuh ke kosong</Text> 
                        </TouchableOpacity>
                          
                            
                            
                            
                        
                    </View>
                </Modal>
                </Container>
            
        )
    }

}
export default List

const styles = StyleSheet.create({
    img : {
        width : 350,
        //flex : 1,
        height : 200,
        marginHorizontal : 10
    },
    listContainer:{
        margin : 10,
        height : 300,
        //width : width,
        paddingBottom : 20
    },
    detailContainer:{
        paddingVertical : 5,
        //width : width,
        flexDirection : 'row'
    },
    textHarga:{
        fontWeight : 'bold',
        fontSize : 20,
        color : 'black'
    },
    textJudul:{
        fontWeight : '100',
        fontSize : 15,
        color : 'black'
    },
    FABButton : {
        backgroundColor: 'white', 
        width : 80, 
        paddingHorizontal : 10,
        alignItems : "center"
    },
    sortModal : {     
            justifyContent: 'flex-end',
            margin: 0,
    },
    sortModalContent: {
        backgroundColor: 'white',
        paddingVertical: 10,
        justifyContent: 'center',
       // alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    contentTitle : {
        color : '#43A047',
        fontSize : 20
    },
    sortOption : {
        paddingTop : 5,
        paddingLeft : 10
    }
    
})