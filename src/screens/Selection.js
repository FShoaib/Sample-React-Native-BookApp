import React, { Component } from 'react';
import { Text,StyleSheet, View, TouchableOpacity} from "react-native";

export default function SelectionScreen ({navigation}) {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Select Entry</Text>
            
            <View style = {styles.boxesView}>
                <TouchableOpacity style = {styles.boxR} onPress = { () => {navigation.navigate('Search')}}>
                <Text style = {styles.boxText}>Researcher</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.boxA} onPress = { () => {navigation.navigate('Author')}}>
                    <Text style = {styles.boxText}>Author</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: 'center',
        //height:400,
        //width:500,
        margin:20,
    },
    textStyle:{
        fontSize:30,
        marginBottom:50,
        marginTop:20
    },
    boxesView:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:300,
        width:380,
    },
    boxText:{
        fontSize:30,
        fontWeight:'500',
        color:'white',
        alignSelf:'center'
    },
    boxR:{
        backgroundColor:'#F5813B',
        height:150,
        width:180,
        borderRadius:10,
        justifyContent:'center',
    },
    boxA:{
        backgroundColor:'#70A6DA',
        height:150,
        width:180,
        borderRadius:10,
        justifyContent:'center',
    }

});