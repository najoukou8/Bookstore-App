import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../assets/style/globalStyles';
import {Book} from '../../types/book';

const BookCard: React.FC<Book> = ({
  title,
  author,
  category,
  price,
  imageLink,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image source={{uri: imageLink}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.price}>{price}€</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: 230,
    width: 140,
    overflow: 'hidden',
    elevation: 5,
    borderRadius: 5,
  },
  cover: {
    flex: 2,
    backgroundColor: Color.colorSilver_200,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    minHeight: 55,
    backgroundColor: 'black',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
    color: 'white',
    left: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    display: 'flex',
    color: 'white',
    left: 10,
  },
  author: {
    left: 10,
    fontSize: 11,
    marginBottom: 5,
    color: 'white',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  category: {
    top: 5,
    left: 10,
    fontSize: 12,
    marginBottom: 5,
    color: 'white',
  },
});

export default BookCard;
