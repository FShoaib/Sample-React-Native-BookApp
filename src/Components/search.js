import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { bold } from 'ansi-colors';

const Search = ({onChangeDrop,onChangeText, value}) =>{
    return(
    <View>
        <Text style = {styles.label}>Classification</Text>
        <DropDownPicker
        items={[
            {label: 'Author', value: 'Author'},
            {label: 'Book', value: 'Book'},
            {label: 'Quote', value: 'Quote'},
        ]}
        defaultNull
        placeholder="Select a search type"
        containerStyle={{height: 40, width:300, marginBottom:15}}
        //dropDownStyle= {{backgroundColor: '#ffffff'}}
        onChangeItem={onChangeDrop}
        />

        <Text style = {styles.label}>Find: Author, Book or Quote</Text>
        <TextInput 
        style = {styles.textBox}
        value = {value}
        onChangeText = {onChangeText}
        autoCorrect = {false}
        />

        <TouchableOpacity style = {styles.searchButton}>
            <Text style = {{color:'white', alignSelf:'center', fontSize:18}} >Search</Text>
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({

    label:{
        alignSelf:'flex-start',
        marginBottom:5,
        fontWeight:'bold'
        //marginHorizontal:10,
    },
    textBox:{
        borderWidth:1,
        borderColor:'#D4D8D8',
        height:40,
        width:300,
        borderRadius:4,
        fontSize:16,
        padding:5,
        marginBottom:15,
        backgroundColor:'#ffffff'
    },
    searchButton:{
        backgroundColor:'#4472C4',
        padding:10,
        borderRadius:2,
        justifyContent:'',
        width:300,
        //alignSelf:'center',
        justifyContent:'flex-end',
        marginTop:10,
        marginBottom:10
    },

});

export default Search;