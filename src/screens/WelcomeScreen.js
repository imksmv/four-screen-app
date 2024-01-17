import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { ArrowUpRightIcon } from "react-native-heroicons/outline"
import { useNavigation } from "@react-navigation/native"

const WelcomeScreen = () => {
  const navigation = useNavigation()

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
    <View
      className="flex-1"
      style={{ width: wp(100) }}
      onLayout={onLayoutRootView}
    >
      <View
        className="items-center justify-center"
        style={{ width: wp(100), height: hp(100) }}
      >
        {/* Heart Image */}
        <View className="justify-center" style={{ width: wp(100) }}>
          <Image
            source={require("../../assets/heart.png")}
            style={{ width: wp(100), height: hp(40) }}
            resizeMode="cover"
          />
        </View>

        {/* Welcome Text */}
        <View className="w-full px-10">
          <Text
            className="tracking-widest leading-none"
            style={{
              fontSize: wp(9),
              fontFamily: "InterBold",
            }}
          >
            Embrace
          </Text>

          <Text
            className="tracking-widest w-[80%] leading-none"
            style={{
              fontSize: wp(9),
              fontFamily: "InterBold",
            }}
          >
            A New Way of Matchmaking
          </Text>

          <Text
            className="text-gray-700 leading-6 tracking-wider mt-2"
            style={{
              fontSize: wp(3.5),
              fontFamily: "InterLight",
            }}
          >
            We combine technologies and scientific advancements with a
            contemporary, advanced approach to matchmaking.
          </Text>
        </View>

        <View className="w-full px-10">
          <TouchableOpacity
            className="border border-[#EA3325] flex-row justify-center items-center px-6 py-4 mt-4 rounded-2xl w-[45%]"
            onPress={() => navigation.navigate("HomeTabs")}
          >
            <View className="flex flex-row items-center gap-1">
              <Text>Get started</Text>
              <ArrowUpRightIcon size={14} strokeWidth={2.5} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen
