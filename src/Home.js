import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  ScrollViewBase,
} from "react-native";
import BottomTabs from "./component/BottomTabs";
import { useState } from "react";
import ScrollBar  from "react-native-colored-scrollbar"
import { TouchableOpacity } from "react-native-gesture-handler";
 
const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <ImageBackground
      style={{ flex: 1, width: screenWidth ,position:"relative" }}
      source={require("../assets/Menu.png")}
    >
      <View
       style={{
      position: "absolute",
      zIndex:4,
      bottom: screenHeight * 0.100,
      right: screenWidth * 0.13
    }} >
      <TouchableOpacity onPress={() => navigation.navigate("Rules")}>
  <Image
    resizeMode="contain"
    style={{
      height: screenHeight * 0.079, 
      width: screenWidth * 0.155,
    }}
    source={require("../assets/quesMark.png")}
  />
  </TouchableOpacity>
  </View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{marginHorizontal: screenWidth * 0.015}}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: screenWidth * 0.075,
                color: "#FFFFFF",
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Hi, John
            </Text>
            <Image
            resizeMode="contain"
              style={{ width: screenWidth * 0.040, height: screenHeight * 0.040, marginLeft: 5 }}
              source={require("../assets/verify.png")}
            />
          </View>
          <Text style={{ color: "#FFFFFF" }}>
            Let's make this day productive
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileSave")} >
          <Image
          resizeMode="contain"
            style={{ width: screenWidth * 0.138, height: screenHeight * 0.071, borderRadius: 20 , marginTop: screenHeight * 0.015 }}
            source={require("../assets/profile.png")}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: screenHeight*  0.073,
          width: "90%",
          backgroundColor: "#ffffff",
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: screenWidth * 0.075,
            marginLeft: 15,
            color: "#2827AD",
            fontWeight: "800",
          }}
        >
          Welcome Back !
        </Text>

      </View>
      <View style={{ marginBottom: screenHeight * 0.01 ,  marginTop: screenHeight * 0.015 , marginHorizontal: screenWidth * 0.062 , borderWidth: 1, borderColor: "#FFFFFF" }}>
      </View>
<ScrollView
  style={{  marginBottom: 100,  paddingHorizontal: screenWidth * 0.062 , height:screenHeight * 0.62}}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
