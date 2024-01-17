import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import WelcomeScreen from "../screens/WelcomeScreen"
import ChatDetailsScreen from "../screens/ChatDetailsScreen"
import HomeScreen from "../screens/HomeScreen"
import ChatScreen from "../screens/ChatScreen"
import ProfileScreen from "../screens/ProfileScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const AppNavigation = () => {
  const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetailsScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
