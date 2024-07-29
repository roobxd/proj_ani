import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from "../screens/main/dashboard/Dashboard";
import LocationOverview from "../screens/main/location/LocationOverview";
import AnimalStackNavigator from "./AnimalStackNavigator";
import { Icon } from "lucide-react-native"
import { Home, List, Settings } from "lucide-react-native";
import { HomeIcon } from "lucide-react-native";
import useStore from "src/store/store";

export type LoggedInStackParamList = {
    LocationOverview: undefined,
    DashboardMain: undefined,
};

export type LoggedInBottomBarParamList = {
    Dashboard: undefined,
    Animals: undefined,
    Settings: undefined
}

export type LocationOverviewStackScreenProps = StackScreenProps<LoggedInStackParamList, 'LocationOverview'>;
export type DashboardStackScreenProps = StackScreenProps<LoggedInStackParamList, 'DashboardMain'>;

const Stack = createStackNavigator<LoggedInStackParamList>();
const Tab = createBottomTabNavigator<LoggedInBottomBarParamList>();

const MainTabNavigator = () => {
    const {selectedAnimal} = useStore();
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                headerTitleAlign: "left",
                headerShadowVisible: false,
                headerTitleStyle: {fontSize: 24},
                tabBarIcon: ({ focused }) => {

                    let iconColor = focused ? 'green' : 'black';

                    switch (route.name) {
                        case 'Dashboard':
                            return <Home color={iconColor} size={24} />;
                        case 'Animals':
                            return <List color={iconColor} size={24} />;
                        case 'Settings':
                            return <Settings color={iconColor} size={24} />;
                        default:
                            return null;
                    }
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'black',
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            })}
            >
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Animals" component={AnimalStackNavigator}/>
            <Tab.Screen name="Settings" component={Dashboard} options={{headerTitle: "Settings"}} />
        </Tab.Navigator>
    );
};

const LoggedInStackNavigator: FunctionComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="LocationOverview" 
                component={LocationOverview} 
                options={{ headerTitle: "Selecteer een locatie", headerShadowVisible: false }} 
            />
            <Stack.Screen 
                name="DashboardMain" 
                component={MainTabNavigator} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}

export default LoggedInStackNavigator;