import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Book } from '../../types/book';



const BookCardDeal: React.FC<Book> = ({
  title,
  author,
  category,
  price,
  imageLink,
  discount,
}) => {
  const discountPercentage = parseInt(parseFloat(discount) * 100);
  return (
    <View style={styles.container}>
      <Image source={{uri: imageLink}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.price}>{price}€</Text>
        <View style={styles.discountBox}>
          <Text style={styles.discountText}>{discountPercentage}% off</Text>
        </View>
      </View>
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

export default BookCardDeal;
