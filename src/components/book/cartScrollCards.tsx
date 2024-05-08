import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import CartItem from './cartCard';  
import { Book } from '../../types/book';



interface CartListProps {
  books: Book[];
  onRemove: (id: string) => void;
}

const { width } = Dimensions.get('window'); 

const CartList: React.FC<CartListProps> = ({ books, onRemove }) => {
    const numPages = Math.ceil(books.length / 2);
    const pages = Array.from({ length: numPages }, (_, index) => {
    const pageContent = books.slice(index * 2, (index + 1) * 2);
    return (
      <View style={styles.pageContainer} key={index}>
        {pageContent.map(book => (
         <View style={styles.itemContainer}>
            <CartItem
                    key={book.id}
                    title={book.title} 
                    author={book.author} 
                    genre={book.category}
                    price={book.price}
                    imageUri={book.imageUrl}
                    onRemove={() => onRemove(book.id)}         />
          </View>
        ))}
      </View>
    );
  });

  return (
    <FlatList
      data={pages}
      renderItem={({ item }) => item}
      keyExtractor={(_, index) => index.toString()}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',

  },
  itemContainer: {
    marginBottom: 10,
  },
  pageContainer: {
    width: width - 40,  // Adjust width based on your container's padding/margin
    flexDirection: 'column',  // Stack items vertically
    justifyContent: 'center',
  },
});

export default CartList;
