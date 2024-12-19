import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const StartScreen = ({navigation}) => {
  return (
    <View className='flex-1 justify-center items-center bg-[#FFFFFF]'>
        <Image source={require("../../assets/items/logo.png")} className='max-w-[240px] w-full h-[280px] my-48' resizeMode='contain'/>
        <CustomButton mode="contained" title="Get Started" onPress={() => navigation.navigate("LoginScreen")}/>
    </View>
  )
}

export default StartScreen