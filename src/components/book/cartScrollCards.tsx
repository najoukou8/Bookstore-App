import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CartCard from './cartCard';  
import { Book } from '../../types/book';



interface CartListProps {
  books: Book[];
  onRemove: (id: string) => void;
  onQuantityChange: (newQuantity: number) => void; 
}

const { width } = Dimensions.get('window'); 

const CartList: React.FC<CartListProps> = ({ books, onRemove, onQuantityChange }) => {
    const numPages = Math.ceil(books.length / 2);
    const [currentPage, setCurrentPage] = React.useState(0);
    const pages = Array.from({ length: numPages }, (_, index) => {
    const pageContent = books.slice(index * 2, (index + 1) * 2);

    const handleQuantityChange = ( newQuantity: number) => {
      onQuantityChange(newQuantity);
    };
     
      


    return (
      <View style={styles.pageContainer} key={index}>
        {pageContent.map(book => (
         <View style={styles.itemContainer} key={book.id}>
            <CartCard
                    book={book}
                    onRemove={() => onRemove(book.id)}  
                    onQuantityChange={(newQuantity: number) => {handleQuantityChange( newQuantity)}} 
       />
          </View>
        ))}
      </View>
    );
  });

  return (
    <View style={styles.container}>
     <FlatList
      data={pages}
      renderItem={({ item }) => item}
      keyExtractor={(_, index) => index.toString()}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      onScroll={(event) => {
        const page = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentPage(page);
      }}
    />
     <View style={styles.dotsContainer}>
        {Array.from({ length: numPages }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              index === currentPage ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {
    alignItems: 'center',
    borderWidth: 1,
      borderColor: 'gree',

  },
  itemContainer: {
    marginBottom: 10,
  },
  pageContainer: {
    width: width - 40,  
    flexDirection: 'column',  
    justifyContent: 'center',
    paddingHorizontal : 7,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333333',
  },
});

export default CartList;