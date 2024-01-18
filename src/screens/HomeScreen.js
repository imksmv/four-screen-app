import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { SafeAreaView } from "react-native-safe-area-context"
import { user1 } from "../../assets/images"
import { BellIcon } from "react-native-heroicons/outline"
import Carousel from "react-native-reanimated-carousel"
import { datesData } from "../constans"
import DatesCard from "../component/DatesCard"

const HomeScreen = () => {
  const android = Platform.OS === "android"
  const { width, height } = Dimensions.get("window")

  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={{
        paddingTop: android ? hp(2) : 0,
      }}
    >
      {/* Header */}
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        <View className="rounded-full items-center justify-center">
          <Image
            source={user1}
            style={{
              width: hp(4.5),
              height: hp(4.5),
              resizeMode: "cover",
            }}
            className="rounded-full"
          />
        </View>

        <View>
          <Text className="text-xl font-semibold text-center uppercase">
            STACKS Dates
          </Text>
        </View>

        {/* Bell Icon */}
        <View className="bg-black/10 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            <BellIcon size={25} strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousal */}
      <View className="mx-4">
        <Text className="capitalize text-2xl font-semibold">
          Find your love
        </Text>
      </View>

      <Carousel
        className="-mt-10"
        loop
        width={width}
        height={height}
        data={datesData}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 80,
        }}
        renderItem={({ item }) => <DatesCard item={item} />}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
