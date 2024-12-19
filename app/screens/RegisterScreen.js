import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { emailValidator } from '../validator/emailValidator'
import { passwordValidator } from '../validator/passwordValidator'
import { nameValidator } from '../validator/nameValidator'
import CustomButton from '../components/CustomButton'
import BackButton from '../components/BackButton'
import TextInput from '../components/TextInput'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" })
    
    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
          }
          navigation.reset({
            index: 0,
            routes: [{ name: "MainTabs" }],
          });
    }

  return (
    <SafeAreaView>
        <View className='bg-[#FFFFFF] h-full w-full items-center'>
            <View className='bg-[#666666] w-full h-1/4 rounded-b-3xl'>
                <BackButton goBack={(navigation.goBack)} className='mt-4 ml-2'/>
                <Text className='font-poppins-bold text-[#FFFFFF] text-4xl mt-auto mb-auto ml-16'>Register</Text>
            </View>
            <View className='w-full items-center mt-10 mb-6'>
                <TextInput
                    label="Username"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={(text) => setName({ value: text, error: "" })}
                    error={!!name.error}
                    errorText={name.error}
                />
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: "" })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: "" })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
            </View>
            <CustomButton mode="contained" title="Sign Up" onPress={onSignUpPressed}/>
            <Text className='font-poppins-regular my-4'>or with</Text>
            <TouchableOpacity className='flex-row'>
                <Image source={require("../../assets/items/ggl.png")} className='w-14 mx-3' resizeMode='contain'/>
                <Image source={require("../../assets/items/fb.png")} className='w-14 mx-3' resizeMode='contain'/>
                <Image source={require("../../assets/items/apple.png")} className='w-14 mx-3' resizeMode='contain'/>
            </TouchableOpacity>
            <View className='flex-row mt-5'>
                <Text className='font-poppins-regular'>Have an account already? </Text>
                <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
                    <Text className='font-poppins-regular text-[#3498DB]'>Sign In here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default RegisterScreen