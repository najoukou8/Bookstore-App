import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {FontFamily} from '../assets/style/globalStyles';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/searchBar';
import GenreCard from '../components/book/genreCard';

const Search = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
    navigation.navigate('SearchResults', { searchQuery: query });
  };

  const navigateToCategoryBooks = category => {
    navigation.navigate('CategoryBooks', {category});
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Text style={styles.title}>Categories</Text>
      <View style={styles.section}>
        <TouchableOpacity onPress={() => navigateToCategoryBooks('Fiction')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg',
            }}
            genre="Fiction"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToCategoryBooks('Non-fiction')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc',
            }}
            genre="Non-fiction"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToCategoryBooks('Fantasy')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc',
            }}
            genre="Fantasy"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToCategoryBooks('Mystery')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg',
            }}
            genre="Mystery"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToCategoryBooks('Romance')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cab020e5e93f99799ce9f7eab364ebc',
            }}
            genre="Romance"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToCategoryBooks('Biography')}>
          <GenreCard
            backgroundImage={{
              uri: 'https://i.dailymail.co.uk/1s/2022/03/02/01/54828855-0-image-a-3_1646184600349.jpg',
            }}
            genre="Biography"
          />
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    top: 30,
    fontSize: 20,
    color: 'black',
    paddingLeft: 20,
  },
  section: {
    marginTop: 55,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default Search;

