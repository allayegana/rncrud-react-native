import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserForm from "./views/UserForm";
import UserList from "./views/UserList";
import { Button } from "react-native-elements";
import { UsersProvider } from "./context/userContext";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator

                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"

                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuarios",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        title={"+"}
                                        type="clear"
                                        titleStyle={{ fontSize: 35, color: "#fff" }}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{ title: "Formulario de Usuarios" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30
    }
}