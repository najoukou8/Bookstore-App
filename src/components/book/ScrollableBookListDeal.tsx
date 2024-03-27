import React, { useRef, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import BookCardDeal from './bookCardDeal';
import { ViewToken } from 'react-native';


const ScrollableBookList = () => {
    const book1 = {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Classics',
        price: '$12.99',
        discount:'12',
        imageUrl: 'https://static01.nyt.com/images/2013/04/26/business/Gatsbyjp/Gatsbyjp-superJumbo.jpg', 
      };
      const book2 = {
        title: '1984',
        author: 'George Orwell',
        category: 'Classics',
        price: '$12.99',
        discount:'12',
        
        imageUrl: 'https://images.epagine.fr/251/9782017080251_1_75.jpg', 
      };
      const book3 = {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        category: 'Classics',
        price: '$12.99',
        discount:'12',
        imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/02bbc540531495.57836e92d8e40.jpg',
      };
    
    const books = [book1, book2, book3];
      
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const flatListRef = useRef(null);
    const itemWidth = Dimensions.get('window').width / 2.5 + 10;

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => { // Update the type of viewableItems
        const visibleIndex = viewableItems[0]?.index;
        if (visibleIndex !== undefined && visibleIndex !== activeIndex) {
            setActiveIndex(visibleIndex);
        }
    }).current;

    const calculateVisibleIndex = (offsetX: number) => {
        const index = Math.floor(offsetX / itemWidth);
        return Math.min(index, books.length - 1);
    };

    const renderIndicator = (index: any) => {
      return (
        <View key={index} style={[styles.indicator, index === activeIndex && styles.indicatorActive]} />
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
                    keyExtractor={item => item.title}
                    style={styles.flatList}
                    contentContainerStyle={styles.contentContainer}
                    onViewableItemsChanged={onViewableItemsChanged}
                    onScroll={(event) => {
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
    flatList: {
  
    },
    listContainer: {
        flex: 1,
    },
    contentContainer: {
        paddingRight: 0, 
        marginBottom:0,
    },
    bookItem: {
        marginRight: 10, 
    },
    bookImage: {
        width: Dimensions.get('window').width / 2.5,
        height: 150,
    },
    bookInfo: {
        padding: 5,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bookAuthor: {
        fontSize: 14,
    },
    indicatorsContainer: {
        flexDirection: 'row',
        flex:2,
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
