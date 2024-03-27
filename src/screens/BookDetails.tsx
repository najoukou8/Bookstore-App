import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Heading from "../components/heading";


const BookDetails = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); 
  };

    return (
        <View style={styles.container}>             
            <View>
                <Heading title="Details" onPressBack={handleBack} />
            </View> 
         
          <Text>View details books</Text>
         </View>
        );
    };
    const styles= StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#F2F2F2',
            textAlign:'center',
            padding:20,
        },    });



export default BookDetails;