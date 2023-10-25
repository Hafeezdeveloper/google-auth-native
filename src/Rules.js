import { ImageBackground, StyleSheet,TextInput, Text , Dimensions, View, Image, TouchableOpacity, ScrollView, PixelRatio } from 'react-native';
import Input from './component/Input';
import { LinearGradient } from 'expo-linear-gradient';
import CustomBack from './component/CustomBack';
import { useState } from 'react';
import BottomTabs from './component/BottomTabs';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';


const baseFontSize = 16;
const responsiveFontSize = (size) => {
    const ratio = PixelRatio.getFontScale();
    return size * ratio * baseFontSize;
};


const Rules = ({navigation}) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    
    const route = useRoute();

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    // console.log("route", route)

    let rules = [
        {
            id:1,
         para:`Find a Quiz App: Search for a quiz app that you want to play. This could be a standalone app, a chatbot on a messaging platform, or a web-based quiz game. Make sure it supports text-based interactions.`   
        },
        {
            id:2,
         para:`Install or Access the App: Download and install the app if it's a mobile application. Alternatively, if it's a chatbot, access it through your preferred messaging platform like Facebook Messenger, WhatsApp, or a website.`   
        },
        {
            id:3,
         para:`Registration/Login: Many quiz apps require you to create an account or log in using an existing account. Follow the on-screen instructions to complete this step.`   
        },
        {
            id:4,
         para:`Choose a Quiz: Once you're logged in, you'll likely have the option to choose from various quiz categories or topics. Select a quiz that interests you.`   
        },
        {
            id:5,
         para:`Start the Quiz: Begin the quiz by selecting "Start" or a similar option. The app or bot will then start asking you questions.`   
        },
        {
            id:5,
         para:`Start the Quiz: Begin the quiz by selecting "Start" or a similar option. The app or bot will then start asking you questions.`   
        },
        {
            id:5,
         para:`Start the Quiz: Begin the quiz by selecting "Start" or a similar option. The app or bot will then start asking you questions.`   
        },
        {
            id:5,
         para:`Start the Quiz: Begin the quiz by selecting "Start" or a similar option. The app or bot will then start asking you questions.`   
        },
   
    ]

    return (
        <ImageBackground
        style={{ flex: 1 }}
        source={require("../src/images/background.png")}
      >
            <CustomBack />
       <View style={{  height: screenHeight * 0.79, width: screenWidth , position: "absolute", bottom: 0 }}>
         <View style={{ paddingVertical: screenHeight * 0.056 , paddingHorizontal:screenWidth * 0.063 }}>

         <View style={{ flexDirection: "row" , justifyContent: "center", paddingBottom: screenHeight * 0.001 }}>
      <Text style={{ fontSize: screenHeight * 0.040, color: "black", fontWeight: "700", textAlign: "center" }}>How to Play </Text>
      <Text style={{ fontSize: screenHeight * 0.083, color: "black", fontWeight: "700", textAlign: "center", position: 'relative', top: screenHeight *  -0.040 }}>?</Text>
    </View>

<View  style={{backgroundColor:"#D9D9D9",padding:10,height:screenHeight * 0.55,borderRadius:15}}>
            <ScrollView >
        {rules.map( (x,i) =>{
            return(
                <>
                <Text style={{ fontSize:responsiveFontSize(1), paddingVertical:5}}>
                    {x.id}   {x.para}
                </Text>
                </>
            )
        })}
        </ScrollView>

        </View>
        
         </View>
       </View>
       
     </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
  });

export default Rules;