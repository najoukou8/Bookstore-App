import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeadingHome from "../components/headingHome";
import ScrollableBookListDeal from "../components/book/ScrollableBookListDeal";
import ScrollableBook from "../components/book/ScrollableBook";
import { FontFamily } from "../assets/style/globalStyles";




const Home = () => {

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); 
  };
  



    return (
        <ScrollView style={styles.container}>   
            <HeadingHome title="Happy Reading!" onPressBack={handleBack} />          
             <View style={ [styles.section, styles.section1]}> 
                <Text style={styles.subTitles}>Best Deals</Text>
                <ScrollableBookListDeal/> 
             </View>
             <View style={styles.section}> 
                <Text style={styles.subTitles}>Top Books</Text>
                <ScrollableBook/>
             </View>
             <View style={styles.section}> 
                <Text style={styles.subTitles}>Latest Books</Text>
                <ScrollableBook/>
             </View>
             <View style={styles.section}> 
                <Text style={styles.subTitles}>Upcoming Books</Text>
                <ScrollableBook/>
             </View>             
        </ScrollView>
    );
};
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        textAlign:'center',
        padding:20,

    }, 
    section1:{
      top:30,
      marginBottom:50,
    },
    section: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
   
      },
      subTitles:{
        fontFamily: FontFamily.openSansSemiBold,
        fontWeight: "600",
        bottom: 10,
        fontSize: 18,
        marginBottom:5,
        color: "black",
      }
   });
export default Home;