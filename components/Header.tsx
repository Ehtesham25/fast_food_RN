import { images } from "@/constant";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const totalItems = 10;
  return (
    
    <TouchableOpacity className="w-10 bg-white-200" >
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>

  );
};

export default CartButton;
