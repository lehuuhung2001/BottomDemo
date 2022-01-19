import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screen
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';
import SettingScreen from './screens/SettingScreen';



const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName={"Home"}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === "Home") {
                iconName = focused ? 'home' : 'home-outline';

              } else if (rn === "Details") {
                iconName = focused ? 'list' : 'list-outline';

              } else if (rn === "Settings") {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Details"} component={DetailScreen} />
        <Tab.Screen name={"Settings"} component={SettingScreen} />
        
        </Tab.Navigator>
    </NavigationContainer>

    );

}