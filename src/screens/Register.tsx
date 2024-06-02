import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useState} from 'react';
import database from '@react-native-firebase/database';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import auth from '@react-native-firebase/auth';

const Register = (props: PropsWithChildren<any>) => {
  const navigationback = useNavigation();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleBack = () => {
    navigationback.goBack();
  };

  const authHandler = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (!email || !password || !confirmPassword || !fullName) {
      Alert.alert('Error', 'Pleae enter all the filled');
      return;
    }

    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Save additional user data to Firestore
        database()
          .ref('users/' + user.uid)
          .set({
            fullName: fullName,
            email: email,
          })
          .then(() => {
            Alert.alert('User created');
            setIsLoading(false);
            navigation.navigate('SignIn');
          })
          .catch(error => {
            console.error(
              'Error saving user data to Realtime Database: ',
              error,
            );
            Alert.alert('Error', 'Failed to save user data');
            setIsLoading(false);
          });
      })
      .catch(error => {
        console.error('Error updating user profile: ', error);
        Alert.alert('Error', 'Failed to update user profile');
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.topText}> Register </Text>
      </View>

      <View style={styles.fillingContainer}>
        <Text style={styles.TextRegister}>
          {' '}
          Please fill your details to signup.
        </Text>
        <TextInput
          style={styles.Input}
          placeholder="full name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.Input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.Input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.Input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={authHandler}
          disabled={isLoading}>
          <Text style={styles.registerText}>Register </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleBtn}>
          <Icon name="google" size={20} color="#DB4437" />
          <Text style={styles.registerGoogle}> Sign up with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    padding: 30,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
  },

  topText: {
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  fillingContainer: {
    flex: 1,
    alignItems: 'stretch',
    alignContent: 'center',
  },
  TextRegister: {
    fontSize: 16,
    color: 'black',
    marginBottom: 30,
  },
  Input: {
    backgroundColor: '#DEDEDE',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    height: 56,
  },

  registerBtn: {
    height: 50,
    backgroundColor: '#004D7A',
    borderRadius: 40,
    marginTop: 20,
  },
  registerText: {
    color: '#DEDEDE',
    alignSelf: 'center',
    alignContent: 'center',
    margin: 10,
  },
  googleBtn: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderBlockColor: '#004D7A',
    borderRadius: 40,
    borderWidth: 1,
  },
  registerGoogle: {
    color: '#004D7A',
    margin: 10,
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  loginText: {
    color: 'black',
  },
  loginWord: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Register;
