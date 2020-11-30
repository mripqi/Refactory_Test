import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Reverse')}>
          Reverse
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Sort')}>
          Sort
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  textOutput: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 3.6,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#8F32EB',
    alignSelf: 'center',
    width: '40%',
    height: 40,
    marginRight: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 20,
    textTransform: 'uppercase',
  },
});
