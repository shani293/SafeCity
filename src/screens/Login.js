import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import {Loginaction} from '../Redux/Action/Action'

import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({ navigation,Loginaction }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const check= async()=>{


        if(email=='')
        {
            alert('Enter Email')
        }
        else if(password=='')
        {
            alert('Enter password')
        }
        else {
        const formdata=new FormData();
        formdata.append('email',email);
        formdata.append('password',password);
      // console.log(formdata)
        const res=await Loginaction(formdata);
console.log('resssssssssssssssssssssssssssssssssssssssssssssss',res)
if(res.data!=0)
{
navigation.navigate('Home')
}
else{
    console.log('In correct')
}
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 50 }}>
                    <Text style={{ fontSize: 35, color: '#000000', fontWeight: 'bold' }}>SAFE </Text>
                    <Text style={{ fontSize: 35, color: '#000000' }}>CITY</Text>
                </View>
                <Input
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                {/* <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")} style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                    <Text style={{
                        fontSize: 14, color: '#707070', fontFamily: 'OpenSans-SemiBold',
                        marginTop: 10,
                    }}>
                        Forgot password ?
                </Text>

                </TouchableOpacity> */}

                <View style={{height: 20}} />
                <ButtonLarge
                    title="Sign in"
                    onPress={check}
                />

                <View style={{ marginTop: 50, alignSelf: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{
                        fontSize: 14, color: '#040404',
                        marginTop: 10,
                    }}>
                        Don't have account? </Text>

                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                        <Text style={{
                            fontSize: 14, color: '#040404',
                            marginTop: 10,
                        }}>
                            Sign Up
                        </Text>

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}


const mapStatgetoprops=(state)=>{

    const{job}=state.app;

    return{
        job,
    }
    }


    export default connect(mapStatgetoprops,{Loginaction})(Login)