>
          <ScrollBar  
          indicatorBackground="#D9D9D9"
          indicatorColor="#2C29BB"  
          persistent={true}
          style={{ height: screenHeight * 0.62}}
          >
        <View
          style={{
            // backgroundColor:"red",
            marginHorizontal: 20,
            marginTop: 30,
            flexDirection: "row",
            width: "100%",
            alignSelf: "center",
            justifyContent: "space-between",
          }} >
          <View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.168,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginBottom: screenHeight *  0.030,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.210, height: screenHeight * 0.090, marginLeft: 10, top: -15 }}
                source={require("../assets/calendar.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth *  0.027,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: 1,
                }}
              >
                History
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028, marginLeft: screenWidth *  0.027, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,  
                height: screenHeight * 0.22,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 5
              }}
            >
              <Image
              resizeMode="contain"
              style={{ width: screenWidth * 0.210, height: screenHeight * 0.110, marginLeft: 10, top: -15 }}
              source={require("../assets/calculator.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth *  0.035,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.012,
                }}
              >
                Math
              </Text>
              <Text style={{ color: "#323232",  fontSize : screenWidth * 0.028,marginLeft: screenWidth *  0.035, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,  
                height: screenHeight * 0.22,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 22,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.210, height: screenHeight * 0.090, marginLeft: 10, top: -10 }}
                source={require("../assets/dna.png")}
              />
              <View style={{borderRadius:25,}}>
              <Image
              style={{ width: screenWidth * 0.222, height: 20, marginLeft: screenWidth * 0.024, opacity:0.4, borderRadius:10, top: -10 }}
              source={require("../assets/Oval.png")}
              />
              </View>
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 13,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.009,
                }}
              >
                Biological
              </Text>
              <Text style={{ color: "#323232",  fontSize : screenWidth * 0.028 , marginLeft: 13, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
          </View>
          <View style={{ marginTop: screenHeight *  0.025 }}>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.21,
                backgroundColor: "#ffffff",
                borderRadius: 15,
              }}
            >
              <Image
              resizeMode="contain"
                style={{width: screenWidth * 0.203, height: screenHeight * 0.103, marginLeft: 10, top: -10 }}
                source={require("../assets/chemistry.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 10,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.018,
                }}
              >
                Chemistry
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 , marginLeft: 10, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.21,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.195, height: screenHeight * 0.103, marginLeft: screenWidth * 0.035, top: screenHeight * 0.-8 }}
                source={require("../assets/basketball.png")}
              />
                <View style={{borderRadius:25,}}>
                  <Image
                style={{  width: screenWidth * 0.23, height: screenHeight * 0.020, opacity:0.4, borderRadius:50, marginLeft: screenWidth * 0.025, top: screenHeight * -0.015 }}
                source={require("../assets/Oval.png")}
              />
              </View>
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth * 0.035,
                  fontSize: 20,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                }}
              >
                Sports
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 ,  marginLeft: screenWidth * 0.035, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                   width: screenWidth * 0.38,
                height: screenHeight * 0.18,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth *  0.203, height: screenHeight * 0.10, marginLeft: 10, top: -2 }}
                source={require("../assets/map.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 10,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.000 ,
                }}
              >
                Geography
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 ,  marginLeft: screenWidth * 0.030, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor:"red",
            marginHorizontal: 20,
            marginTop: 30,
            flexDirection: "row",
            width: "100%",
            alignSelf: "center",
            justifyContent: "space-between",
          }} >
          <View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.168,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginBottom: screenHeight *  0.030,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.210, height: screenHeight * 0.090, marginLeft: 10, top: -15 }}
                source={require("../assets/calendar.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth *  0.027,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: 1,
                }}
              >
                Arts
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028, marginLeft: screenWidth *  0.027, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,  
                height: screenHeight * 0.22,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 5
              }}
            >
              <Image
              resizeMode="contain"
              style={{ width: screenWidth * 0.210, height: screenHeight * 0.110, marginLeft: 10, top: -15 }}
              source={require("../assets/calculator.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth *  0.035,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.012,
                }}
              >
                Computer
              </Text>
              <Text style={{ color: "#323232",  fontSize : screenWidth * 0.028,marginLeft: screenWidth *  0.035, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,  
                height: screenHeight * 0.22,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 22,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.210, height: screenHeight * 0.090, marginLeft: 10, top: -10 }}
                source={require("../assets/dna.png")}
              />
              <View style={{borderRadius:25,}}>
              <Image
              style={{ width: screenWidth * 0.222, height: 20, marginLeft: screenWidth * 0.024, opacity:0.4, borderRadius:10, top: -10 }}
              source={require("../assets/Oval.png")}
              />
              </View>
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 13,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.009,
                }}
              >
                Social Stdies
              </Text>
              <Text style={{ color: "#323232",  fontSize : screenWidth * 0.028 , marginLeft: 13, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
          </View>
          <View style={{ marginTop: screenHeight *  0.025 }}>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.21,
                backgroundColor: "#ffffff",
                borderRadius: 15,
              }}
            >
              <Image
              resizeMode="contain"
                style={{width: screenWidth * 0.203, height: screenHeight * 0.103, marginLeft: 10, top: -10 }}
                source={require("../assets/chemistry.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 10,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.018,
                }}
              >
                Commers
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 , marginLeft: 10, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.21,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.195, height: screenHeight * 0.103, marginLeft: screenWidth * 0.035, top: screenHeight * 0.-8 }}
                source={require("../assets/basketball.png")}
              />
                <View style={{borderRadius:25,}}>
                  <Image
                style={{  width: screenWidth * 0.23, height: screenHeight * 0.020, opacity:0.4, borderRadius:50, marginLeft: screenWidth * 0.025, top: screenHeight * -0.015 }}
                source={require("../assets/Oval.png")}
              />
              </View>
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth * 0.035,
                  fontSize: 20,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                }}
              >
              Software
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 ,  marginLeft: screenWidth * 0.035, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                   width: screenWidth * 0.38,
                height: screenHeight * 0.18,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth *  0.203, height: screenHeight * 0.10, marginLeft: 10, top: -2 }}
                source={require("../assets/map.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 10,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.000 ,
                }}
              >
                Nature 
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 ,  marginLeft: screenWidth * 0.030, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor:"red",
            marginHorizontal: 20,
            marginTop: 30,
            flexDirection: "row",
            width: "100%",
            alignSelf: "center",
            justifyContent: "space-between",
          }} >
          <View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.168,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginBottom: screenHeight *  0.030,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.210, height: screenHeight * 0.090, marginLeft: 10, top: -15 }}
                source={require("../assets/calendar.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth *  0.027,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: 1,
                }}
              >
                Arts
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028, marginLeft: screenWidth *  0.027, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,  
                height: screenHeight * 0.22,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 5
              }}
            >
              <Image
              resizeMode="contain"
              style={{ width: screenWidth * 0.210, height: screenHeight * 0.110, marginLeft: 10, top: -15 }}
              source={require("../assets/calculator.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth *  0.035,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.012,
                }}
              >
                Computer
              </Text>
              <Text style={{ color: "#323232",  fontSize : screenWidth * 0.028,marginLeft: screenWidth *  0.035, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,  
                height: screenHeight * 0.22,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 22,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.210, height: screenHeight * 0.090, marginLeft: 10, top: -10 }}
                source={require("../assets/dna.png")}
              />
              <View style={{borderRadius:25,}}>
              <Image
              style={{ width: screenWidth * 0.222, height: 20, marginLeft: screenWidth * 0.024, opacity:0.4, borderRadius:10, top: -10 }}
              source={require("../assets/Oval.png")}
              />
              </View>
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 13,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.009,
                }}
              >
                Social Stdies
              </Text>
              <Text style={{ color: "#323232",  fontSize : screenWidth * 0.028 , marginLeft: 13, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
          </View>
          <View style={{ marginTop: screenHeight *  0.025 }}>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.21,
                backgroundColor: "#ffffff",
                borderRadius: 15,
              }}
            >
              <Image
              resizeMode="contain"
                style={{width: screenWidth * 0.203, height: screenHeight * 0.103, marginLeft: 10, top: -10 }}
                source={require("../assets/chemistry.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 10,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.018,
                }}
              >
                Commers
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 , marginLeft: 10, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                width: screenWidth * 0.38,
                height: screenHeight * 0.21,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              
              <Image
              resizeMode="contain"
                style={{ width: screenWidth * 0.195, height: screenHeight * 0.103, marginLeft: screenWidth * 0.035, top: screenHeight * 0.-8 }}
                source={require("../assets/basketball.png")}
              />
                <View style={{borderRadius:25,}}>
                  <Image
                style={{  width: screenWidth * 0.23, height: screenHeight * 0.020, opacity:0.4, borderRadius:50, marginLeft: screenWidth * 0.025, top: screenHeight * -0.015 }}
                source={require("../assets/Oval.png")}
              />
              </View>
              <Text
                style={{
                  color: "#323232",
                  marginLeft: screenWidth * 0.035,
                  fontSize: 20,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                }}
              >
              Software
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 ,  marginLeft: screenWidth * 0.035, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
            <View
              onPress={() => navigation.navigate("Exam")}
              style={{
                   width: screenWidth * 0.38,
                height: screenHeight * 0.18,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Image
              resizeMode="contain"
                style={{ width: screenWidth *  0.203, height: screenHeight * 0.10, marginLeft: 10, top: -2 }}
                source={require("../assets/map.png")}
              />
              <Text
                style={{
                  color: "#323232",
                  marginLeft: 10,
                  fontSize: screenWidth * 0.040,
                  fontWeight:"700",
                  marginTop: screenHeight * 0.000 ,
                }}
              >
                Nature 
              </Text>
              <Text style={{ color: "#323232", fontSize : screenWidth * 0.028 ,  marginLeft: screenWidth * 0.030, marginTop: 5 }}>
              20 Question
              </Text>
            </View>
          </View>
        </View>
        </ScrollBar>
        
      </ScrollView>
      <View style={{ position: "absolute", width: "100%", bottom: 0 }}>
        <BottomTabs activeTab={activeTab} onChangeTab={handleTabChange} />
      </View>
    </ImageBackground>
  );
};

export default Home;
