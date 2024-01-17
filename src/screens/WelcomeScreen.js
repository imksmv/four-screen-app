import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react"
import { Text, View } from "react-native"

const WelcomeScreen = () => {
  const [fontLoaded, fontError] = useFonts({
    Inter: require("../fonts/Inter-Regular.ttf"),
    InterLight: require("../fonts/Inter-Light.ttf"),
    InterBold: require("../fonts/Inter-Bold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded, fontError])

  if (!fontLoaded) return

  return (
    <View onLayout={onLayoutRootView}>
      <Text>WelcomeScreen</Text>
    </View>
  )
}

export default WelcomeScreen
