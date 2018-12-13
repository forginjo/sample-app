import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  static navigationOptions = {
    title: 'Details',
  };

  dodaj() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            color="#841584"
            title="Idi na Nesto"
            onPress={() => this.props.navigation.navigate('Nesto')}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            color="#841584"
            title="Dodaj"
            onPress={this.dodaj.bind(this)}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text>{this.state.count}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            color="#841584"
            title="Idi na logovanje"
            onPress={() => this.props.navigation.navigate('Logovanje')}
          />
        </View>

      </View >
    );
  }
}

export default DetailsScreen;