import {NavigationContainer} from "@react-navigation/native";
import AppWithNavigation from "./src/navigation/Navigation";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppWithNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
