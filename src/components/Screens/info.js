import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Button from '../Button/Button';

const InfoScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = onPress => {
    // Process the input data or navigate to the next screen
    console.log({name, age, gender, description});

    // Example: navigation.navigate('NextScreen', { name, age, gender, description });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Info!</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        placeholderTextColor="#888"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Gender:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your gender"
        placeholderTextColor="#888"
        value={gender}
        onChangeText={setGender}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        placeholder="Describe your condition"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Submit" onPress={() => navigation.navigate('Mcqs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d3f5d5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 6,
    color: '#333',
  },
});

export default InfoScreen;
