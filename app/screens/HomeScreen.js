import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/navbar'
import { popular } from '../data/DataArrays'

const HomeScreen = ({navigation}) => {

  const renderPopular = ({item}) => (
    <TouchableOpacity className='w-80 rounded-2xl overflow-hidden mx-3'>
        <ImageBackground source={{uri: item.photo_url}} resizeMode='cover' className='w-full h-44'>
            <Text className='font-poppins-semibold text-[#FFFFFF] text-xl mt-36 ml-3'>{item.title}</Text>
        </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='flex-1 h-full relative bg-[#FFFFFF]'>
        <ScrollView contentContainerStyle={{ paddingBottom: 26 }}>
            <View className='flex-row justify-between mt-5'>
                <View className='ml-5'>
                    <Text className='font-poppins-semibold text-3xl'>Good Morning,</Text>
                    <Text className='font-poppins-semibold text-4xl mt-1'>Justin</Text>
                </View>
                <TouchableOpacity>
                <Image source={require('../../assets/items/profile.png')} className='w-14 h-14 mr-5 mt-2' resizeMode='contain'/>
                </TouchableOpacity>
            </View>
            <Text className='font-poppins-bold text-2xl ml-5 mt-5'>Today Plan</Text>
            <View className='flex-row mt-3'>
                <View className='bg-[#B3B3B3] w-48 h-48 items-center p-2 rounded-2xl mx-2'>
                    <Text className='font-poppins-medium text-lg'>Saturday,</Text>
                    <Text className='font-poppins-medium text-lg'>17 Agustus 2024</Text>
                    <Text className='font-poppins-semibold text-xl mt-9'>Biceps Training</Text>
                </View>
                <View className='bg-[#FFC0C0] w-48 h-48 items-center p-3 rounded-2xl'>
                    <Image source={require('../../assets/items/fire.png')} className='mt-4'/>
                    <Text className='font-poppins-semibold text-3xl mt-3'>500</Text>
                    <Text className='font-poppins-medium text-xl'>kcal burnt</Text>
                </View>
            </View>
            <Text className='font-poppins-bold text-2xl ml-5 mt-7'>Popular Workouts</Text>
            <View className='mt-3'>
                <FlatList
                  data={popular}
                  renderItem={renderPopular}
                  keyExtractor={(item) => `${item.id}`}
                  horizontal={true}
                  vertical={false}
                  showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text className='font-poppins-bold text-2xl ml-5 mt-7'>Leaderboards</Text>
            <View className='mt-5 mx-6 bg-[#DFDFDFDF] rounded-2xl'>
                <View className='flex-row justify-between mt-2 px-2 mb-1'>
                    <Text className='font-poppins-bold text-lg'>No</Text>
                    <Text className='font-poppins-bold text-lg'>Username</Text>
                    <Text className='font-poppins-bold text-lg'>Points</Text>
                </View>
                <View className='flex-row justify-between px-2 my-1'>
                    <Text className='font-poppins-semibold text-lg'>1.</Text>
                    <Text className='font-poppins-semibold text-lg'>Claus</Text>
                    <Text className='font-poppins-semibold text-lg'>9999</Text>
                </View>
                <View className='flex-row justify-between px-2 my-1'>
                    <Text className='font-poppins-semibold text-lg'>2.</Text>
                    <Text className='font-poppins-semibold text-lg'>Justin</Text>
                    <Text className='font-poppins-semibold text-lg'>1234</Text>
                </View>
                <View className='flex-row justify-between px-2 my-1'>
                    <Text className='font-poppins-semibold text-lg'>3.</Text>
                    <Text className='font-poppins-semibold text-lg'>Fufufafa</Text>
                    <Text className='font-poppins-semibold text-lg'>1000</Text>
                </View>
                <View className='flex-row justify-between px-2 my-1'>
                    <Text className='font-poppins-semibold text-lg'>4.</Text>
                    <Text className='font-poppins-semibold text-lg'>Raihan</Text>
                    <Text className='font-poppins-semibold text-lg'>999</Text>
                </View>
                <View className='flex-row justify-between px-2 my-1'>
                    <Text className='font-poppins-semibold text-lg'>5.</Text>
                    <Text className='font-poppins-semibold text-lg'>Noobmaster123</Text>
                    <Text className='font-poppins-semibold text-lg'>998</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen