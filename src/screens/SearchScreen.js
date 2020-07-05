import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Alert } from "react-native";

import Search from "../Components/search";

const SearchScreen = () => {
    return(
        <View style = {styles.viewStyle}>
            <Search/>
        </View>
    );

}

const styles = StyleSheet.create({

    viewStyle:{
        alignItems: 'center',
        margin:20,
        justifyContent:'space-evenly',
        //alignSelf:'center',
    },
});

export default SearchScreen;