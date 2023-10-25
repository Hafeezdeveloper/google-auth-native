import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  PixelRatio,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import BottomTabs from "./component/BottomTabs";
import ProgressCircle from "react-native-progress-circle";
import { Alert } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from "react-native-progress";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const Question = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [marks, setMakrs] = useState(0);
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const baseFontSize = 16;
  const responsiveFontSize = (size) => {
    const ratio = PixelRatio.getFontScale();
    return size * ratio * baseFontSize;
  };

  const questions = [
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Culcutta", "New York", "Mumbai"],
      correctAnswer: "New Delhi",
      explanation: "New york is not correct because it is not  in India.",
    },
    {
      question: "Which planet is known as the yellow Planet?",
      options: ["Mars", "Venus", "Earth", "Jupiter"],
      correctAnswer: "Mars",
      explanation: "New york is not correct because it is not  in India.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectAns, setSelectAns] = useState();
  const [ansIndex, setAnswerIndex] = useState();
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(false);
  };

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Clear selected answer for the next question
      setProgress(progress + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion - 1 < questions.length - 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null); // Clear selected answer for the next question
      setProgress(progress - 1);
    }
  };

  const selectedAnswers = (e, i) => {
    console.log("e", e, i);
    if (e === questions[currentQuestion].correctAnswer) {
      setMakrs(marks + 1);
      setAnswerIndex(i);
      setSelectAns(true);
    } else {
      setSelectAns(true);
      setSelectAns(i);
    }
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => selectedAnswers(option, index)}
      >
        <View style={[styles.optionContainer]}>
          <View
            style={[
              styles.option,
              {
                borderRadius: 15,
                backgroundColor: selectAns
                  ? questions[currentQuestion].correctAnswer === option
                    ? "#FFFFFF"
                    : selectAns === index
                    ? "#FFDFDC"
                    : "transparent"
                  : "transparent",
                borderColor: selectAns
                  ? questions[currentQuestion].correctAnswer === option
                    ? "#42D91C"
                    : selectAns === index
                    ? "#FF5341"
                    : "#FFFFFF"
                  : "#FFFFFF",
              },
            ]}
          >
            <Text
              style={{
                width: "75%",
                fontSize: 18,
                color: "#FFFFFF",
                fontWeight: "700",
                color: selectAns
                  ? questions[currentQuestion].correctAnswer === option
                    ? "#42D91C"
                    : selectAns === index
                    ? "#FF5341"
                    : "#FFFFFF"
                  : "#FFFFFF",
              }}
            >
              {option}
            </Text>
            <View style={{ marginLeft: screenWidth * 0.12 }}>
              {selectAns &&
              questions[currentQuestion].correctAnswer === option ? (
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 15 }}
                  source={require("./images/correct.png")}
                />
              ) : (
                selectAns === index && (
                  <Image
                    resizeMode="contain"
                    style={{ height: 25, width: 15 }}
                    source={require("./images/Wrong.png")}
                  />
                )
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  const renderQuiz = () => {
    if (currentQuestion < questions.length) {
      return (
        <View style={[styles.quizContainer, { paddingTop: 15 }]}>
          <View
            style={{
              marginHorizontal: screenWidth * 0.43,
              width: "82%",
              height: screenHeight * 0.14,
              backgroundColor: "#DCF8FF",
              borderRadius: 20,
              marginBottom: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.question}>
              {questions[currentQuestion].question}
            </Text>
          </View>
          {renderOptions()}
          <View style={{ paddingHorizontal: screenWidth * 0.092 }}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: screenHeight * 0.011,
                marginBottom: screenHeight * 0.019,
                fontWeight: "600",
                fontSize: screenHeight * 0.029,
              }}
            >
              Explantion
            </Text>
            <View
              style={{
                height: screenHeight * 0.13,
                backgroundColor: "#D9D9D9",
                borderRadius: 20,
                marginBottom: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: screenHeight * 0.019,
                  fontWeight: "600",
                  paddingHorizontal: screenWidth * 0.056,
                  textAlign: "center",
                }}
              >
                {"New york is not correct because it is Not In India. "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Text style={styles.nextButtonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.quizContainer}>
          <Text style={styles.quizCompleted}>Quiz Completed!</Text>
          <Text style={styles.score}>
            Your Score: {score} / {questions.length}
          </Text>
        </View>
      );
    }
  };
  return (
    <>
      <ImageBackground
        style={{ width: screenWidth, flex: 1 }}
        source={require("../assets/Menu.png")}
      >
        <View
          style={{ paddingTop: screenHeight * 0.085, paddingHorizontal: 15 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: screenWidth * 0.039,
            }}
          >
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: screenHeight * 0.043,
                    width: screenWidth * 0.099,
                  }}
                  source={require("./images/cancel.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: screenWidth * 0.018,
                flexDirection: "row",
                alignItems: "center",
                width: "80%",
                backgroundColor: "#FFFFFF",
                borderRadius: 25,
              }}
            >
              <Progress.Bar
                progress={progress}
                fill="transparent"
                width={screenWidth * 0.485}
                borderWidth={0}
                useNativeDriver={false}
                color="#303B9B"
                unfilledColor="#EFEFEF"
              />
              <Text
                style={{
                  color: "rgba(75,179,212,255)",
                  marginLeft: screenWidth * 0.02,
                  fontWeight: "600",
                }}
              >
                {" "}
                {currentQuestion + 1} / {questions.length}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>{renderQuiz()}</ScrollView>
        {currentQuestion == questions.length - 1 ? (
          <>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <ImageBackground
                    resizeMode="contain"
                    style={{
                      width: screenWidth * 0.45,
                      height: screenHeight * 0.105,
                      marginTop: screenHeight * -0.1,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 125,
                    }}
                    source={require("./images/Ellipse.png")}
                  >
                    <View
                      style={{
                        borderColor: "#FFFFFF",
                        borderRadius: 20,
                      }}
                    >
                      <CountdownCircleTimer
                        isPlaying
                        size={75}
                        rotation="counterclockwise"
                        duration={7}
                        colors="#3EB8D4"
                        trailColor="#EFEFEF"
                        trailStrokeWidth={10}
                        strokeLinecap="round"
                        colorsTime={[7, 5, 2, 0]}
                      >
                        {({ remainingTime }) => (
                          <Text
                            style={{
                              fontSize: responsiveFontSize(1.5),
                              color: "#737373",
                              fontWeight:"700"
                            }}
                          >
                            {remainingTime === 0 ? "00" : remainingTime}
                          </Text>
                        )}
                      </CountdownCircleTimer>
                    </View>
                  </ImageBackground>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: screenWidth * 0.412,
                      height: screenHeight * 0.205,
                    }}
                    source={require("./images/Timer.png")}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity   onPress={() => {
                        setModalVisible(false);
                        navigation.navigate("Exam");
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{
                          width: screenWidth * 0.112,
                          height: screenHeight * 0.098,
                        }}
                        source={require("./images/Again.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(false);
                        navigation.navigate("review");
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        style={{
                          width: screenWidth * 0.112,
                          height: screenHeight * 0.098,
                        }}
                        source={require("./images/Cross.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </>
        ) : (
          <>{console.log("nill")}</>
        )}
        <View style={{ position: "absolute", width: "100%", bottom: 0 }}>
          <BottomTabs activeTab={activeTab} onChangeTab={handleTabChange} />
        </View>
      </ImageBackground>
    </>
  );
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: screenHeight * 0.1,
  },
  question: {
    paddingHorizontal: 5,
    fontSize: screenWidth * 0.052,
    fontWeight: "700",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignSelf: "flex-end",
  },
  option: {
    fontSize: 20,
    // marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: screenHeight * 0.0123,
    borderWidth: 2,
    marginBottom: 5,
    borderColor: "#EFEFEF",
    borderRadius: 10,
    width: screenWidth * 0.8,
    color: "#FFFFFF",
    paddingLeft: 15,
    fontWeight: "700",
    flexDirection: "row",
    alignItems: "center",
    width: screenWidth * 0.8,
  },
  quizCompleted: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
  },
  nextButton: {
    width: screenWidth * 0.362,
    height: screenHeight * 0.072,
    backgroundColor: "#3EB8D4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  backButton: {
    width: screenWidth * 0.362,
    height: screenHeight * 0.072,
    backgroundColor: "#9FA5A7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: screenWidth * 0.040,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderColor: "#4064D7",
    borderWidth: 2,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    alignItems: "center",
  },
});

export default Question;
