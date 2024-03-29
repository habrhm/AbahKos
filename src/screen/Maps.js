import MapView from 'react-native-maps'
import{StyleSheet,
View,
} from 'react-native'
import React, {Component} from 'react'
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

module.exports = class Maps extends Component {
  render() {
    const { region } = this.props
    console.log(region)

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -6.90389, 
            longitude: 107.61861,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    )
  }
}