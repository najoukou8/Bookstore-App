import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Book } from '../../types/book';

interface CartItemProps {
    book : Book;
    onRemove: () => void;
    onQuantityChange: (newQuantity: number) => void; 
  }
  
  const CartItem: React.FC<CartItemProps> = ({ book, onRemove, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const { width: cardWidth } = Dimensions.get('window');
    const imageWidth = cardWidth * 0.2;
  
    const increaseQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
        };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.imageLink }} style={[styles.image, { width: imageWidth }]} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.genre}>{book.category}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
            <Text style={styles.decrease}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${(book.price * quantity).toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text style={styles.delete}>X</Text>
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
    height: 110,
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
  decrease: {
    fontSize: 18,
    color: 'black',   
  },
  delete: {
    fontSize: 18,
    color: '#fff',
  },
  plus: {
    fontSize: 18,
    color: 'black',    

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
    borderRadius: 5,
    alignItems: 'center',
    width: '10%',
    justifyContent: 'center', 
    backgroundColor: '#fff',
  },
  price: {
    fontWeight: 'bold',    color : "#fff",
  },
  removeButton: {
    padding: 5,
    color: 'white',
    borderRadius: 5,
  },

  
});

export default CartItem;