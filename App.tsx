// In App.js in a new project

import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { WorkSans_500Medium, WorkSans_600SemiBold, WorkSans_700Bold } from '@expo-google-fonts/work-sans'

import theme from './src/styles/theme';

import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold
  });

  if (!fontsLoaded) return <Text>Carregando ...</Text>;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
}

export default App;