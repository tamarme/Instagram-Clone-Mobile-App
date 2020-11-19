import React from 'react';
import Home from '../Pages/Home/Home';
import Search from '../Pages/Search/Search';
import AddPhoto from '../Pages/AddPhoto/AddPhoto';
import Notifications from '../Pages/Notifications/Notifications';
import Profile from '../Pages/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Search') {
                        size = 28;
                        iconName = focused ? 'search1' : 'search1';
                    } else if (route.name === 'Add Photo') {
                        size = 30;
                        iconName = focused ? 'plus' : 'plus';
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'heart' : 'hearto';
                        color = focused ? 'red' : 'grey';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'user' : 'user';
                    }

                    return <AntDesign name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Add Photo" component={AddPhoto} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator >
    )
}

export default Main