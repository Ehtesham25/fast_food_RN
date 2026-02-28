import { images } from "@/constant";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  let totalItems = 10;
  return (
      <TouchableOpacity className="cart-btn bg-red-300" >
        <Image source={images.bag} className="size-90" resizeMode="contain" />
      

        {totalItems < 0 && (
          <View className="cart-badge">
            <Text className="small-bold text-white">{totalItems}</Text>
          </View>
        )}
      </TouchableOpacity>
  
  );
};

export default CartButton;
