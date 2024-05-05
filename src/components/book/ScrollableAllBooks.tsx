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

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ScrollableAllBooks = () => {
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
        const shuffledBooks = shuffleArray(booksArray);
        const top10Books = shuffledBooks.slice(0, 10);
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
  listContainer: {},
  contentContainer: {
    paddingRight: 0,
    marginBottom: 0,
  },
  bookItem: {
    marginRight: 10,
  },
  bookImage: {
    width: Dimensions.get('window').width / 2.5,
    height: 150,
  },
  bookInfo: {
    padding: 5,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 5,
  },
  indicatorActive: {
    backgroundColor: '#000',
  },
});

export default ScrollableAllBooks;
