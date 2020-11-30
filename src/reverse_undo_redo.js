import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function reverse_undo_redo() {
  const [input, setInput] = useState('');
  const [previnput, setPrevinput] = useState(['', '']);
  const [output, setOutput] = useState('');

  const handleReverse = () => {
    let val = previnput;
    val.push(input);
    val.shift();
    setPrevinput(val);
    let reverse = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reverse += input[i];
    }
    setOutput(reverse);
  };

  const handleUndoRedo = () => {
    let val = previnput;
    setPrevinput([val[1], val[0]]);
    setInput(val[0]);

    let reverse = '';
    for (let i = val[0].length - 1; i >= 0; i--) {
      reverse += val[0][i];
    }
    setOutput(reverse);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/66575b45647dfa771d87d796a38bf26d.png',
        }}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <Text style={styles.textOutput}>Output: {output}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => handleReverse()}>
            Reverse
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => handleUndoRedo()}>
            Undo/Redo
          </Text>
        </TouchableOpacity>
      </View>
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
