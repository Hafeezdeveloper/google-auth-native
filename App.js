import { StyleSheet, Text,Image ,  View, StatusBar } from 'react-native';
import { CardStyleInterpolators, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Animated, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from './src/Introduction';
import Home from './src/Home';
import Exam from './src/Exam';
import Question from './src/Question';
import Login from './src/Login';
import SignUp from './src/SignUp';
import Forget from './src/Forget';
import Rules from './src/Rules';
import Profile from './src/Profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BsButton from './src/component/BsButton';
import ReviewQuestion from './src/ReviewQuestion';
import Payemnt from './src/Payemnt';
import Frontimg from './src/Frontimg';
import ProfileSave from './src/ProfileSave';

export default function App() {
  const Stack = createStackNavigator();
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  
    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  }

  return (
    <NavigationContainer>
            <StatusBar
   translucent
   backgroundColor="transparent" // Set the status bar background to transparent
   barStyle="light-content"
/>
      <Stack.Navigator
        initialRouteName="front"
        screenOptions={{
          headerShown: false, 
          cardStyleInterpolator: forFade, 
        }}>
        <Stack.Screen name="front" component={Frontimg} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}   />
        <Stack.Screen name="ProfileSave" component={ProfileSave} options={{ headerShown: false }}   />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="forget" component={Forget} options={{ headerShown: false }} />
        <Stack.Screen name="review" component={ReviewQuestion} options={{ headerShown: false }} />
        <Stack.Screen name="Question" component={Question} options={{ headerShown: false }} />
        <Stack.Screen name="Exam" component={Exam} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Rules" component={Rules} options={{ headerShown: false }} />
        <Stack.Screen name="Introduction" component={Introduction} options={{ headerShown: false }} />
        <Stack.Screen name="payment" component={Payemnt}  options={{ headerShown: false }}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
