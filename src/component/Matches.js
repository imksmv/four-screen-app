import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { datesData } from "../constans"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

export default function Matches() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingLeft: hp(2),
          paddingRight: hp(2),
        }}
      >
        {datesData?.map((matches, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1"
            >
              <View className="rounded-full">
                <Image
                  source={matches.imgUrl}
                  style={{
                    width: hp(6),
                    height: hp(6),
                  }}
                  className="rounded-full"
                />
              </View>

              <Text
                className="text-neutral-800 font-bold mb-4"
                style={{
                  fontSize: hp(1.6),
                }}
              >
                {matches.name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
