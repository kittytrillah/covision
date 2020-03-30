/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-map-clustering';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

class App extends Component {
    viewOne = null
    viewTwo = null

  // state = {
  //   count: 0,
  // };
    state = {
        m_location: null,
        m_latitude: null,
        m_longitude: null
    };

    onGetMyLocation = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    };

    constructor(props) {
        super(props);
        this.gotToMyLocation = this.gotToMyLocation.bind(this);
        this.state= {
            mapMargin:1
        }
    }

    setMargin = () => {
        this.setState({mapMargin:0})
    }

    onPressMyLocation(val) {
        console.log(val);
    }

    gotToMyLocation(){
        console.log('gotToMyLocation is called')
        var latitude_i = 0
        var longitude_i = 0
        //this.viewTwo.viewOne.reg
        //this.map.latitude = 0;
        //this.setState({ region });
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location);
                latitude_i = location.latitude;
                longitude_i = location.longitude;
                //this.setState({ region });
                if (this.map) {
                    console.log("curent location: ", location)
                    this.setState({ m_latitude: this.location.latitude });
                    this.setState({ m_longitude: this.location.longitude });
                    console.log("longitudee here", this.state.m_longitude);
                    this.map.animateToRegion({
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    })
                }
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    // onMapReady = () => {PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    //     .then(granted => {
    //         this.setState({ paddingTop: 0 });
    //     });
    // };

    componentWillMount(){
        this.gotToMyLocation();
        console.log("longitude ", this.state.m_longitude)
    }

  render() {
    return (<View style={styles.container}>
          <MapView
             // ref={(map) => { this.map = map; }}
              //ref={(mapRef) => this.viewOne = mapRef}
              customMapStyle={[
                  {
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#1d2c4d"
                          }
                      ]
                  },
                  {
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#8ec3b9"
                          }
                      ]
                  },
                  {
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "color": "#1a3646"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.country",
                      "elementType": "geometry.stroke",
                      "stylers": [
                          {
                              "color": "#4b6878"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.land_parcel",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#64779e"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.province",
                      "elementType": "geometry.stroke",
                      "stylers": [
                          {
                              "color": "#4b6878"
                          }
                      ]
                  },
                  {
                      "featureType": "landscape.man_made",
                      "elementType": "geometry.stroke",
                      "stylers": [
                          {
                              "color": "#334e87"
                          }
                      ]
                  },
                  {
                      "featureType": "landscape.natural",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#023e58"
                          }
                      ]
                  },
                  {
                      "featureType": "poi",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#283d6a"
                          }
                      ]
                  },
                  {
                      "featureType": "poi",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#6f9ba5"
                          }
                      ]
                  },
                  {
                      "featureType": "poi",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "color": "#1d2c4d"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.park",
                      "elementType": "geometry.fill",
                      "stylers": [
                          {
                              "color": "#023e58"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.park",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#3C7680"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#304a7d"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#98a5be"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "color": "#1d2c4d"
                          }
                      ]
                  },
                  {
                      "featureType": "road.highway",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#2c6675"
                          }
                      ]
                  },
                  {
                      "featureType": "road.highway",
                      "elementType": "geometry.stroke",
                      "stylers": [
                          {
                              "color": "#255763"
                          }
                      ]
                  },
                  {
                      "featureType": "road.highway",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#b0d5ce"
                          }
                      ]
                  },
                  {
                      "featureType": "road.highway",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "color": "#023e58"
                          }
                      ]
                  },
                  {
                      "featureType": "transit",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#98a5be"
                          }
                      ]
                  },
                  {
                      "featureType": "transit",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "color": "#1d2c4d"
                          }
                      ]
                  },
                  {
                      "featureType": "transit.line",
                      "elementType": "geometry.fill",
                      "stylers": [
                          {
                              "color": "#283d6a"
                          }
                      ]
                  },
                  {
                      "featureType": "transit.station",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#3a4762"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#0e1626"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#4e6d70"
                          }
                      ]
                  }
              ]}
              initialRegion={{
                  latitude: 60,
                  longitude: 10,
                latitudeDelta: 15,
                longitudeDelta: 15
              }}
              showsUserLocation={true}
              followsUserLocation={true}
              showsMyLocationButton={true}
              style={{ width: 410, height: 720,  justifyContent: 'center', marginBottom: this.state.mapMargin }}
              onMapReady={this.setMargin}
          >
            <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} />
            <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
            <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
            <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
            <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
            <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
            <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
            <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
          </MapView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity
                    // onPress={() => this.gotToMyLocation}
                    onPress={this.gotToMyLocation}
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:100,
                        height:100,
                        backgroundColor:'#15354F',
                        borderRadius:50,
                    }}
                >
                    <Icon name={"crosshairs"} type = 'font-awesome'  size={75} color="#239AE0" />
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => this.gotToMyLocation}
                    onPress={this.gotToMyLocation}
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:100,
                        height:100,
                        backgroundColor:'#15354F',
                        borderRadius:50,
                    }}
                >
                    <Icon name={"meh"} type = 'font-awesome'  size={75} color="#E04523" />
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => this.gotToMyLocation}
                    onPress={this.gotToMyLocation}
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:100,
                        height:100,
                        backgroundColor:'#15354F',
                        borderRadius:50,
                    }}
                >
                    <Icon name={"camera"} type = 'font-awesome'  size={75} color="#19CEAB" />
                </TouchableOpacity>
            </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: "#002f45",
      // paddingTop: this.state.paddingTop
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 1,
    marginBottom: 1
  }
})

export default App;
