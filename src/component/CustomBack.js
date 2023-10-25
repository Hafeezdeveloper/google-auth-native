import React from "react";
import { TouchableOpacity, Dimensions, Image, Text } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

function CustomBack({ onPress }) {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        left: 16, // Adjust the left value for the desired position
        top: 50, // Adjust the top value for the desired position
        zIndex: 3, // To ensure the button appears on top of other header elements
        width: screenWidth * 0.10,
        height: screenHeight *  0.047,
        backgroundColor: "#FFFFFF",
        borderRadius: 25, // Set borderRadius to half of the width
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.goBack()}
    >
      <Image
        resizeMode="contain"
        style={{
          width: screenWidth * 0.06,
          height: screenWidth * 0.1, // Set the height to the same value as the width
        }}
        source={require("../../assets/Arrow.png")}
      />
    </TouchableOpacity>
  );
}

export default CustomBack;
