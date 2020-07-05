import firebase from "../config"
import React, {useState} from "react";
import {Text,StyleSheet, View, TouchableOpacity} from "react-native";
import InputBox from "../Components/inputBox";
import Spinner from "../Components/spinner";


const HomeScreen = ({navigation}) =>{

    const [emailID,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [isloading,setLoad] = useState(false);

    const onLoginPress = () =>{
        setError('')
        setLoad(true)
        // const {username,password} = this.state;
        firebase.auth().signInWithEmailAndPassword(emailID,password)
            .then(() =>{
                setLoad(false)
                navigation.navigate('Selection')
            })
            .catch( () => {
                setLoad(false)
                setError('Incorrect login credentials. Please try again or Sign up')
            }
            )
    }

    const renderButton = () => {
        if(isloading){
            return <Spinner size='small'/>;
        }
        return(
            <TouchableOpacity style = {styles.loginButton} 
            onPress = {() => onLoginPress()}>
            <Text style = {{color:'white', alignSelf:'center', fontSize:18}} >Sign In</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Sign In</Text>

            <InputBox label = "Email"
            value = {emailID}
            onChangeText = {email => setEmail(email)}
            />

            <InputBox label = "Password"
            value ={password}
            onChangeText = {passw => setPassword(passw)}
            secureTextEntry
            />

            <Text style ={styles.errorMsg}>
                {error}
            </Text>

            {renderButton()}     

            <View style = {{flexDirection:"row"}}>
                <Text style={{fontSize:18}}>Don't have an account yet?</Text>
                <Text style ={styles.signupText} onPress={() => navigation.navigate("Sign Up")}>Sign up</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: 'center',
        //height:450,
        width:400,
        margin:20,
        justifyContent:'space-evenly',
        alignSelf:'center',
    },
    textStyle:{
        fontSize:30,
        marginBottom:50,
        marginTop:20,
        fontWeight:'bold',
    },
    loginButton:{
        backgroundColor:'grey',
        padding:10,
        borderRadius:4,
        justifyContent:'',
        width:300,
        alignSelf:'center',
        justifyContent:'flex-end',
        marginTop:10,
        marginBottom:10
    },
    signupText:{
        color: 'blue',
        textDecorationLine: 'underline',
        marginLeft: 3,
        fontSize:18
    },
    errorMsg:{
        alignSelf:'center',
        textAlign:'center',
        color:'red',
        fontSize:16
    }
});

export default HomeScreen;