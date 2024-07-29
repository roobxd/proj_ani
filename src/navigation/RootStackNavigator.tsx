import React, {FunctionComponent} from 'react';
import {StackScreenProps, createStackNavigator} from "@react-navigation/stack"
import AuthStackNavigator from './AuthStackNavigator';
import LoggedInStackNavigator from './LoggedInStackNavigator';
import useStore from '../store/store';

export type RootStackParamList = {
  Auth: undefined;
  LoggedIn: undefined;
};

export type AuthStackScreenProps = StackScreenProps<RootStackParamList, 'Auth'>;
export type LoggedInStackScreenProps = StackScreenProps<RootStackParamList, 'LoggedIn'>;

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: FunctionComponent = () => {
    const {user} = useStore();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            {
                user ? 
                <Stack.Screen name={"LoggedIn"} component={LoggedInStackNavigator}/>
                :
                <Stack.Screen name={"Auth"} component={AuthStackNavigator}/>

            }
        </Stack.Navigator>
    );
};

export default RootStackNavigator;