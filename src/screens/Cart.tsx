import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Heading from "../components/heading";
import CartList from "../../src/components/book/cartScrollCards"; // Ensure this path is correct

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    { id: '1', title: 'Tuesday Mooney Talks to Ghosts', author: 'F. Scott Fitzgerald', category:"drama", price: 33, imageUrl: 'https://example.com/image1.jpg', description:'' },
    { id: '2', title: 'Hello, Dream', author: 'F. Scott Fitzgerald', price: 17, category:"drama", imageUrl: 'https://example.com/image2.jpg' , description:''},
    { id: '3', title: 'Darkness', author: 'F. Scott Fitzgerald', price: 17, category:"drama",  imageUrl: 'https://example.com/image3.jpg' , description:''},
  ]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;
  

  return (
    <View style={styles.container}>
      <Heading title="Cart" onPressBack={handleBack} />
      <ScrollView style={styles.listContainer}>
        <CartList books={cartItems} onRemove={handleRemoveItem} />
      </ScrollView>
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Shipping</Text>
          <Text style={styles.value}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log('Proceed to Checkout')}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  listContainer: {
    flex: 1,
  },
  summary: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalLabel: {
    fontSize: 18,
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
