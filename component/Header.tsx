import { images } from '@/constant';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
    let totalItems = 10;
  return (
    <View className="flex-between flex-row w-full my-5">
     <View className="flex-start">
                          <Text className="small-bold text-primary">DELIVER TO</Text>
                          <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                              <Text className="paragraph-bold text-dark-100">Croatia</Text>
                              <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
                          </TouchableOpacity>
                      </View>
     <TouchableOpacity className="cart-btn" onPress={()=> {}}>
            <Image source={images.bag} className="size-5" resizeMode="contain" />

            {totalItems > 0 && (
                <View className="cart-badge">
                    <Text className="small-bold text-white">{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
      
    </View>
  )
}

export default Header