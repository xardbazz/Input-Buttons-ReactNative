import {ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [output, setOutput] = useState('');
 
  const handleReset = () => {
     setText1('');
     setText2('');
     setOutput('');
  };

  const createOutput = (input1: any, input2: any) => {
  return input1 + ' ' + input2;
  }

  return (
    <ScrollView>
      <Text style = {styles.headertext}>Input</Text>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
          style={styles.input}
          value={text1}
          onChangeText={setText1}
          />
      </View>
        <View style={styles.inputBox}>
          <TextInput
          style={styles.input}
          value={text2}
          onChangeText={setText2}
          />
        </View>
      </View>
      <Text style = {styles.headertext}>Buttons</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleReset}
          style={styles.primaryBtn}
            >
              <Text style={styles.primaryBtnTxt}>Rest Inputs</Text> 
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => setOutput(createOutput(text1, text2))}
          style={styles.primaryBtn}
            >
              <Text style={styles.primaryBtnTxt}>Update Input</Text> 
          </TouchableOpacity>
      </View>
    <Text style = {styles.headertext}>Update Results</Text>
    <View style={styles.container}>
    <Text style = {styles.results}>{output}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  inputBox: {
    marginVertical: 10,
 },
  input: {
    paddingHorizontal: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  primaryBtn: {
    width: 140,
    padding: 4,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  results: {
    marginTop: 30,
    paddingHorizontal: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

export default App;