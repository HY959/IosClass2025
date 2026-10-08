import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="register" />
      <Stack.Screen name="home" />
      <Stack.Screen name="resume" />
      <Stack.Screen name="work-experience" />
      <Stack.Screen name="certificates" />
      <Stack.Screen name="guidelines" />
      <Stack.Screen name="resume-analyzer" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
