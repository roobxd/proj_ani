import { CompositeScreenProps } from "@react-navigation/core";
import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import { AuthStackScreenProps } from "./RootStackNavigator";
import { useTheme } from "@react-navigation/native";
import { FunctionComponent } from "react";
import Login from "../screens/auth/Login";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
  };
  
  
  export type LoginScreenProps = CompositeScreenProps<StackScreenProps<AuthStackParamList, 'Login'>, AuthStackScreenProps>
  
  const Stack = createStackNavigator<AuthStackParamList>();
  
  const AuthStackNavigator: FunctionComponent = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Login"} component={Login}/>
        </Stack.Navigator>
    )
}

export default AuthStackNavigator;