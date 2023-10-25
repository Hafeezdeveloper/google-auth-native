import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "./component/Input";
import { useState, useEffect } from "react";
import CustomBack from "./component/CustomBack";
import { PixelRatio } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const baseFontSize = 16;
const responsiveFontSize = (size) => {
    const ratio = PixelRatio.getFontScale();
    return size * ratio * baseFontSize;
};


const Payemnt = ({ navigation }) => {
  const [profileName, setProfileName] = useState([
    {
      payment: {
        rupees: "6.99",
        colors: "#FFFFFF",
      },
      key: "Play Quiz Level 2",
      bgcolour: "#3EB8D4",
      txtcolr: "#FFFFFF",
    },
    {
      lock: true,
      payment: {
        rupees: "10.00",
        colors: "#87E2F6",
      },
      key: "Play Quiz Level 5",
      bgcolour: "#FFFFFF",
      txtcolr: "#4064D7",
    },
    {
      payment: {
        rupees: "29.99",
        colors: "#FFFFFF",
      },
      key: "Play Quiz Level 9",
      bgcolour: "#3EB8D4",
      txtcolr: "#FFFFFF",
    },
  ]);

  const buttonzs = [
    {
      texts:"Terms of use",
      key:""
    },
    {
      texts:"Privacy Policy"
    },
  ]
  return (
    <ImageBackground
      source={require("../assets/Menu.png")}
      style={{ width: screenWidth, flex: 1 }}
    >
      <View
        style={{ paddingVertical: screenHeight * 0.055, position: "relative" }}
      >
        <CustomBack onPress={(e) => console.log("e")} />

        <Image
          style={{
            width: screenWidth,
            height: screenHeight * 0.319,
            paddingVertical: screenWidth * 0.02,
          }}
          source={require("./images/payment.png")}
        />
        <View style={{ paddingHorizontal: screenWidth * 0.1 }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.4),
              marginTop: screenHeight * 0.008,
              fontWeight: "800",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Unlock Your Plan Now
          </Text>
          <View
            style={{
              width: "100%",
              marginBottom: screenHeight * 0.01,
              marginTop: screenHeight * 0.015,
              borderWidth: 1,
              borderColor: "#FFFFFF",
            }}
          ></View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: screenWidth * 0.032,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and sc  
          </Text>
          {profileName.map((x, i) => {
            let { bgcolour, txtcolr } = x;
            let { colors } = x.payment;
            console.log(txtcolr, x);
            return (
              <View
                style={{
                  width: screenWidth * 0.53,
                  height: screenHeight * 0.1,
                }}
              >
                {x.lock ? (
                  <View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          width: screenWidth * 0.31,
                          backgroundColor: `${bgcolour}`,
                          marginTop: screenHeight * 0.019,
                          padding: 10,
                          borderRadius: 20,
                          zIndex: 2,
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight:"bold",
                            fontSize: screenWidth * 0.036,
                            marginRight:2,
                            marginTop:5,
                            color: `${txtcolr}`,
                          }}
                        >
                          $
                        </Text>
                        <Text
                          style={{
                            backgroundColor: `${bgcolour}`,
                            fontSize: screenWidth * 0.078,
                            color: `${txtcolr}`,
                            fontWeight: "800",
                          }}
                        >
                          {x.payment.rupees}
                        </Text>
                      </View>
                      <View style={{ position: "relative" }}>
                        <Image
                          resizeMode="contain"
                          style={{
                            height: screenHeight * 0.075,
                            right: 0,
                            top: screenHeight * 0.015,
                            marginRight: screenWidth * -0.085,
                            width: screenWidth * 0.186,
                            position: "absolute",
                            zIndex: 2,
                          }}
                          source={require("./images/offer.png")}
                        />
                        <Text
                          style={{
                            height: screenHeight * 0.075,
                            width: screenWidth * 0.53,
                            fontSize: screenWidth * 0.052,
                            marginTop: screenHeight * 0.019,
                            paddingTop: screenHeight * 0.019,
                            backgroundColor: `${colors}`,
                            fontWeight: "600",
                            color: "#2827AD",
                            padding: 10,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            marginLeft: -10,
                            textAlign: "center",
                            borderColor: "#2827AD",
                            borderWidth: 1,
                            zIndex: 1,
                          }}
                        >
                          {x.key}
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View>
                  <View
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <View
                      style={{
                        width: screenWidth * 0.31,
                        backgroundColor: `${bgcolour}`,
                        marginTop: screenHeight * 0.019,
                        padding: 10,
                        borderRadius: 20,
                        zIndex: 2,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight:"bold",
                          fontSize: screenWidth * 0.036,
                          marginRight:2,
                          marginTop:5,
                          color: `${txtcolr}`,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{
                          backgroundColor: `${bgcolour}`,
                          fontSize: screenWidth * 0.078,
                          color: `${txtcolr}`,
                          fontWeight: "800",
                        }}
                      >
                        {x.payment.rupees}
                      </Text>
                    </View>
                    <View style={{ position: "relative" }}>
                 
                      <Text
                        style={{
                          height: screenHeight * 0.075,
                          width: screenWidth * 0.53,
                          fontSize: screenWidth * 0.052,
                          marginTop: screenHeight * 0.019,
                          paddingTop: screenHeight * 0.019,
                          backgroundColor: `${colors}`,
                          fontWeight: "600",
                          color: "#2827AD",
                          padding: 10,
                          borderTopRightRadius: 15,
                          borderBottomRightRadius: 15,
                          marginLeft: -10,
                          textAlign: "center",
                          borderColor: "#2827AD",
                          borderWidth: 1,
                          zIndex: 1,
                        }}
                      >
                        {x.key}
                      </Text>
                    </View>
                  </View>
                </View>
                )}
              </View>
            );
          })}
          {/* {profileName.map((x, i) => {
            return (
            );
          })} */}
          <View
            style={{
              marginTop: screenHeight * 0.02,
              borderRadius: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  fontSize: screenWidth * 0.046,
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 13,
                  textAlign: "center",
                  backgroundColor: "#3EB8D4",
                  paddingVertical: screenWidth * 0.03,
                  width: screenWidth * 0.8,
                }}
              >
                Continues
              </Text>
            </TouchableOpacity>
          </View>
        
            
            <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
              {buttonzs.map( (x) =>{
                return(
                  <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: screenHeight * 0.022,
                    paddingHorizontal: screenWidth * 0.035,
                  }}
                >
              <TouchableOpacity onPress={() => navigation.navigate("Rules")}>
                <Text
                  style={{ color: "#FFFFFF", fontSize: screenWidth * 0.032 }}
                >
                  {x.texts}
                </Text>
                <View
                  style={{ borderBottomWidth: 1, borderColor: "lightgray" }}
                />
              </TouchableOpacity>
            </View>

                )
              })}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});

export default Payemnt;
