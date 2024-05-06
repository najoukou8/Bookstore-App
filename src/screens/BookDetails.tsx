import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {Book} from '../types/book';
import Heading from '../components/heading';

type BookDetailsRouteProp = RouteProp<
  {BookDetails: {book: Book}},
  'BookDetails'
>;

interface BookDetailsProps {
  route: BookDetailsRouteProp;
}

const BookDetails: React.FC<BookDetailsProps> = ({route}) => {
  // Extract the book object from the route params
  const {book } = route.params;
  const navigation = useNavigation();

  const handleBack = () => {
      navigation.goBack();

  };
  const onPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View>
        <Heading title="Details" onPressBack={handleBack} />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{book.title}</Text>
      </View>
      <View style={styles.topSection}>
        <View style={styles.imageContainer}>
          <Image source={{uri: book.imageLink}} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.author}>Author: </Text>
            <Text style={styles.author1}>{book.author}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.author}>Genre: </Text>
            <Text style={styles.category}>{book.category}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.author}>Rating: </Text>
            <Text style={styles.price}>{book.rating}/5</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.author}>Price: </Text>
            <Text style={styles.price}>{book.price}€</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.descriptionView}>
        <Text style={styles.author}>Description: </Text>
        <Text style={styles.description}>{book.description}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
  },
  infoContainer: {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: 140,
    height: 250,
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
  },
  descriptionView: {
    marginTop: 30,
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  author: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
  },
  author1: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    height: 45,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
  },
});

export default BookDetails;
