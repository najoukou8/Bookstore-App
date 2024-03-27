import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import GenreCard from "../components/book/genreCard";
import { FontFamily } from "../assets/style/globalStyles";

const Search = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <Text style={styles.title}>Genres</Text>
            <View style={styles.section}> 
                <GenreCard backgroundImage={{uri:"https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg"}} genre="Classics" />
                <GenreCard backgroundImage={{uri:"https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc"}} genre="Non-fiction" />
                <GenreCard backgroundImage={{uri:"https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg"}} genre="Classics" />
                <GenreCard backgroundImage={{uri:"https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc"}} genre="Non-fiction" />
                <GenreCard backgroundImage={{uri:"https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg"}} genre="Classics" />
               
            </View>
        </View>
      );
    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", 
        padding: 20,
    }, 
    title:{
        fontFamily: FontFamily.openSansSemiBold,
        fontWeight: "600",
        top: 30,
        fontSize: 20,
        color: "black",
        paddingLeft: 20,
      },
      section:{
        marginTop: 55,
        flexWrap: 'wrap',
        flexDirection: 'row',
        
      },
    });

export default Search;