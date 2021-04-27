import React, { useState } from "react";
import {Button,View,StyleSheet,TextInput,ScrollView,} from "react-native";

import firebase from "../database/firebase";

const RegistryScreen = (props) =>{
    const initialState = {
        user: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
        pssword: "",
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value,name) => {
        setState({...state, [name]: value})
    };

    const saveNewUser = async () => {
        if(state.name === "" || state.email==="" || state.lastname==="" || state.user==="" || state.pssword==="" || state.phone==="") {
            alert ("Ingrese todos los datos")
        } else {
            try {
                await firebase.db.collection("users").add({
                    user: state.user,
                    name: state.name,
                    lastname: state.lastname,
                    email: state.email,
                    phone: state.phone,
                    pssword: state.pssword,
                });
                props.navigation.navigate('LoginScreen')
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <ScrollView style={styles.container}>
        {/* User Input */}
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="User"
              onChangeText={(value) => handleChangeText(value, "user")}
              value={state.user}
            />
          </View>
    
        {/* Name Input */}
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Name"
              onChangeText={(value) => handleChangeText(value, "name")}
              value={state.name}
            />
          </View>

        {/* Name Input */}
        <View style={styles.inputGroup}>
            <TextInput
              placeholder="Last Name"
              onChangeText={(value) => handleChangeText(value, "lastname")}
              value={state.lastname}
            />
          </View>
    
        {/* Email Input */}
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Email"
              onChangeText={(value) => handleChangeText(value, "email")}
              value={state.email}
            />
          </View>
    
        {/* Phone Input */}
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Phone"
              keyboardType='number-pad'
              onChangeText={(value) => handleChangeText(value, "phone")}
              value={state.phone}
            />
          </View>
        
        {/* Password Input */}
        <View style={styles.inputGroup}>
            <TextInput
              placeholder="Password"
              onChangeText={(value) => handleChangeText(value, "pssword")}
              value={state.pssword}
            />
          </View>

        {/* Button */}
          <View style={styles.button}>
            <Button title="Save User" onPress={() => saveNewUser()} />
          </View>
        </ScrollView>
      );
    };
    
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
    
    export default RegistryScreen;
    