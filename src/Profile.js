import { ImageBackground, StyleSheet,TextInput, Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import Input from './component/Input';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import CustomBack from './component/CustomBack';
import BottomTabs from './component/BottomTabs';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const Profile = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };


  const [profileName,setProfileName] = useState([
    {
      name:"Name",
      key:"Name"
    },
    {
      name:"Email",
      key:"Email"
    },
    {
      name:"Password",
      key:"Password"
    },
    {
      name:"Purchase",
      key:"Purchase"
    },
    {
      name:"Log Out",
      namekey:"Log Out"
    },
  ])

  const clkBtn = (e) =>{
    console.log(e)
      if(e == "Purchase"){
        navigation.navigate("payment")
      }
  }
  
    return (
      <ImageBackground
      style={{ flex: 1, width: screenWidth , zIndex:3 }}
      source={require("../src/images/background.png")}
    >
            <CustomBack />
            <View style={{ height: screenHeight * 0.76, width: screenWidth , position: "absolute", bottom: 0 }}>
          <View style={{ paddingVertical: screenHeight * 0.006 , paddingHorizontal:screenWidth * 0.053 }}>
                <Text style={{marginBottom: screenHeight * 0.03,fontSize: screenWidth * 0.082, color: "black" , fontWeight: "700", textAlign: "center"}}>Setting</Text>
             
                <View style={{flexDirection:"row"}}>
                    <View style={{
                     
                    }} >
                  {/* <Image resizeMode='contain' style={{  borderRadius: (screenWidth * 0.28) / 2,height: screenHeight * 0.156,width:screenWidth * 0.28,backgroundColor:"#4064d7"}}  source={require("./images/UserProfile.png")} /> */}
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                  <Image
      resizeMode='contain'
      style={{
        height:screenHeight * 0.125,
        width: screenWidth * 0.265,
        borderRadius:85,
        backgroundColor: "#4064d7", 
        flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
      }}
      source={require("./images/UserProfile.png")}
    />
    </View>
                    </View>
        <View style={{ paddingHorizontal:screenWidth * 0.023}}>
                <Text style={{color: "#797979", fontSize:screenWidth * 0.042 ,textAlign: "start",color:"#000000"}}>John Doe</Text>
                <Text style={{color: "#797979" , fontSize:screenWidth * 0.040,textAlign: "start"}}>example@site.com</Text>
                <TouchableOpacity   onPress={() => navigation.navigate("ProfileSave")}>
                    <Text style={{fontWeight:"700",marginVertical:screenHeight * 0.015,textAlign:"center",backgroundColor:"#2827AD",color:"white",borderRadius:10,paddingHorizontal:screenWidth * 0.066,paddingVertical:screenHeight * 0.012}}>Edit Profile</Text>
                </TouchableOpacity>
        </View>
                </View>
           


<View style={{paddingVertical:screenWidth * 0.049,paddingHorizontal:screenWidth * 0.013}}>
      <View >
      {profileName.map( (x,i) =>{
        return(
          <>
      <View style={{ width: "100%", borderWidth: 1, borderColor: "#2A3B94" }}>
      </View>
      <TouchableOpacity onPress={() => clkBtn(x.name)}>
      <View  style={{paddingVertical:screenHeight * 0.011,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text style={{ fontWeight: "600", fontSize: screenHeight * 0.018, paddingVertical: screenHeight * 0.010 }} >
          {x.name}
        </Text>
            <Image resizeMode='contain' style={{width: screenWidth * 0.032 , height:18}} source={require("./images/greaterbar.png")} />
      </View>
      </TouchableOpacity>
          </>
        )
      })}
       </View>


</View>           


      

                
                </View>
                </View>
                <ImageBackground source={require("../assets/31.png")} style={{ position: "absolute", width: "100%", bottom: 0 ,zIndex:1 }}>
          <BottomTabs activeTab={activeTab} onChangeTab={handleTabChange} />
        </ImageBackground>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
    },
  });

export default Profile;