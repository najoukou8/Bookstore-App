import React  from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Profile = () => {
    return(
<View style={styles.container}>
<Text style={styles.topText}> Account  </Text>
<Icon style={styles.icon} name="user-circle-o" size={150} color={"black"}/>

<View style={styles.InfoContainer}>
    <Text style={styles.infos}> Name:</Text>
    <Text style={styles.infoText}>Name</Text>
</View>
<View style={styles.InfoContainer}>
<Text style={styles.infos}> Email:</Text>
    <Text style={styles.infoText}>email@email.com</Text>
</View>
<View style={styles.InfoContainer}>
<Text style={styles.infos}> Password:</Text>
    <Text style={styles.infoText}>email@email.com</Text>
</View>
<View style={styles.InfoContainer}>
<Text style={styles.infos}> Address:</Text>
    <Text style={styles.infoText}>long address grenoble long address grenoble long address grenoble </Text>
</View>
<View style={styles.btnContainer}>
<TouchableOpacity  style={styles.editBtn}>
    <Text style={styles.editText}>Edit </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.logoutBtn}>
    <Text style={styles.logoutText}>Log out </Text>
    </TouchableOpacity>
</View>


</View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F2F2F2',
        textAlign:'center',
        padding:30,
    },
    icon:{
        alignSelf:"center",
        marginBottom:20,
    },
    topText:{
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:10,
        color:'black',
        alignSelf:"center",

    },
    InfoContainer:{
        flexDirection:"row",
        justifyContent: "flex-start",
        backgroundColor:"#DEDEDE",
        borderRadius:20,
        padding: 20,
        marginTop:20,
        maxHeight:"auto",
    },
    infos:{
        fontSize:16,
        color:"#121212",
    },
    infoText:{
        fontWeight:"bold",
        paddingLeft:10,
        paddingRight:50,
        fontSize:16,
        color:"#121212",

    },
    editBtn:{
    margin:10,
    width: 150,
    height:50,
    backgroundColor:"#004D7A",
    borderRadius:40,
    },
    editText:{
        color:"#DEDEDE",
        alignSelf:'center',
        margin:10,
    },
    logoutBtn:{
        margin:10,
        width: 150,
        height:50,
        backgroundColor: '#F2F2F2',
        borderBlockColor:"#004D7A",
        borderRadius:40,
        borderWidth: 1,
    },
    logoutText:{
    color:"#004D7A",
    alignSelf:'center',
    margin:10,
    },
    btnContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        position: 'absolute',
        bottom: 50,
        alignSelf:"center",
    }
});
export default Profile;
