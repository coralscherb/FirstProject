import React from 'react';
import { StyleSheet } from 'react-native';


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
  
    message: {
      borderWidth: 2,
      backgroundColor: "#D1F9B8",
    },
  
    button: {
      borderRadius: 15,
      backgroundColor: "#D19DF9",
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

  export default styles;