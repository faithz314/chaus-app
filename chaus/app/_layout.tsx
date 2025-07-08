import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Righteous: require('../assets/fonts/Righteous-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      
       {/* ABOUT PAGE */}
          <Stack.Screen
          name="sustainability"
          options={{
            presentation: 'modal',
            headerShown: true,
          }}
          />
          <Stack.Screen
          name="managers"
          options={{
            presentation: 'modal',
            headerShown: true,
          }}
          />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
