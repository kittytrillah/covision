/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState, useEffect } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-map-clustering';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';

const BASE_URI = 'http://localhost:5000'; //for testing purposes

const client = axios.create({
    baseURL: BASE_URI,
    json: true
});

interface IGeolocation {
    latitude: number;
    longitude: number;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class App extends Component {

    state = {
        m_location: null,
        m_latitude: null,
        m_longitude: null
    };


    createContapoint(data){
        axios({
            method: 'post',
            url: 'localhost:5000/set_contapoints',
            data: {
                latitude: this.state.m_latitude,
                longitude: this.state.m_longitude
            }
        });
    }

    onGetMyLocation = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    };

    constructor(props) {
        super(props);
        this.gotToMyLocation = this.gotToMyLocation.bind(this);
        this.createContapoint = this.createContapoint.bind(this);
        this.state= {
            mapMargin:1,
            markers: []
        }
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(e) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    cost: `$${getRandomInt(50, 300)}`
                }
            ]
        })
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
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location);
                return location;
                //this.setState({ region });
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    componentWillMount(){
        this.gotToMyLocation();
        console.log("longitude ", this.state.m_longitude)
    }

  render() {
        //const { locations, position } = this.gotToMyLocation()
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
              onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
          >
            <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} />
            <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
            <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
            <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
            <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
            <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
            <Marker coordinate={{ latitude: 46.936984, longitude: 7.792644 }} />
            <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
            <Marker
                coordinate={{ latitude: 46.936595, longitude: 7.792590 }}>
            <View style={styles.button}>
                <Text style={{color: 'red'}}>{"7/10"}</Text>
            </View>
          </Marker>
            <Marker coordinate={{ latitude: 46.937226, longitude: 7.792061 }} />
            <Marker coordinate={{ latitude: 46.936935, longitude: 7.791678 }} />
              {
                  this.state.markers.map((marker, i) => (
                      <MapView.Marker key={i} coordinate={marker.latlng} />
                  ))
              }
          </MapView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*<TouchableOpacity*/}
                {/*    // onPress={() => this.gotToMyLocation}*/}
                {/*    onPress={this.gotToMyLocation}*/}
                {/*    style={{*/}
                {/*        borderWidth:1,*/}
                {/*        borderColor:'rgba(0,0,0,0.2)',*/}
                {/*        alignItems:'center',*/}
                {/*        justifyContent:'center',*/}
                {/*        width:100,*/}
                {/*        height:100,*/}
                {/*        backgroundColor:'#15354F',*/}
                {/*        borderRadius:50,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Icon name={"crosshairs"} type = 'font-awesome'  size={75} color="#239AE0" />*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity
                    // onPress={() => this.gotToMyLocation}
                    //onPress={this.handlePress}
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
