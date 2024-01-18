import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import WelcomeScreen from "../screens/WelcomeScreen"
import ChatDetailsScreen from "../screens/ChatDetailsScreen"
import HomeScreen from "../screens/HomeScreen"
import ChatScreen from "../screens/ChatScreen"
import ProfileScreen from "../screens/ProfileScreen"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const AppNavigation = () => {
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName = ""

            route.name === "Home"
              ? (iconName = "home")
              : route.name === "Chat"
              ? (iconName = "chatbubbles-outline")
              : route.name === "Profile"
              ? (iconName = "person-outline")
              : ""

            return (
              <Ionicons
                name={iconName}
                size={22}
                color={focused ? "#3B82F6" : "gray"}
              />
            )
          },

          tabBarActiveTintColor: "#3B82F6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
          },
        })}
      >
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
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
