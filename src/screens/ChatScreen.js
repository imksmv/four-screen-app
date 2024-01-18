import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { SafeAreaView } from "react-native-safe-area-context"
import Matches from "../component/Matches.js"
import { chatData } from "../constans"

const android = Platform.OS === "android"

export default function ChatScreen() {
  return (
    <SafeAreaView
      className=""
      style={{
        paddingTop: android ? hp(2) : 0,
      }}
    >
      <View className="px-4">
        <Text className="uppercase font-semibold text-neutral-500 tracking-wider">
          Matches
        </Text>
      </View>

      <Matches />

      {/* Search Bar */}

      <View className="flex-row items-center justify-center mx-3">
        <TextInput
          placeholder="Search"
          placeholderTextColor={"gray"}
          style={{
            fontSize: hp(2),
          }}
          className="text-base tracking-widest w-[100%] border border-black/30 p-2 rounded-xl"
        />
      </View>

      {/* Chat List */}

      <View className="px-4">
        <View className="border-b border-neutral-300 py-4">
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider">
            Chat
          </Text>
        </View>

        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="w-full py-3 items-center flex-row border-b border-neutral-300">
              {/* Avatar */}
              <View
                style={{
                  width: hp(7),
                  height: hp(7),
                }}
              >
                <Image
                  source={item.imgUrl}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                  className="rounded-full"
                />
              </View>

              {/* Information */}
              <View
                className="w-[82%]"
                style={{
                  height: hp(6),
                }}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-center">
                    <View className="flex-row gap-1">
                      <Text className="font-bold text-base">{item.name},</Text>
                      <Text className="font-bold text-base mr-1">
                        {item.age}
                      </Text>
                    </View>
                    {item.isOnline && (
                      <View className="justify-center items-center">
                        <View className="w-2 h-2 bg-[#EA3325] rounded-full ml-1 justify-center items-center"></View>
                      </View>
                    )}
                  </View>
                  <Text className="text-sm tracking-tight">
                    {item.timeSent}
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold text-xs text-neutral-500">
                    {item.lastMessage.length > 45
                      ? item.lastMessage.slice(0, 45) + "..."
                      : item.lastMessage}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
