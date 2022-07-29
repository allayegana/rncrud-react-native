import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import UsersContext from "../context/userContext";
export default ({ route, navigation }) => {

    const { dispatch }= useContext(UsersContext)
    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={style.form}>
            <Text style={style.label} >Nom</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="digit seu nome"
                value={user.name}
            />
            <Text style={style.label} >Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="digit seu email"
                value={user.email}
            />
            <Text style={style.label} >Photo</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="digit seu o url de avatar"
                value={user.avatarUrl}
            />

            <Button
               titleStyle={{ fontSize: 17, width:30 }}
               buttonStyle={{ backgroundColor: "orange", color:"white" }}
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser': 'createUser',
                        payload:user
                    })
                    navigation.goBack()
                }}
            />

        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    label: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",

    },
    botao:{
        fontWeight:"bold",
        fontSize:15,
        color:"white",
        backgroundColor:"orange",
        width:30,
        justifyContent:"center",
        alignItems:"center"
    }


})