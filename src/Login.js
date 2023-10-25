import {
  ImageBackground,
  Switch,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "./component/Input";
import ToggleSwitch from "toggle-switch-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import * as WebBrowser from "expo-web-browser";
import auth from "../firebaseConfig";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession() 
  
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Login = ({ navigation }) => {

  const [request, response , promptAysnc] = Google.useAuthRequest({
    androidClientId:"901566647672-9cs8ilschdmcj3ttf96t2lqnh67u9l3j.apps.googleusercontent.com"
  })
  console.log(response)

  useEffect( () =>{
    if(response?.type == "success"){
      const {id_token } = response.params
      const crediential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, crediential)
    }

  },[response])

  const [open, setOpen] = useState(false)

  const isTabletMode = screenWidth >= 600;

    const submit = () =>{

    }
  return (
    <ImageBackground  source={!open ? require("../src/images/background.png") : null} style={{ flex: 1 }}>
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
              <Text
                style={{
                  fontSize: screenHeight * 0.043,
                  color: "black",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Welcome back!
              </Text>

              <View style={{ marginTop: screenHeight * 0.025 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    padding: screenHeight * 0.001,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: screenWidth * 0.015,
                      paddingHorizontal: screenWidth * 0.05,
                      height: screenHeight * 0.02,
                      marginVertical: screenHeight * 0.02,
                    }}
                    source={require("../src/images/Mail.png")}
                  />
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Enter your email"
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                  />
                </View>
              </View>
              <View style={{ marginTop: screenHeight * 0.036 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    padding: screenHeight * 0.001,
                    borderRadius: 10,
                    position: "relative",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: screenWidth * 0.015,
                      paddingHorizontal: screenWidth * 0.05,
                      height: screenHeight * 0.027,
                      marginVertical: screenHeight * 0.02,
                    }}
                    source={require("../src/images/Password.png")}
                  />
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Enter Password"
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                  />
                  <View style={{ position: "absolute", right: 0 }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: screenWidth * 0.015,
                        paddingHorizontal: screenWidth * 0.05,
                        height: screenHeight * 0.027,
                        marginVertical: screenHeight * 0.02,
                      }}
                      source={require("../src/images/eye.png")}
                    />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row", marginVertical: screenHeight * 0.02 ,marginHorizontal: screenWidth * 0.025 }}>
         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
           <View style={{ flexDirection: "row", alignItems: "center" }}>
             <View style={{ flexDirection: "row", justifyContent: "start" }}>
<ToggleSwitch
isOn={false}
onColor="green"
offColor="#A09F99"
labelStyle={{ color: "black", fontWeight: "900" }}
size="medium"
/>
             </View>

             <Text style={{ color: "#A09F99", fontSize: screenWidth *  0.032, paddingHorizontal: screenWidth * 0.015 }}>Remember me</Text>
           </View>

           <View style={{ flex: 1, alignItems: "flex-end" }}>
             <TouchableOpacity onPress={() => navigation.navigate("forget")}>
               <Text style={{ color: "#A09F99", fontSize: screenWidth *  0.032 }}>Forgot Password?</Text>
               <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />
             </TouchableOpacity>
           	</View>
         </View>
       </View>

              <View style={{ paddingTop: screenHeight * 0.005 }}>
                <TouchableOpacity onPress={promptAysnc}>
                  <LinearGradient
                    colors={["#2d3b96", "#4c3dc1"]}
                    style={{ padding: screenHeight * 0.015, borderRadius: 10 }}
                  >
                    <Text
                      style={{
                        fontSize: screenWidth * 0.05,
                        textAlign: "center",
                        fontWeight: "800",
                        color: "white",
                      }}
                    >
                      Log In
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: screenHeight * 0.033,
                  position: "relative",
                }}
              >
                <View
                  style={{
                    width: "95%",
                    marginHorizontal: screenWidth * 0.022,
                    borderWidth: 1,
                    borderColor: "#A09F99",
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    left: "35%",
                    paddingHorizontal: screenWidth * 0.033,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "left",
                      color: "lightgray",
                      paddingVertical: 2,
                      fontSize: screenWidth * 0.04,
                    }}
                  >
                    {" "}
                    Or Login with{" "}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: screenHeight * 0.04,
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                    width: screenWidth * 0.265,
                    height: screenHeight * 0.078,
                    backgroundColor: "#484848",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image
                      style={{
                        width: screenWidth * 0.045,
                        height: screenHeight * 0.025,
                      }}
                      source={require("../src/images/google.png")}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                    marginHorizontal: 10,
                    width: screenWidth * 0.265,
                    height: screenHeight * 0.078,
                    backgroundColor: "#484848",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image
                      style={{
                        width: screenWidth * 0.045,
                        height: screenHeight * 0.025,
                        resizeMode: "contain",
                      }}
                      source={require("../src/images/apple.png")}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                    width: screenWidth * 0.265,
                    height: screenHeight * 0.078,
                    backgroundColor: "#484848",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: screenWidth * 0.045,
                        height: screenHeight * 0.025,
                      }}
                      source={require("../src/images/facebook.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#D8D8DD",
                    fontSize: screenWidth * 0.04,
                    paddingVertical:1,
                  }}
                >
                  Don't have an account?
                </Text>
                <TouchableOpacity  onPress={() => navigation.navigate("SignUp")}>
                  <Text
                    style={{
                      fontSize: screenWidth * 0.04,
                      fontWeight: "700",
                      color: "#2A3B94",
                      paddingVertical:1,
                    }}
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>

            </View>




          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default Login;
