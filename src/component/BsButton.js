import { ImageBackground, StyleSheet,TextInput, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const  BsButton =  (props) =>{
    let { name , imgButton , source, onPress} = props
    return(
        <>
        {imgButton ? (
              <TouchableOpacity onPress={onPress}>
                <Image source={source} />
              </TouchableOpacity>
          ) : (
              <TouchableOpacity onPress={onPress}>
                <Text style={{ padding: 10 }}>{name}</Text>
              </TouchableOpacity>
          )}
          </>
    )

}

export default BsButton;
