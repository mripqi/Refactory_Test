import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

export default function sort() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [text, setText] = useState([]);
  const [condition, setCondition] = useState(false);

  const handleSort = () => {
    console.log(input);
    setCondition(true);
    let inputArr = input.split(' ');
    let len = inputArr.length;
    let val = 0;
    let process = [];
    console.log('initial', inputArr);
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          let tmp = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tmp;
          val += 1;

          let sentence = `${val}. [${inputArr[j + 1]},${
            inputArr[j]
          }] -> ${inputArr.join(' ')}`;
          process.push(sentence);
        }
      }
    }
    console.log(val);
    console.log(inputArr);
    console.log('text', process);
    setText(process);
    setOutput(val);
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setInput(text)}
          value={input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => handleSort()}>
            Sort
          </Text>
        </TouchableOpacity>
        <FlatList
          data={text}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.textOutput}>{item}</Text>
              </View>
            );
          }}
        />
        <Text style={styles.textOutput}>Jumlah Swap: {output}</Text>
      </View>
    </ScrollView>
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
    marginTop: 10,
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
