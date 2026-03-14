import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignUp = () => {
    const[form, setForm]= useState({email:"", password:""});
    const[isSubmitting, setIsubmitting]= useState(false);
    const onSubmit = ()=>{
        if(!form.email || !form.password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsubmitting(true);

        try {
            router.replace("/")
            
        } catch (error:any) {
            Alert.alert('Error', error.message);
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
                title="Sign Up"
                onPress={()=>{}}
            />
             <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Do not have an account?
                </Text>
                <Link href="/(auth)/signIn" className="base-bold text-primary">
                    Sign In
                </Link>
            </View>
    </View>
  )
}

export default SignUp