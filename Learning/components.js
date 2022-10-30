import React from 'react';
import { Text } from 'react-native';

import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Cat extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  }
}

class MessageButton extends Component {
  state = { isYetToSend : true };
  value = setState(" ");

render() {
  return (
    <View>
      <TextInput style={styles.TextInput} defaultValue="Write a message" />
      <Button class="message"
      onPress={() => {
        this.setState({ isYetToSend : false});
      }}
      title={
        this.state.isYetToSend ? "Send message" : "Sent!"       
       }
       disabled={!this.state.isYetToSend}
      />
      <Text>

      </Text>
    </View>
  );
};
}

const App = () => {
return (
  <View style={styles.container}>
  <ScrollView style>
  <View>
    <Flower name="Tulip" />
      <Flower name="Daffodil" />
      </View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.image}
      />
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue="You can type in me"
    />
    <MessageButton style={styles.button} />
  </ScrollView>
  </View>
);
}

const getFullName = (animal) => {
return (
  <Text>
    Hello, I am {(animal)}
  </Text>
) 
};

const Cat = () => {
return (
<ScrollView>
  <View style={styles.container}>
  <Text style={styles.text}>
    {getFullName("monkey")}!
    </Text>
    <Text style={styles.text}>
    {getFullName("kitty")}!
  </Text>
  <MessageButton />
  <App />
  <ScrollView>
    <App />
    <App />
  </ScrollView>
  <App />
  <Flower name="Rose" />
  </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
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
    padding: 10
  },

  button: {
    borderRadius: 10,
    backgroundColor: "#29b6f6",
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
    borderWidth: 2,
    backgroundColor: "white",
    borderBottomStartRadius: 4,
    padding: 3,
    width: 300,
    height:100,

  }

});


export default Cat;