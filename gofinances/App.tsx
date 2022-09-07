import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/screens/global/styles/theme'

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'

export default function App() {

    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    SplashScreen.hideAsync();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </ThemeProvider>
    )
}

