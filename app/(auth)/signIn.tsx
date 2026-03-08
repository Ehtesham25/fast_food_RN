import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import React from 'react'
import { View } from 'react-native'

const SignIn = () => {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput
                placeholder="Enter your email"
                value={''}
                onChangeText={()=>{}}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value={''}
                onChangeText={()=>{}}
                label="Password"
                secureTextEntry={true}
            />

            <CustomButton
                title="Sign In"
                onPress={()=>{}}
            />
    </View>
  )
}

export default SignIn