import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <TouchableOpacity  >
                 <Icon name="search-outline" size={24} color="black" style={styles.searchIconContainer} />
            </TouchableOpacity>
            <TextInput placeholder="Search by title/author..." style={styles.searchInput}/>
        </View>
      );
    };

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        borderRadius: 5,
        width: '85%',
        marginTop: 10,
        borderBottomColor:"black",
        borderBottomWidth: 1,
        
      },
      searchIconContainer: {
        justifyContent: 'center', 
        marginRight: 10,
      },
      searchInput: {
        marginLeft: 10,
        flex: 1,
        fontSize: 16,
      
      },
    });

export default SearchBar;