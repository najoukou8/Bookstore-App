import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {Alert} from 'react-native';

const Account = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth().currentUser;
      if (user) {
        setUserEmail(user.email);
        const userRef = database().ref('users/' + user.uid);
        userRef
          .once('value', snapshot => {
            const userData = snapshot.val();
            if (userData) {
              setUserName(userData.fullName || ''); 
              setUserAddress(userData.address || '');
            }
          })
          .catch(error => {
            console.error('Error fetching user data: ', error);
          });
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Welcome'))
      .catch(error => Alert.alert('Error', error.message));
  };

  const handleUpdateAddress = () => {
    if (!newAddress.trim()) {
      Alert.alert('Error', 'Address cannot be empty');
      return;
    }
  
    const user = auth().currentUser;
    if (user) {
      const userRef = database().ref('users/' + user.uid);
      userRef
        .update({ address: newAddress }) 
        .then(() => {
          setUserAddress(newAddress);
          setIsModalVisible(false);
          Alert.alert('Success', 'Address updated successfully');
        })
        .catch(error => Alert.alert('Error', error.message));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topText}> Account </Text>
      <Icon
        style={styles.icon}
        name="user-circle-o"
        size={100}
        color={'black'}
      />

      <View style={styles.InfoContainer}>
        <Text style={styles.infos}> Name:</Text>
        <Text style={styles.infoText}>{userName}</Text>
      </View>
      <View style={styles.InfoContainer}>
        <Text style={styles.infos}> Email:</Text>
        <Text style={styles.infoText}>{userEmail}</Text>
      </View>
      
      <View style={styles.InfoContainer}>
        <Text style={styles.infos}> Address:</Text>
        <Text style={styles.infoText}>{userAddress || 'Address not set'}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => setIsModalVisible(true)}>
          <Text style={styles.editText}>Edit Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log out </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Enter your address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new address"
            value={newAddress}
            onChangeText={setNewAddress}
          />
          <Button title="Save" onPress={handleUpdateAddress}  color="#004D7A" />
          <Button
            title="Cancel"
            onPress={() => setIsModalVisible(false)}
            color="red"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    padding: 30,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  topText: {
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'center',
  },
  InfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#DEDEDE',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    maxHeight: 'auto',
  },
  infos: {
    fontSize: 16,
    color: '#121212',
  },
  infoText: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 50,
    fontSize: 16,
    color: '#121212',
  },
  editBtn: {
    margin: 10,
    width: 150,
    height: 50,
    backgroundColor: '#004D7A',
    borderRadius: 40,
  },
  editText: {
    color: '#DEDEDE',
    alignSelf: 'center',
    margin: 10,
  },
  logoutBtn: {
    margin: 10,
    width: 150,
    height: 50,
    backgroundColor: '#F2F2F2',
    borderBlockColor: '#004D7A',
    borderRadius: 40,
    borderWidth: 1,
  },
  logoutText: {
    color: '#004D7A',
    alignSelf: 'center',
    margin: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
export default Account;
