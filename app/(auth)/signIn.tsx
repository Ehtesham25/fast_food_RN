import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
    const[form, setForm]= useState();
    const[isSubmitting, setIsubmitting]= useState(false);
    const onSubmit = ()=>{
        setIsubmitting(true);

        try {
            
        } catch (error) {
            
        } finally {
            setIsubmitting(false);
        }

    }
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
             <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Do not have an account?
                </Text>
                <Link href="/signIn" className="base-bold text-primary">
                    Sign Up
                </Link>
            </View>
    </View>
  )
}

export default SignIn