import React, { useContext } from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import usersContext from "../context/userContext";



export default props => {

    const { state, dispatch } = useContext(usersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario ?', [
            {
                text: "Sim",
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Nao'

            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate("UserForm", user)}
                bottomDivider
            >

                <ListItem.Content key={user.id}>

                    <View style={{ flexDirection: 'row' }}>
                        <Avatar source={{ uri: user.avatarUrl }} />
                        <ListItem.Title style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{user.name}</ListItem.Title>
                    </View>
                    <ListItem.Subtitle style={{ fontSize: 17 }}>{user.email}</ListItem.Subtitle>

                </ListItem.Content>

                <Icon
                    onPress={() => {
                        dispatch({
                            type: user.id ? 'updateUser' : 'createUser',
                            payload: user
                        })
                        props.navigation.navigate("UserForm", user)
                    }}

                    name='edit'
                    color='orange'
                    size={27}
                />


                <Icon

                    onPress={() => confirmUserDeletion(user)}

                    name='delete'
                    color='red'
                    size={25}
                />
            </ListItem>


        )
    }

    return (
        <SafeAreaProvider>
            <View>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={state.Users}
                    renderItem={getUserItem}
                />
            </View>
        </SafeAreaProvider>
    )
}