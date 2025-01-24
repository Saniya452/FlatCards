import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%', 
    height: 50, 
    backgroundColor: '#4CAF50', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8, 
    marginVertical: 10, 
  },
  text: {
    color: '#FFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
