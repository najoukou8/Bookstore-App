import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import BookCard from '../components/book/bookCard';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import navigateToBookDetails from '../components/navigation';
import Heading from '../components/heading';


const CategoryBooks = ({route}) => {
  const {category} = route.params;
  const [books, setBooks] = useState([]);
  const navigation= useNavigation();

  const handleBack = () => {
    navigation.navigate('Search');
  };
const handleBookPress = (book: Book) => {
    navigateToBookDetails(navigation, book);
  };
  useEffect(() => {
    fetchBooks();
  }, [category]);

  const fetchBooks = async () => {
    try {
      const snapshot = await database().ref('/books').once('value');
      const booksData = snapshot.val();
      if (booksData) {
        const booksArray = Object.keys(booksData).map(key => {
          const book = {id: key, ...booksData[key]};
          return book;
        });
        const filteredBooks = booksArray.filter(
          book => book.category === category,
        );
        setBooks(filteredBooks);
      }
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };

  const renderBookGrid = () => {
    return (
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {books.map((book, index) => (
          <TouchableOpacity key={index} onPress={() => handleBookPress(book)}>
            <View style= {styles.BookContainer}>
            <BookCard
              title={book.title}
              author={book.author}
              price={book.price}
              category={book.category}
              imageLink={book.imageLink}
              description={book.description}
            />
            </View>
           
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
         <View>
        <Heading title={category} onPressBack={handleBack} />
      </View>
      {renderBookGrid()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin :20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  
  BookContainer:{
    width: Dimensions.get('window').width / 2 - 20, // Adjust the width to occupy half of the screen width with some margin
    marginVertical: 10,
  }
});

export default CategoryBooks;

