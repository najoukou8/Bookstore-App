import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import database from '@react-native-firebase/database';

const TestBook = () => {
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
        const discountedBooks = booksArray.filter(book => !!book.discount);

        setBooks(discountedBooks);
      }
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {books.map(book => (
        <View key={book.id}>
          <Image source={{uri: book.imageLink}} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.category}>{book.category}</Text>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.price}>{book.price}</Text>
            <View style={styles.discountBox}>
              <Text style={styles.discountText}>{book.discount * 10}% off</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 270,
    overflow: 'hidden',
    elevation: 2,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    display: 'flex',
    color: 'white',
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
    color: 'white',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  discountBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  discountText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
});



export default TestBook;
