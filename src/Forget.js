import { ImageBackground, StyleSheet,TextInput, Dimensions, ToastAndroid, Text, View, Image, TouchableOpacity } from 'react-native';
import Input from './component/Input';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Forget = ({navigation}) => {
  
    const [model,setModel] = useState({})
    const [open,setOpen] = useState(false)
    const [opentimer,setOpenTimer] = useState(false)

    const submitBtn = () => {
      setOpenTimer(true)
    }

    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(interval);
          ToastAndroid.show('Timer has stopped!', ToastAndroid.SHORT);
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [seconds]);

        return (
          <>
 <ImageBackground source={!open ? require("../src/images/background.png") : null} style={{ flex: 1 }}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          style={{ flexGrow: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1, position: "relative" }}>
            <View style={{
              position: "absolute", top: open ? screenHeight * 0.22 : screenHeight * 0.285,
              justifyContent: 'center', paddingHorizontal: 20
            }}>
          <Text style={{ fontSize: screenHeight * 0.043, color: "black", fontWeight: "700" , textAlign: "center" }}>Forgot Password? </Text>

                <View style={{paddingVertical: screenHeight * 0.000}}>
                <Text style={{paddingTop:12,color: "#797979" ,textAlign: "center"}}>Please enter the email you use to sign in.</Text>
          </View>

          <View style={{ marginTop: screenHeight * 0.030 }}  >
              <View style={{ flexDirection: "row", alignItems: "center", borderColor: "lightgray", borderWidth: 1, padding: screenHeight * 0.001 , borderRadius: 10 }}>
                <Image resizeMode='contain' style={{ width: screenWidth * 0.015,  paddingHorizontal: screenWidth * 0.05, height: screenHeight * 0.020, marginVertical: screenHeight * 0.020 }} source={require("../src/images/Mail.png")} />
                <Input text="example@site.com"             onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)} onChangeText={(e) => setModel({...model,email:e})}  value={model.email || ""}/>
              </View>
            </View>
          {opentimer ?
<View style={{marginTop: screenHeight * 0.018}}>
<TextInput
    placeholder={"Enter Code"}
    style={{ color:"#797979", padding: 8,borderRadius:10,  borderColor: "lightgray",textAlign:"center", fontSize:18, borderWidth: 1, marginTop: 10, paddingHorizontal: 10 }}
  />
                <Text style={{fontSize: screenWidth * 0.043 , paddingVertical: screenHeight * 0.005 ,color: "black", fontWeight:"400" ,textAlign:"right" , marginRight:screenWidth * 0.013}}> 00 : {seconds} Sec </Text>
<Text></Text>
</View>           
           : null}

<View style={{paddingTop:screenHeight * 0.010}}>
              <TouchableOpacity onPress={submitBtn}>
                <LinearGradient colors={['#2d3b96', '#4c3dc1']} style={{ padding: screenHeight *  0.015, borderRadius: 10 }}>
                  <Text style={{ fontSize: screenWidth * 0.050, textAlign: "center", fontWeight: "700", color: 'white' }}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center",marginVertical:screenHeight * 0.018 }}>
              <Text style={{ textAlign: "center", color:"black", fontSize: screenWidth * 0.040, marginTop: 1 }}>
              Back to  
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}  >
                <Text style={{  fontSize: screenWidth * 0.040,marginTop:1, fontWeight: "700", color: "#2A3B94" }}> Sign in</Text>
              </TouchableOpacity>
            </View>
            </View>

                </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
  </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({

  });

export default Forget;