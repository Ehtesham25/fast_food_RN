import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { signIn } from '@/lib/appwrite'
import * as Sentry from "@sentry/react-native"
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'


const SignIn = () => {
    const[form, setForm]= useState({email:"", password:""});
    const[isSubmitting, setIsubmitting]= useState(false);

    const onSubmit = ()=>{
        const {email, password} = form;
        if(!email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsubmitting(true);
        signIn({email, password})
        try {
            router.replace("/")
            
        } catch (error:any) {
            Alert.alert('Error', error.message);
            Sentry.captureEvent(error);
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
                onPress={onSubmit}
                isLoading ={isSubmitting}
            />
             <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Do not have an account?
                </Text>
                <Link href="/(auth)/signUp" className="base-bold text-primary">
                    Sign Up
                </Link>
            </View>
    </View>
  )
}

export default SignIn