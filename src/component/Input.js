import { ImageBackground, StyleSheet,Dimensions,TextInput, Text, View } from 'react-native';

const  Input =  (props) =>{
    let { text ,value , onBlur, onChangeText , onFocus } = props

    const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

    return(
 <TextInput
    placeholder={text}

    value={value}
    onFocus={onFocus}
    onBlur={onBlur}
    onChangeText={onChangeText}
    style={{ width:screenWidth * 0.76 , paddingBottom: 8,paddingTop:8  }}
  />

    )

}

export default Input;
