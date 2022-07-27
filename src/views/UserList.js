import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import Usuarios from '../data/Users'
import { ListItem, Button } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";


export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario ?', [
            {
                text: "Sim",
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Nao'

            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem>
                <ListItem.Content key={user.id}
                    onPress={() => props.navigation.navigate("UserForm", user)}
                >
                    <Avatar source={{ uri: user.avatarUrl }} />
                    <ListItem.Title style={{ fontSize: 20, fontWeight: 'bold' }}>{user.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ fontSize: 17 }}>{user.email}</ListItem.Subtitle>

                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.push("Userform", user)}
                    title={"edit"}
                    titleStyle={{ fontSize: 17 }}
                    buttonStyle={{ backgroundColor: "orange" }}
                    type="clear"

                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    title={"excl"}
                    titleStyle={{ fontSize: 17 }}
                    buttonStyle={{ backgroundColor: "red" }}
                    type="clear"
                />
            </ListItem>


        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={Usuarios}
                renderItem={getUserItem}
            />
        </View>
    )
}