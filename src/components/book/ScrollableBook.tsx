import React from 'react';
import { View,StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import BookCard from './bookCard';
import { useNavigation } from '@react-navigation/native';
import { navigateToBookDetails } from '../navigation';
import { Book } from '../../types/book';


const ScrollableBook = () => {


    const book1 = {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Classics',
        price: '$12.99',
        discount:'12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
        imageUrl: 'https://static01.nyt.com/images/2013/04/26/business/Gatsbyjp/Gatsbyjp-superJumbo.jpg', 
      };
      const book2 = {
        title: '1984',
        author: 'George Orwell',
        category: 'Classics',
        price: '$12.99',
        discount:'12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
        imageUrl: 'https://images.epagine.fr/251/9782017080251_1_75.jpg', 
      };
      const book3 = {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        category: 'Classics',
        price: '$12.99',
        discount:'12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
        imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/02bbc540531495.57836e92d8e40.jpg',
      };
    
    const books = [book1, book2, book3];

    const navigation = useNavigation();

    const handleBookPress = (book:Book) => {
        navigateToBookDetails(navigation, book);
     };

    if (!books || books.length === 0) {
        return null; 
    }
    return (
        <View style={styles.container}>
                <FlatList
                    data={books}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.bookItem}>
                             <TouchableOpacity onPress={() => handleBookPress(item)}>
                                <BookCard title={item.title} author={item.author} price={item.price} category={item.category} imageUrl={item.imageUrl} description={item.description} />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.title}
                    style={styles.flatList}
                    contentContainerStyle={styles.contentContainer}
                />
        </View>
    );
 
};
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    flatList: {
        flexGrow: 0,
 
    },
    contentContainer: {
        paddingRight: 0, 
        marginBottom:0,
    },
    bookItem: {
        marginRight: 10, 
    },
     
});

export default ScrollableBook;
