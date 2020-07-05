import React from 'react';
import { Text, TextInput,StyleSheet,View } from 'react-native';

 const InputBox = ({label,value,onChangeText, secureTextEntry}) => {
    return (
    <View>
    <Text style = {styles.label}>{label}</Text>
    <TextInput 
    style = {styles.textBox}
    value = {value}
    onChangeText = {onChangeText}
    autoCorrect = {false}
    secureTextEntry = {secureTextEntry}
    />
    </View>
    );
};

const styles = StyleSheet.create({
    label:{
        alignSelf:'flex-start',
        marginBottom:5
    },
    textBox:{
        borderWidth:1,
        borderColor:'black',
        height:40,
        width:300,
        borderRadius:4,
        fontSize:16,
        padding:5,
        marginBottom:10
    }
});

export default InputBox;
