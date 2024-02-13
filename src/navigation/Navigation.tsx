import React from 'react';
import HomeScreen from "../assets/screens /HomeScreen";
import OtherScreen from "../assets/screens /OtherScreen";
import CustomNavigationBar from "./CustomNavigationBar";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Alarms from "../assets/screens /Alarms";
import CalendarFC from '../assets/screens /CalendarFC'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
        <Tab.Navigator tabBar={() => <CustomNavigationBar /> }>
            <Tab.Screen name="Calendar" component={CalendarFC} options={{ headerShown: false }}/>
            <Tab.Screen name="Alarms" component={Alarms} options={{ headerShown: false }}/>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Other" component={OtherScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </SafeAreaView>
    );
};

const AppWithNavigation: React.FC = () => {
    return (
        <>
            <AppNavigator />
        </>
    );
};

export default AppWithNavigation;