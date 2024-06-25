import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useState} from 'react';
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

const SignIn = ({navigation}: PropsWithChildren<any>) => {
  const navigationback = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleBack = () => {
    navigationback.goBack();
  };


  const hundleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Pleae enter email and password');
      return;
    }
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoading(false);
        Alert.alert('Success', 'Signed in successfully');
        navigation.navigate('Main');
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
        Alert.alert('Error', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.topText}>Get started</Text>
      </View>

      <View style={styles.fillingContainer}>
        <Text style={styles.Textlogin}>Please fill your details to login.</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.pswContainer}>
          <TextInput
            style={styles.pswInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Icon name="eye" size={20} color={'black'} />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={hundleSignIn}
          disabled={isLoading}>
          <Text style={styles.loginText}>Get started </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleBtn}>
          <Icon name="google" size={20} color="#DB4437" />
          <Text style={styles.loginGoogle}> Sign in with google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>New member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerWord}>Register</Text>
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
  Textlogin: {
    fontSize: 16,
    color: 'black',
    marginBottom: 30,
  },
  emailInput: {
    backgroundColor: '#DEDEDE',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    height: 56,
  },
  pswContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DEDEDE',
    borderRadius: 20,
    padding: 5,
    height: 56,
    marginTop: 20,
  },
  pswInput: {
    backgroundColor: '#DEDEDE',
  },
  forgot: {
    color: 'black',
    padding: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  loginBtn: {
    height: 50,
    backgroundColor: '#004D7A',
    borderRadius: 40,
  },
  loginText: {
    color: '#DEDEDE',
    alignSelf: 'center',
    alignContent: 'center',
    margin: 10,
  },
  googleBtn: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderBlockColor: '#004D7A',
    borderRadius: 40,
    borderWidth: 1,
  },
  loginGoogle: {
    color: '#004D7A',
    margin: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  registerText: {
    color: 'black',
  },
  registerWord: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default SignIn;
