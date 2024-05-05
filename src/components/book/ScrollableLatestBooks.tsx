import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BookCard from './bookCard';
import {useNavigation} from '@react-navigation/native';
import {navigateToBookDetails} from '../navigation';
import {Book} from '../../types/book';
import database from '@react-native-firebase/database';


const ScrollableLatestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const snapshot = await database().ref('/books').once('value');
      const booksData = snapshot.val();
      if (booksData) {
        const booksArray = Object.keys(booksData).map(key => {
          const book = {id: key, ...booksData[key]};
          return book;
        });
        booksArray.sort((a, b) => b.year - a.year);
        const top10Books = booksArray.slice(0, 10);
        setBooks(top10Books);
      }
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };

  const navigation = useNavigation();

  const handleBookPress = (book: Book) => {
    navigateToBookDetails(navigation, book);
  };

  if (!books || books.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.bookItem}>
            <TouchableOpacity onPress={() => handleBookPress(item)}>
              <BookCard
                title={item.title}
                author={item.author}
                price={item.price}
                category={item.category}
                imageLink={item.imageLink}
                description={item.description}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.title}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  flatList: {
    flexGrow: 0,
  },
 
  bookItem: {
    marginRight: 10,
  },
  
 
});

export default ScrollableLatestBooks;
