// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export default function MyTabs() {
//     const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home-active-icon' : 'home-icon';
//           } else if (route.name === 'Exam') {
//             iconName = focused ? 'exam-active-icon' : 'exam-icon';
//           } else if (route.name === 'Question') {
//             iconName = focused ? 'question-active-icon' : 'question-icon';
//           }

//           // You can return any component that you like here!
//           return <Image source={require(`./path-to-icons/${iconName}.png`)} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Exam" component={Exam} />
//       <Tab.Screen name="Question" component={Question} />
//     </Tab.Navigator>
//   );
// }
