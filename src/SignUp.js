import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "./component/Input";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SignUp = ({ navigation }) => {
  const [open, setOpen] = useState(false);


  const isTabletMode = screenWidth >= 600;
  
  return (
    <ImageBackground
      source={!open ? require("../src/images/background.png") : null}
      style={{  flex:1  }}
    >
      <SafeAreaView style={{ flexGrow: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, position: "relative" }}
        >
          <View
            style={{
              position: "absolute",
              top: open ? screenHeight * 0.22 : screenHeight * 0.285,
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: screenHeight * 0.043,
                color: "black",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Let's go!
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
                    height: screenHeight * 0.025,
                    marginVertical: screenHeight * 0.02,
                  }}
                  source={require("../src/images/Profile.png")}
                />
                <Input
                  text="John Doe"
                  onFocus={() => setOpen(true)}
                  onBlur={() => setOpen(false)}
                />
              </View>
            </View>

            <View style={{ marginTop: screenHeight * 0.03 }}>
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
                <Input
                  text="example@site.com"
                  onFocus={() => setOpen(true)}
                  onBlur={() => setOpen(false)}
                />
              </View>
            </View>
            <View style={{ marginTop: screenHeight * 0.03 }}>
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
                    height: screenHeight * 0.025,
                    marginVertical: screenHeight * 0.02,
                  }}
                  source={require("../src/images/Password.png")}
                />
                <Input
                  text="Minimum 8 characters"
                  onFocus={() => setOpen(true)}
                  onBlur={() => setOpen(false)}
                />
              </View>
            </View>

            <View style={{ paddingTop: screenHeight * 0.03 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <LinearGradient
                  colors={["#2d3b96", "#4c3dc1"]}
                  style={{ padding: screenHeight * 0.015, borderRadius: 10 }}
                >
                  <Text
                    style={{
                      fontSize: screenWidth * 0.05,
                      textAlign: "center",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    SIGN UP
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
                  Or Signup with{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: screenHeight * 0.03,
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
                Already have an account!
              </Text>
              <TouchableOpacity style={{paddingVertical:1}} onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    fontSize: screenWidth * 0.04,
                    fontWeight: "700",
                    color: "#2A3B94",  
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default SignUp;
