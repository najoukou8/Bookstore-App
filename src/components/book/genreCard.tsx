import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

interface Book {
    genre: string;
    backgroundImage: any;
} 

const SearchBar: React.FC<Book> = ({backgroundImage, genre})=> {
    return (
        <ImageBackground source={backgroundImage} style={styles.container} imageStyle={styles.backgroundImage}>
            <LinearGradient
                colors={['rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.8)']}
                style={styles.container1}
            >
            <Text style={styles.title}>{genre}</Text>
            </LinearGradient>
            
        </ImageBackground>
    )
};




const styles = StyleSheet.create({
    container: {
        height: 110,
        width: 150,
        borderRadius: 5, 
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        elevation: 7,
          
    },
    container1:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 5,
    },
    backgroundImage: {
        resizeMode: "cover",
        borderRadius: 5,
    },
    title:{
        textAlign: 'center',
        color: 'white',
    },

    });

export default SearchBar;