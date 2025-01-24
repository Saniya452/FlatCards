import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Button from '../Button/Button';

const {width, height} = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Your Health, Our Priority</Text>
        <Text style={styles.subtitle}>
           Take control of your well-being today with Doctorly!
        </Text>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.loginButton}> Login </Button>
          <Button
            onPress={() => navigation.navigate('signup')}
            type={'#ff9f00'}
            style={styles.getStartedButton}>
            Get Started
          </Button>
        </View>
      </View>

      {/* Footer Section */}
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: height * 0.5,
    resizeMode: 'cover',
    borderRadius: 20, 
  },
  content: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingTop: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 20,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15
  },
  subtitle: {
    color: '#555',
    textAlign: 'center',
    fontSize: width * 0.04,
    marginVertical: 4,
    lineHeight: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginBottom: 10,
    color: 'white',
  },
  getStartedButton: {
    marginTop: 10,
      backgroundColor: '#ff9f00',
      fontSize: 20,
    color: '#fff'
  },
});

export default React.memo(Onboarding);
