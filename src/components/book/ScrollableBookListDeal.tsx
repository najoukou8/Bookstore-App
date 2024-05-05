import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import BookCardDeal from './bookCardDeal';
import { ViewToken } from 'react-native';
import database from '@react-native-firebase/database';

const ScrollableBookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const snapshot = await database().ref('/books').once('value');
      const booksData = snapshot.val();
      if (booksData) {
        const booksArray = Object.keys(booksData).map(key => {
          const book = {id: key, ...booksData[key]};
          return book;
        });
        const discountedBooks = booksArray.filter(book => !!book.discount);

        setBooks(discountedBooks);
      }
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };


  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef(null);
  const itemWidth = Dimensions.get('window').width / 2.5 + 10;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      // Update the type of viewableItems
      const visibleIndex = viewableItems[0]?.index;
      if (visibleIndex !== undefined && visibleIndex !== activeIndex) {
        setActiveIndex(visibleIndex);
      }
    },
  ).current;

  const calculateVisibleIndex = (offsetX: number) => {
    const index = Math.floor(offsetX / itemWidth);
    return Math.min(index, books.length - 1);
  };

  const renderIndicator = (index: any) => {
    return (
      <View
        key={index}
        style={[styles.indicator, index === activeIndex && styles.indicatorActive]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={books}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <BookCardDeal {...item} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()} // Use index as the key extractor since books don't have unique identifiers
          style={styles.flatList}
          contentContainerStyle={styles.contentContainer}
          onViewableItemsChanged={onViewableItemsChanged}
          onScroll={event => {
            const { contentOffset } = event.nativeEvent;
            const visibleIndex = calculateVisibleIndex(contentOffset.x);
            setActiveIndex(visibleIndex);
          }}
        />
      </View>
      <View style={styles.indicatorsContainer}>
        {books.map((_, index) => renderIndicator(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  flatList: {},
  listContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingRight: 0,
    marginBottom: 0,
  },
  bookItem: {
    marginRight: 10,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    paddingTop: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 5,
  },
  indicatorActive: {
    backgroundColor: '#000',
  },
});

export default ScrollableBookList;
