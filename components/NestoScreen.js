import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground } from 'react-native';


class NestoScreen extends Component {
  static navigationOptions = {
    title: 'Nesto',
  };
  render() {
    return (

      <ImageBackground source={require('../images/nesto.png')} style={{width: '100%', height: '100%'}}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    

        <Text>Nesto stoji ovde</Text>

        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
     
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
      </ImageBackground>

    );
  }
}

export default NestoScreen;