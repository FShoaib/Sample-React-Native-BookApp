import firebase from "../config"
import React,{useReducer, useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import InputBox from "../Components/inputBox";
import NameBox from "../Components/nameBox";
import Spinner from "../Components/spinner";

const reducer = (state,action) =>{

    //or type and payload for colorToChange and amount by convention
  
      switch(action.toChange){
        case 'emailID':
            return {...state, emailID: action.val};
        case 'password':
            return {...state, password: action.val};
        case 'fname':
            return {...state, fname: action.val};
        case 'lname':
            return {...state, lname: action.val};
          default:
            return state;
      }
  };

const SignUpScreen = ({navigation}) => {

    const [state, setState] = useReducer(reducer,{ fname:'',lname:'',emailID:'',password:'' });
    const {fname,lname,emailID,password} = state;
    const [error,setError] = useState('');
    const [isloading,setLoad] = useState(false);

    const handleSignup = () => {
        setError('')
        if(emailID === '' || password === '' || fname ==='' || lname==='') {
            Alert.alert('Please complete the fields to sign up')
          } else {
            setLoad(true)
            firebase.auth().createUserWithEmailAndPassword(emailID, password)
            .then((res) =>{
                setLoad(false)
                res.user.updateProfile({
                    displayName: `${fname} + ${lname}`,
                  })
                setLoad(false)
                Alert.alert(
                    'Success!',
                    'Your account has been created',
                    [
                      {
                        text: 'Continue', onPress: () => {
                          navigation.navigate('Selection')
                        }
                      }
                    ],
                    { cancelable: false }
                  )
            })
            .catch( () => {
                setLoad(false)
                setError('An error occured. Please try again.')
            }
            )
          }      
    }
    const renderButton = () => {
        if(isloading){
            return <Spinner size='small'/>;
        }
        return(
            <TouchableOpacity style = {styles.loginButton} onPress = {()=> handleSignup(navigation)}>
            <Text style = {{color:'white', alignSelf:'center', fontSize:18}} >Sign Up</Text>
            </TouchableOpacity>
        )

    }

    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Sign Up</Text>
            <View style = {styles.nameBoxView}>
            <NameBox label = "First Name "
            value = {fname}
            onChangeText = {fname => setState({toChange:'fname',val:fname})} />
            <NameBox label = "Last Name "
            value = {lname}
            onChangeText = {lname => setState({toChange:'lname',val:lname})}/>
            </View>
           <InputBox label = "Email "
            value = {emailID}
            onChangeText = {email => setState({toChange:'emailID',val:email})}
            />
            <InputBox label = "Password"
            value = {password}
            onChangeText = {pass => setState({toChange:'password',val:pass})}
            secureTextEntry
            />
            <InputBox label = "Confirm Password"/>

            <Text style ={styles.errorMsg}>
                {error}
            </Text>

            {renderButton()}

        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: 'center',
        //height:550,
        width:400,
        margin:20,
        //justifyContent:'space-evenly',
        alignSelf:'center',
    },
    textStyle:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:50,
        marginTop:20
    },
    nameBoxView:{
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    loginButton:{
        backgroundColor:'grey',
        padding:10,
        borderRadius:2,
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
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      },
      errorMsg:{
        alignSelf:'center',
        textAlign:'center',
        color:'red',
        fontSize:16
    }
});

export default SignUpScreen;