import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  
  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity>
        <Icon
          name="search-outline"
          size={24}
          color="black"
          style={styles.searchIconContainer}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Search by title/author..."
        style={styles.searchInput}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '87%',
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    left: 20,
  },
  searchIconContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
