import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Alert } from "react-native";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Heading from "../components/heading";
import CartList from "../../src/components/book/cartScrollCards"; // Ensure this path is correct
import { Book } from "../types/book";


type CartRouteProp = RouteProp<
  {Cart: {book: Book}},
  'Cart'
>;

interface CartProps {
  route:CartRouteProp;
}

const Cart: React.FC<CartProps> = ({route}) => {
  const {book } = route.params ?? {};
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState<Book[]>([]);
  const [quantity, setQuantity]= useState(1);


  useEffect(() => {
    if (book) {
      setCartItems(prevCartItems => [...prevCartItems, book]);
    }
  }, [book]); 


  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };
  
   // Calculate subtotal and total discount
   const { subtotal, totalDiscount } = cartItems.reduce(
    (acc, item) => {
      acc.subtotal += item.price* quantity;
      if (item.discount) {
        acc.totalDiscount += item.price * item.discount* quantity;
      }
      return acc;
    },
    { subtotal: 0, totalDiscount: 0 }
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping - totalDiscount;
  const handleQuantityChange = ( newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart is already empty.');
    } else {
      Alert.alert(
        'Proceed to Checkout',
        'Successfull Checkout',
        [
          {
            text: 'OK',
            onPress: () => setCartItems([]),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Heading title="Cart" onPressBack={handleBack} />
      {cartItems.length > 0 ? (
        <ScrollView style={styles.listContainer}>
          <CartList books={cartItems} onRemove={handleRemoveItem} onQuantityChange={(newQuantity: number) => {handleQuantityChange( newQuantity)}}/>
        </ScrollView>
      ) : (
        <View style={styles.emptyCartBackground}>
          <View style={styles.emptyCartBg}>
            <ImageBackground
              source={require('../../src/assets/empty_cart.png')}
              style={styles.emptyCart}
            >
            </ImageBackground>
          </View>
            
        </View>
      )}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
        </View>
        {totalDiscount > 0 && (
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.value}>-${totalDiscount.toFixed(2)}</Text>
          </View>
        )}
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Shipping</Text>
          <Text style={styles.value}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
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
    marginTop:10,
  },
  emptyCartBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  emptyCartBg: {  
    width: '60%',
    height: '60%',
  },
  emptyCart: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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