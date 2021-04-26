import React, { useEffect, useState } from 'react'
import { TextInput, Text, ScrollView, Button, View, StyleSheet } from 'react-native'
import firebase from "../database/firebase";

const LoginScreen = (props) => {

    const initialState = {
        user: "",
        pssword: "",
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value,name) => {
        setState({...state, [name]: value})
    };

    const [users, setUsers] = useState([]);

    useEffect (()=>{
        firebase.db.collection('users').onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
                const { user, pssword } = doc.data()
                users.push({
                    id: doc.id,
                    pssword,
                    user,
                })
            })
            setUsers(users);
        })
    },[])

    const verify = () => {
        if (users.find( nombre => nombre.user === state.user && nombre.pssword === state.pssword )) {
            props.navigation.navigate('UserList')
        } else {
            alert ("Datos incorrectos")
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    onChangeText={(value) => handleChangeText(value, "user")}
                    placeholder="User"
                />
            </View>
           <View style={styles.inputGroup}>
                <TextInput 
                    onChangeText={(value) => handleChangeText(value, "pssword")}
                    placeholder="Password"
                />
            </View>
            <View>
                <Button 
                    title='Create User' 
                    onPress={() => verify()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default LoginScreen