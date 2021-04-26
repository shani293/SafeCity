import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import {Signupaction} from '../Redux/Action/Action'

import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Signup({ navigation,Signupaction }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")

    const check= async()=>{


        if(email=='')
        {
            alert('Enter Email')
        }
        else if(password=='')
        {
            alert('Enter password')
        }
        else if(lname=='')
        {
            alert('Enter lastname')
        }
        else if(fname=='')
        {
            alert('Enter Name')
        }
        else {
        const formdata=new FormData();
        formdata.append('firstName',fname);
        formdata.append('password',password);
        formdata.append('email',email);
        formdata.append('lastName',lname);
      // console.log(formdata)
        const res=await Signupaction(formdata);
    // console.log(res)
        if(res.data!=0)
        {
            navigation.navigate('Login')
        }
        else{
    console.log('not Correct')
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

<Input
                    placeholder="First Name"
                    onChangeText={text => setfname(text)}
                    value={fname}
                />

                <Input
                    placeholder="LastName"
                    value={lname}
                    onChangeText={text => setlname(text)}
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
                    title="Sign up"
                    onPress={check}
                />

                <View style={{ marginTop: 50, alignSelf: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{
                        fontSize: 14, color: '#040404',
                        marginTop: 10,
                    }}>
                        Don't have account? </Text>

                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

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

    const{jobs}=state.app;

    return{
        jobs,
    }
    }


    export default connect(mapStatgetoprops,{Signupaction})(Signup)
