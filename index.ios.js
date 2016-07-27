/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    this.setBlinker();
  }

  setBlinker() {
   setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    let pic = { uri: "https://abitor2.files.wordpress.com/2013/07/monkey-smile.jpg" };
    return (
      <View style={styles.container}>
        <View style={styles.containerS1}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
        <View style={[styles.containerS2, styles.containerCenter]}>
          <Image source={pic} style={{width: 200, height: 200}}/>
          <Text>This is a monkey</Text>
        </View>
        <View style={styles.containerS3}>
          <Text>
            <Greeting name='Rexxar' />{'\n'}
            <Greeting name='Jaina' />{'\n'}
          </Text>
          <Text style={styles.focus}>
            <Blink text='Limited offer!'/>
          </Text>
        </View>
        <View style={[styles.containerS2]}>
          <Text>Pizza translator</Text>
          <PizzaTranslator/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerS1: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  containerS2: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  containerS3: {
    flex: 3,
    backgroundColor: 'steelblue'
  },
  containerCenter: {
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  focus: {
    color: 'red',
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
