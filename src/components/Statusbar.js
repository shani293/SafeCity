import React, { Component } from 'react';
import { StatusBar } from 'react-native'

const Statusbar = () => {
   return (
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#687089" translucent = {true}/>
   )
}
export default Statusbar