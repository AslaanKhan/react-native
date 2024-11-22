import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
export default function OnBoarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white ">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className={`w-full flex justify-end items-end p-5`}
      >
        <Text className={`text-black text-md font-JakartaBold`}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className={`w-[32px] h-[4px] mx-1 bg-[#E2E8F0] `} />}
        activeDot={
          <View className={`w-[32px] h-[4px] mx-1 bg-black rounded-full`} />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboarding.map((item) => {
          return (
            <View
              key={item.id}
              className={`flex justify-center items-center p-5`}
            >
              <Image
                source={item.image}
                className={`w-full h-[300px]`}
                resizeMode={`contain`}
              />
              <View
                className={`flex flex-row items-center justify-center w-full mt-10`}
              >
                <Text
                  className={`text-black text-3xl font-bold items mx-10 text-center`}
                >
                  {item.title}
                </Text>
              </View>
              <Text
                className={`text-center text-[#858585] mx-10 mt-3 text-md font-JakartaBold`}
              >
                {item.description}
              </Text>
            </View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}
