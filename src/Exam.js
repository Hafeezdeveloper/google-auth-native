import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import BottomTabs from './component/BottomTabs';
import { ScrollView } from 'react-native-gesture-handler';

const Exam = ({navigation}) => {
    const quizzes = [
        {
            id: 1,
            name: 'Quiz Level 1',
            questionCount: 2,
        },
        {
            id: 2,
            name: 'Quiz Level 2',
            questionCount: 5,
            lock: true,
        },
        {
            id: 3,
            name: 'Quiz Level 3',
            questionCount: 5,
            lock: true,
        },
        {
            id: 4,
            name: 'Quiz Level 4',
            questionCount: 5,
            lock: true,
        },
        {
            id: 5,
            name: 'Quiz Level 5',
            questionCount: 5,
            lock: true,
        },
        {
            id: 6,
            name: 'Quiz Level 6',
            questionCount: 5,
            lock: true,
        },
        {
            id: 7,
            name: 'Quiz Level 7',
            questionCount: 5,
            lock: true,
        },
        {
            id: 8,
            name: 'Quiz Level 8',
            questionCount: 5,
            lock: true,
        },
        {
            id: 9,
            name: 'Quiz Level 9',
            questionCount: 5,
            lock: true,
        },
        {
            id: 10,
            name: 'Quiz Level 10',
            questionCount: 5,
            lock: true,
        },
        {
            id: 11,
            name: 'Quiz Level 11',
            questionCount: 5,
            lock: true,
        },
        {
            id: 12,
            name: 'Quiz Level 12',
            questionCount: 5,
            lock: true,
        },
        {
            id: 13,
            name: 'Quiz Level 13',
            questionCount: 5,
            lock: true,
        },
        {
            id: 14,
            name: 'Quiz Level 14',
            questionCount: 5,
            lock: true,
        },
    ];

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };


    return (
        <ImageBackground style={{ width: screenWidth, flex: 1 }} source={require('../assets/Menu.png')}>
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
            Let’s make this day productive
          </Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 , marginTop: screenHeight * 0.015 }}
            source={require("../assets/profile.png")}
          />
        </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{height:125 ,marginBottom: 70}}>
            {quizzes.map((quiz,i) => (
                <View key={quiz.id} style={{ height: 60, width: '90%', flexDirection: 'row', backgroundColor: quiz.lock ? '#B8B8B8' : '#ffffff', alignSelf: 'center', borderRadius: 20, alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "25%" }}>
                        <Text style={{ color: '737373', marginHorizontal: 15, fontSize: screenWidth * 0.030 }}>{i +1}</Text>
                        <Image style={{ width: 45, height: 45 }} source={require('../assets/calendar.png')} />
                    </View>
                    <View style={{ marginLeft: 15, width: '40%' }}>
                        <Text style={{ fontSize: 18 }}>{quiz.name}</Text>
                        <Text style={{ color: quiz.lock ? '#000000' : '#A394FF' , fontSize: screenWidth * 0.028 }}>{quiz.questionCount} Question</Text>
                    </View>
                    {quiz.lock ? (
                        <TouchableOpacity style={{ width: '20%',  paddingVertical:1  }}>
                            <Image style={{ width: 20, height: 20, alignSelf: 'flex-end' }} source={require('../assets/lock.png')} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{ width: '20%',  paddingVertical:1 }} onPress={() => navigation.navigate("Question")}>
                            <Text style={{ color: '#3EB8D4', fontSize: screenWidth * 0.05, textAlign: 'right' }}>Start</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
            </ScrollView>
            <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                <BottomTabs activeTab={activeTab} onChangeTab={handleTabChange} />
            </View>
        </ImageBackground>
    );
};

export default Exam;
