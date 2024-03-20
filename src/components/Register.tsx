import React, { PropsWithChildren } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';


const Register = (navigation: PropsWithChildren<any>) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
      <Icon  name="arrowleft" size={30} color="black"  />
        </TouchableOpacity>
        <Text style={styles.topText}> Register  </Text>
      </View>

      <View style={styles.fillingContainer}>
    <Text style={styles.TextRegister}> Please fill your details to signup.</Text>
    <TextInput style={styles.Input}  placeholder="Username" />
    <TextInput style={styles.Input}  placeholder="Email" />
    <TextInput style={styles.Input} placeholder="Password" secureTextEntry={true} />
    <TextInput style={styles.Input} placeholder="Confirm Password" secureTextEntry={true} />
    
    <TouchableOpacity  style={styles.registerBtn}>
    <Text style={styles.registerText}>Register </Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.googleBtn}>
      <Icon name='google' size={20} color="#DB4437" />
    <Text style={styles.registerGoogle}> Sign up with google</Text>
    </TouchableOpacity>
    </View>   

    <View style={styles.loginContainer}>
    <Text style={styles.loginText}>Already a member?</Text> 
    <Text style={styles.loginWord} onPress={()=>navigation.navigate('SignIn')}>SignIn</Text>
    
   
    </View>   
    </View>
  );
};
const styles= StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: '#F2F2F2',
  textAlign:'center',
  padding:30,
  },
  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
  },
 
  topText:{
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:10,
    color:'black',

    },
  fillingContainer:{
    flex:1,
    alignItems: 'stretch',
    alignContent: 'center',

  },
  TextRegister:{
    fontSize: 16,
    color:'black',
    marginBottom:30,
  },
 Input:{
    backgroundColor:"#DEDEDE",
    borderRadius:20,
    padding:10,
    marginTop: 20,
    height:56,
  },
 
  registerBtn:{
    height:50,
    backgroundColor:"#004D7A",
    borderRadius:40,
    marginTop:20,
  },
  registerText:{
    color:"#DEDEDE",
    alignSelf:'center',
    alignContent:'center',
    margin:10,
    },
    googleBtn:{
        marginTop:40,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        height:50,
        backgroundColor: '#F2F2F2',
        borderBlockColor:"#004D7A",
        borderRadius:40,
        borderWidth: 1,
      },
      registerGoogle:{
        color:"#004D7A",
        margin:10,
  
      },

    loginContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        textAlign:'center',
      },
      loginText:{
        color:'black',
       
      },
      loginWord:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontStyle:'italic',
      },
   
});

export default Register;
