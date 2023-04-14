import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import ProfileScreen from '../screens/profile-screen';
import RegisterScreen from '../screens/register-screens';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}