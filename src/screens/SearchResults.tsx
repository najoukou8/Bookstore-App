import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BookCard from '../components/book/bookCard';
import database from '@react-native-firebase/database';
import navigateToBookDetails from '../components/navigation';
import { useNavigation } from '@react-navigation/native';
import { Book } from '../types/book';
import NavBar from '../components/navbar';
import SearchBar from '../components/searchBar';

const SearchResults = ({route}) => {
  const {searchQuery} = route.params;
  const [searchedBooks, setSearchedBooks] = useState([]);
  const navigation = useNavigation();

  const handleBookPress = (book: Book) => {
    navigateToBookDetails(navigation, book);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const snapshot = await database().ref('/books').once('value');
      const booksData = snapshot.val();
      if (booksData) {
        const booksArray = Object.keys(booksData).map(key => ({
          id: key,
          ...booksData[key],
        }));
        const filteredBooks = booksArray.filter(
          book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setSearchedBooks(filteredBooks);
      }
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };

  const renderBookGrid = () => {
    return (
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {searchedBooks.map((book, index) => (
          <TouchableOpacity key={index} onPress={() => handleBookPress(book)}>
            <View style={styles.BookContainer}>
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
    <SearchBar/>
    {renderBookGrid()}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  BookContainer: {
    width: Dimensions.get('window').width / 2 - 20, // Adjust the width to occupy half of the screen width with some margin
    marginVertical: 10,
  },
});

export default SearchResults;
