import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import Input from "./component/Input";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import PieChart from "react-native-pie-chart";

const baseFontSize = 16;
const responsiveFontSize = (size) => {
    const ratio = PixelRatio.getFontScale();
    return size * ratio * baseFontSize;
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const chartSize = Math.min(screenWidth, screenHeight) * 0.42;

const ReviewQuestion = ({ navigation }) => {
  const [color, setColor] = useState([
    {
      name: "green",
      color: "#39B54A",
      key: "Correct Answer",
    },
    {
      name: "red",
      color: "#FF5341",
      key: "Wrong",
    },
    {
      name: "blue",
      color: "#FFFFFF",
      key: "Skip/UnAnswer",
    },
  ]);

  const [profileName, setProfileName] = useState([
    {
      name: "Name",
      key: "Name",
    },
    {
      name: "Email",
      key: "Email",
    },
    {
      name: "Password",
      key: "Password",
    },
    {
      name: "Purchase",
      key: "Purchase",
    },
    {
      name: "Log Out",
      namekey: "Log Out",
    },
  ]);

  const series = [80, 180, 173];
  const sliceColor = ["#FF5341", "#39B54A", "#D9D9D9"];


  return (
    <ImageBackground
      source={require("../assets/Menu.png")}
      style={{ width: screenWidth, flex: 1 }}
    >
      <View style={{ paddingVertical: screenHeight * 0.055 }}>
        <Text
          style={{
            fontSize: screenWidth * 0.058,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          REVIEW QUESTIONS
        </Text>
        <View
          style={{
            paddingVertical: screenWidth * 0.116,
            paddingHorizontal: screenWidth * 0.026,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              position: "relative",
              justifyContent: "space-evenly",
            }}
          >
            <View style={styles.container}>
              <PieChart
                widthAndHeight={chartSize}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.75}
                coverFill={"#3EB8D4"}
              />
              <Text style={styles.text}>25%</Text>
            </View>
            <View style={{ marginLeft: screenWidth * 0.02 }}>
              <Text
                style={{ fontSize: screenWidth * 0.048, fontWeight: "700" }}
              >
                Attempt 1
              </Text>
              <Text
                style={{
                  fontSize: screenWidth * 0.142,
                  fontWeight: "500",
                  color: "#FFFFFF",
                  fontWeight: "700",
                }}
              >
                50%
              </Text>
              <Text style={{ fontSize: screenWidth * 0.048, color: "#FFFFFF" }}>
                Correct (20/10)
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: screenHeight * 0.015,
                    width: screenWidth * 0.06,
                  }}
                  source={require("./images/calander.png")}
                />
                <Text
                  style={{ fontSize: screenWidth * 0.048, color: "#FFFFFF" }}
                >
                  October (20/10)
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: screenHeight * 0.022,
                    width: screenWidth * 0.06,
                  }}
                  source={require("./images/watch.png")}
                />
                <Text
                  style={{ fontSize: screenWidth * 0.048, color: "#FFFFFF" }}
                >
                  35 Minutes
                </Text>
              </View>
            </View>

            <View></View>
          </View>
          <View style={{ padding: 35 }}>
            <Text
              style={{
                color: "red",
                fontSize: screenWidth * 0.038,
                paddingVertical: 9,
                fontWeight: "700",
                textAlign: "center",
                borderRadius: 22,
                backgroundColor: "#DCF8FF",
              }}
            >
              Failed (70% Required to Pass)
            </Text>
            <View style={{ marginTop: screenHeight * 0.021 }}>
              {color.map((x, i) => {
                let { name, color } = x;
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      padding: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ width: 15, height: 15, backgroundColor: color }}
                    ></View>
                    <Text
                      style={{
                        fontSize: screenWidth * 0.048,
                        color: "#FFFFFF",
                        marginHorizontal: screenWidth * 0.024,
                        fontWeight: "700",
                      }}
                    >
                      {x.key}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View
              style={{
                marginVertical: screenHeight * 0.035,
                borderRadius: 15,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text
                  style={{
                    borderRadius: 11,
                    fontWeight: "700",
                    fontSize: screenWidth * 0.04,
                    textAlign: "center",
                    backgroundColor: "#3EB8D4",
                    paddingVertical: screenWidth * 0.04,
                    color: "#FFFFFF",
                    paddingHorizontal: screenWidth * 0.15,
                  }}
                >
                  Quiz Menu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const fontSize = screenWidth * 0.1;
const styles = StyleSheet.create({
  container: {
    
    width: 150,
    marginTop: screenHeight * 0.02,
    height: 150,
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    // left: '50%',
    // top: '38%',
    // transform: [{ translateX: - fontSize / 1 }, { translateY: -fontSize / 2 }],
    fontWeight: "700",
    zIndex: 5,
    fontSize: responsiveFontSize(2.5),
  },
});

export default ReviewQuestion;
