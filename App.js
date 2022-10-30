import { StatusBar } from 'expo-status-bar';
import React, { Component, setState, useState } from 'react';
import { Platform, StyleSheet, Button, Text, View, ScrollView, ToastAndroid, TouchableOpacity, Image, TextInput, ShadowPropTypesIOS, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import './style.jsx';


const Flower = (props) => {
  return (
    <View>
    <Text style={styles.text}>Here is a {props.name} for you!</Text>
    <Text style={styles.text}>{props.fl}</Text>
    </View>
  )
}

 class Counter extends React.Component {
  state = {
    value: 4
  }
  increase = () => {
    this.setState({
      value: this.state.value+1
    });
  }
  decrease = () => {
    this.setState({
      value: this.state.value-1
    });
    }

  render() {
    return (
      <View>
        <Text>{this.state.value}</Text>
        <Button onPress={this.increase} title="Plus One" style={styles.button} />
        <Button onPress={this.decrease} title="Minus One" style={styles.button} />
      </View>
    );
  }
 }


class SendMessage extends Component {
  state = { isSent : false };

  render() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} value={this.state.value}></TextInput>
      <Button title='Send message' color="#D19DF9" 
      onPress={() => { this.setState({ isSent : true }); }}
      >
      </Button>
        <Text class="message" style={styles.message}>{this.state.isSent ? 'Thanks for your message!' : null}</Text>
        <Flower name='rose' fl='🌹'/>
        <Text style={styles.text}>🌹</Text>
        <Counter />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,

  container: {
    flex: 1,
    backgroundColor: '#B8F9E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    color: "purple",
    fontSize: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    borderWidth: 2,
    backgroundColor: "#D1F9B8",
  },

  button: {
    borderRadius: 15,
    backgroundColor: "#D19DF9",
    color: "#D19DF9",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 300,
    width: 300,
  },

  TextInput: {
    borderWidth: 1,
    backgroundColor: "white",
    borderBottomStartRadius: 4,
    padding: 3,
    width: 300,
    height:100,

  }

});


export default SendMessage;

