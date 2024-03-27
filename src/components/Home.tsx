
import React, { PropsWithChildren } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';


const Home= ({navigation}: PropsWithChildren<any>)=>{
    return (
        <View style={styles.container}>
            <View style={styles.Imagecontainer}>
           <Image style={styles.cover}
            source={require('../assets/books.png')}/>
       
            <Image style={styles.logo}
            source={require('../assets/logo.png')}/>
        </View>
    <View style={styles.buttomContainer}>
      <Text style={styles.Text}>Read more and stress less with our online book shopping app. Shop from anywhere you are and discover titles that you love. Happy reading!</Text>
      
      <TouchableOpacity  style={styles.loginBtn} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginText}  >Get started </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('Register')} >
        <Text style={styles.RegisterText}>Register </Text>
        </TouchableOpacity>
    </View>
    
        </View>
      
       
        );  

};
const styles= StyleSheet.create({
    container:{
      flex:1,
     
    },
    Imagecontainer:{
  
    },
  cover:{
    position: 'absolute',
      top: 0,
      width: '100%',
  },
  logo:{
    position: 'absolute',
    alignSelf: 'center',
    top:400,
    
  },
  buttomContainer:{
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  Text:{ 
    color:"#004D7A",
    fontSize:16,
    marginBottom:20,
    textAlign:'center',
  },
  loginBtn:{
    height:50,
    backgroundColor:"#004D7A",
    borderRadius:40,
    marginTop:20,
  
  },
  loginText:{
    color:"#DEDEDE",
    alignSelf:'center',
    alignContent:'center',
    margin:10,
    },
    RegisterText:{
      marginTop:20,
      color:"#004D7A",
      fontWeight:'bold',
      alignSelf:'center',
    }
  })
    
export default Home;