import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  ToastAndroid,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "./component/Input";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView } from "react-native";
import { useEffect } from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Frontimg = ({ navigation }) => {
  const [model, setModel] = useState({});
  const [open, setOpen] = useState(false);

  const nextButton = () =>{
    setOpen(true)
  }
  return (
    <>
  <ImageBackground
  style={{ flex: 1, width: screenWidth, position: "relative" }}
  source={require("../src/images/frontimage.png")}
>
        {/* {!open ? 
        <>
         <View
    style={{
      position: "absolute",
      alignSelf: "center",
      justifyContent:"center",
      bottom: screenWidth *  0.20, // Yahan arrow ko neeche le jane ke liye bottom 0 set kiya gaya hai
    }}
  >
            <TouchableOpacity onPress={nextButton}>
    <Image
      resizeMode="contain"
      style={{ width: screenWidth * 0.17, height: screenHeight * 0.083 }}
      source={require("../src/images/Arrowfront.png")}
    />
    </TouchableOpacity>
    <View style={{alignSelf:"center",flexDirection:"row",gap:2}}>
 <Image
 resizeMode="contain"
 style={{ width: screenWidth * 0.052, height: screenHeight * 0.083  }}
 source={require("../src/images/f2.png")}
/>
<Image
 resizeMode="contain"
 style={{ width: screenWidth * 0.027, height: screenHeight * 0.083  }}
 source={require("../src/images/f1.png")}
/>
</View>
</View>
</>
         :  */}
         {/* <> */}
             <View
    style={{
      position: "absolute",
      alignSelf: "center",
      justifyContent:"center",
      bottom: screenHeight *  0.05, // Yahan arrow ko neeche le jane ke liye bottom 0 set kiya gaya hai
    }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
    <Image
      resizeMode="contain"
      style={{ width: screenWidth * 0.17, height: screenHeight * 0.063 }}
      source={require("../src/images/Arrowfront.png")}
    />
    </TouchableOpacity>
    <View style={{alignSelf:"center",flexDirection:"row",gap:2}}>
         <Image
         resizeMode="contain"
         style={{ width: screenWidth * 0.042, height: screenHeight * 0.083   }}
         source={require("../src/images/f2.png")}
       />
       <Image
         resizeMode="contain"
         style={{ width: screenWidth * 0.017, height: screenHeight * 0.083   }}
         source={require("../src/images/f1.png")}
       />
       </View>
</View>
       {/* </>
         } */}
 
</ImageBackground>

    </>
  );
};
const styles = StyleSheet.create({});

export default Frontimg;
