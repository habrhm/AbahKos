// import React, {Component} from 'react'
// import {View, Text} from 'react-native'

// class Wishlist extends Component {
//     render(){
//         return(
//             <View>
//                 <Text>Wishlist</Text>
//             </View>
//         )
//     }

// }
// export default Wishlist

import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    FlatList,
    StyleSheet,
} from "react-native";

const data = [
    {  img : require('../../asset/bandung.jpg'),
     title: 'Bandung',
     jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    alamat: 'Jl.Dulu Kalo Jodoh Nikah'},
    { img : require('../../asset/jakarta.jpg'), title: 'Jakarta',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    alamat: 'Jl.Dulu Kalo Jodoh Nikah'},
    { img : require('../../asset/surabaya.jpg'), title: 'Surabaya',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    alamat: 'Jl.Dulu Kalo Jodoh Nikah'},
    { img : require('../../asset/malang.jpg'), title: 'Malang',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    alamat: 'Jl.Dulu Kalo Jodoh Nikah'},
    { img : require('../../asset/yogyakarta.jpg'), title: 'Yogyakarta',
    jenis: 'Putra',
    kamar: 'Tinggal 2 Kamar',
    lokasi: 'Cileungsi',
    harga: 'Rp 500.000/bulan',
    alamat: 'Jl.Dulu Kalo Jodoh Nikah'}
  ];

const { width } = Dimensions.get("window");

export default class Wishlists extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000,
        data:data
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();

        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <ScrollView>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: "95%",
                        marginLeft: 10,
                        marginRight: 10
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "green",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "green",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "green"
                                }}
                            >
                                Favorite
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "green",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "green"
                                }}
                            >
                                List
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <Text>Favorite</Text>
                            <View style={{ marginTop: 20 }}>
                              
                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            
                        
                                <View >
                                    <FlatList  
                                        
                                        
                                        keyExtractor={(item) =>  item.title }
                                        data = {this.state.data}
                                        renderItem={({item : rowData}) => 
                                        {
                                        return(                   
                                        <View>
                                            <View style={styles.img}>
                                            <Image source={rowData.img} />
                                            </View>
                                            <View style={styles.text}>
                                              <View>
                                                <Text >{rowData.title}</Text>
                                                </View> 
                                                <View >
                                                    <Text >{rowData.jenis}</Text>
                                                </View> 
                                                <View >
                                                    <Text >{rowData.kamar}</Text>
                                                </View> 
                                                <View >
                                                    <Text >{rowData.lokasi}</Text>
                                                </View> 
                                                <View >
                                                    <Text >{rowData.harga}</Text>
                                                </View> 
                                                <View >
                                                    <Text >{rowData.alamat}</Text>
                                                </View> 
                                              </View>
                                            </View> )
                                        }} 
                                    />
                                    </View>
                           
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
   
    container:{
        paddingTop :5,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    text: {
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    img: {
    flex: 0.5,
     width: 200,
     height: 150,
     borderRadius:20,
    },
   
})