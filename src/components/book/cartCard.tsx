import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Book } from '../../types/book';

interface CartItemProps {
    book : Book;
    onRemove: () => void;
  }
  
  const CartItem: React.FC<CartItemProps> = ({ book, onRemove }) => {
    const [quantity, setQuantity] = useState(1);
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.genre}>{book.category}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${(book.price * quantity).toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 7,
  },
  image: {
    width: 60,
    height: 90,
    resizeMode: 'cover',
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,

    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',    color : "#fff",
  },
  genre: {
    color: '#fff',
  },
  quantity: {
    color: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',    color : "#fff",
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  price: {
    fontWeight: 'bold',    color : "#fff",
  },
  removeButton: {
    padding: 5,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 5,
  },
});

export default CartItem;
