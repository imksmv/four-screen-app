import { Image, View, Text, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { CheckBadgeIcon } from "react-native-heroicons/solid"

const DatesCard = ({ item }) => {
  const { width, height } = Dimensions.get("window")

  return (
    <View className="relative">
      <Image
        source={item.imgUrl}
        style={{
          width: width,
          height: height * 0.8,
        }}
        resizeMode="cover"
        className="rounded-3xl"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 1 }}
      />

      <View className="absolute bottom-10 justify-start w-full items-start pl-4">
        <View className="flex-row justify-center items-center">
          <Text className="text-2xl text-white font-bold">
            {item.name} {item.lastName},
          </Text>
          <View className="flex-row gap-2 items-center">
            <Text className="text-2xl text-white font-bold ml-2">
              {" "}
              {item.age}
            </Text>
            <CheckBadgeIcon size={25} color="#3B82F6" />
          </View>
        </View>

        <View className="flex-row gap-2">
          <Text className="text-lg text-white">{item.city},</Text>
          <Text className="text-lg text-white">{item.country}</Text>
        </View>
      </View>
    </View>
  )
}

export default DatesCard
