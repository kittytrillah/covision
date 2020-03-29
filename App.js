/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {MapView, Permission} from 'expo';
import React, {Component} from 'react';
import Mapbox from '@react-native-mapbox-gl/maps/react-native-mapbox-gl';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styleMap from '@react-native-mapbox-gl/maps/javascript/utils/styleMap';
Mapbox.setAccessToken(
  `pk.eyJ1IjoibWpsYWp5IiwiYSI6ImNrOGM2b3A3dzAxcGozZ3Bxc3VhaWg0YzgifQ.e_UsxuoFGyYFZBzpurLr-w`,
);
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
          initialCenterCoordinate={[11.256, 43.77]}
          style={styles.container}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
//export default App;
