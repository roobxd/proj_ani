import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import AnimalDetail from "../screens/main/animal/AnimalDetail";
import AnimalList from "../screens/main/animal/AnimalList";

export type AnimalStackScreenProps = {
    AnimalList: undefined,
    AnimalDetail: undefined,
};

export type AnimalListStackScreenProps = StackScreenProps<AnimalStackScreenProps, 'AnimalList'>;
export type AnimalDetailStackScreenProps = StackScreenProps<AnimalStackScreenProps, 'AnimalDetail'>;

const AnimalStackNavigator: FunctionComponent = () => {


    const Stack = createStackNavigator<AnimalStackScreenProps>();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="AnimalList"
                component={AnimalList}
                
            />
            <Stack.Screen 
                name="AnimalDetail"
                component={AnimalDetail}
            />
        </Stack.Navigator>    
    )
}

export default AnimalStackNavigator;