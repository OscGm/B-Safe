import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";

import firebase from '../database/firebase'


const UserList = (props) =>{

    const [users, setUsers] = useState([]);

    useEffect (()=>{
        firebase.db.collection('users').onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
                const { email, lastname, name, phone, pssword, user } = doc.data()
                users.push({
                    id: doc.id,
                    email,
                    lastname,
                    name,
                    phone,
                    pssword,
                    user,
                })
            })
            setUsers(users);
        })
    },[])
    return(
        <ScrollView>
            <Button 
                title='Create User' 
                onPress={() => props.navigation.navigate("RegistryScreen")}
            />

            {users.map((user)=>{
                return(
                    <ListItem key={user.id} bottomDivider onPress={ () => { props.navigation.navigate( 'DetailUserScreen', { userId: user.id })}}>
                        <ListItem.Chevron />
                        <Avatar rounded />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
                );
            })} 
        </ScrollView>
    )
}

export default UserList