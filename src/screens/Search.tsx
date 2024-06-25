import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {FontFamily} from '../assets/style/globalStyles';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/searchBar';
import database from '@react-native-firebase/database';
import navigateToBookDetails from '../components/navigation';
import BookCard from '../components/book/bookCard';
import GenreCard from '../components/book/genreCard';
import { Book } from '../types/book';

const Search = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBookPress = (book: Book) => {
    navigateToBookDetails(navigation, book);
  };
  const handleSearch = query => {
    setSearchQuery(query);
    setSelectedCategory('');
  };
  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    fetchBooks();
  }, [searchQuery,selectedCategory]);

  const fetchBooks = async () => {
    setLoading(true); 
    try {
      const snapshot = await database().ref('/books').once('value');
      const booksData = snapshot.val();
      if (booksData) {
        const booksArray = Object.keys(booksData).map(key => ({
          id: key,
          ...booksData[key],
        }));
        let filteredBooks = [];
        if (selectedCategory) {
          filteredBooks = booksArray.filter(book => book.category === selectedCategory);
        } else {
          filteredBooks = booksArray.filter(
            book =>
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.author.toLowerCase().includes(searchQuery.toLowerCase()),
          );
        }
        setSearchedBooks(filteredBooks);
      }
    } catch (error) {
      console.error('Error fetching books: ', error);
    } finally{
      setLoading(false); 
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
                id={book.id}
                rating={book.rating}
                discount={book.discount}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderCategories  = () => {
    
    return (
      <View style={styles.section}>
        <TouchableOpacity onPress={() => handleCategoryPress('Fiction')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg',
            }}
            genre="Fiction"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Non-fiction')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc',
            }}
            genre="Non-fiction"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Fantasy')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc',
            }}
            genre="Fantasy"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Mystery')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg',
            }}
            genre="Mystery"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Romance')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc',
            }}
            genre="Romance"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Biography')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg',
            }}
            genre="Biography"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
     
      <ScrollView>
      <Text style={styles.title}>Categories</Text>
        {renderCategories()}
        <Text style={styles.title}>Books</Text>
        {loading ? ( 
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : (
          renderBookGrid()
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center', 

  },
  title: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    top: 30,
    fontSize: 20,
    color: 'black',
    paddingLeft: 20,
  },
  gridContainer: {
    marginTop: 55,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 20,

  },

  BookContainer: {
    width: Dimensions.get('window').width / 2 - 20, 
    marginVertical: 10,
  },
  section: {
    marginTop: 55,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  loader: {
    marginTop: 50,
  },
});

export default Search;
